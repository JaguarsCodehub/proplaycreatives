'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Building2, 
  Mail, 
  Calendar, 
  Search, 
  Filter, 
  Download,
  Eye,
  Trash2,
  RefreshCw,
  TrendingUp,
  BarChart3,
  UserCheck,
  Building
} from 'lucide-react';
import ContactDetailModal from '@/components/contact-detail-modal';

interface Contact {
  _id: string;
  name: string;
  email: string;
  category: 'brand' | 'creator';
  createdAt: string;
  updatedAt: string;
}

interface Stats {
  total: number;
  brands: number;
  creators: number;
  recent24h: number;
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, brands: 0, creators: 0, recent24h: 0 });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'brand' | 'creator'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'category'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    filterAndSortContacts();
  }, [contacts, searchTerm, filterCategory, sortBy, sortOrder]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/contact');
      const data = await response.json();
      
      if (data.contacts) {
        setContacts(data.contacts);
        calculateStats(data.contacts);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (contactList: Contact[]) => {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const stats: Stats = {
      total: contactList.length,
      brands: contactList.filter(c => c.category === 'brand').length,
      creators: contactList.filter(c => c.category === 'creator').length,
      recent24h: contactList.filter(c => new Date(c.createdAt) > twentyFourHoursAgo).length
    };

    setStats(stats);
  };

  const filterAndSortContacts = () => {
    let filtered = contacts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (filterCategory !== 'all') {
      filtered = filtered.filter(contact => contact.category === filterCategory);
    }

    // Sort
    filtered.sort((a, b) => {
      let aValue: string | number | Date, bValue: string | number | Date;

      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'category':
          aValue = a.category;
          bValue = b.category;
          break;
        case 'date':
        default:
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
          break;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredContacts(filtered);
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Category', 'Created At'];
    const csvContent = [
      headers.join(','),
      ...filteredContacts.map(contact => [
        `"${contact.name}"`,
        `"${contact.email}"`,
        contact.category,
        new Date(contact.createdAt).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleViewContact = (contact: Contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedContact(null);
  };

  const handleDeleteContact = async (contactId: string) => {
    if (!confirm('Are you sure you want to delete this contact? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: contactId }),
      });

      if (response.ok) {
        // Remove from local state
        setContacts(prev => prev.filter(c => c._id !== contactId));
        // Close modal if it's open
        if (selectedContact?._id === contactId) {
          handleCloseModal();
        }
      } else {
        const data = await response.json();
        alert(`Error deleting contact: ${data.error}`);
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('Error deleting contact. Please try again.');
    }
  };

  const StatCard = ({ title, value, icon: Icon, color, trend }: {
    title: string;
    value: number;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    trend?: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 ${color} font-poppins`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2 font-poppins">{title}</p>
          <p className="text-4xl font-bold text-gray-900 font-poppins">{value}</p>
          {trend && (
            <p className="text-sm text-green-600 mt-2 flex items-center gap-1 font-poppins">
              <TrendingUp className="w-4 h-4" />
              {trend}
            </p>
          )}
        </div>
        <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-inner">
          <Icon className="w-8 h-8 text-gray-700" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-poppins">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-poppins">Admin Dashboard</h1>
              <p className="text-sm text-gray-600 font-poppins mt-1">Manage contact submissions</p>
            </div>
            <button
              onClick={fetchContacts}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl font-poppins font-medium"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StatCard
            title="Total Submissions"
            value={stats.total}
            icon={BarChart3}
            color="hover:border-blue-200"
            trend={stats.recent24h > 0 ? `+${stats.recent24h} in 24h` : undefined}
          />
          <StatCard
            title="Brands"
            value={stats.brands}
            icon={Building}
            color="hover:border-green-200"
          />
          <StatCard
            title="Creators"
            value={stats.creators}
            icon={UserCheck}
            color="hover:border-purple-200"
          />
          <StatCard
            title="Recent (24h)"
            value={stats.recent24h}
            icon={TrendingUp}
            color="hover:border-orange-200"
          />
        </div>

        {/* Filters and Search */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/50 p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-poppins transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value as 'all' | 'brand' | 'creator')}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-poppins transition-all duration-300"
              >
                <option value="all">All Categories</option>
                <option value="brand">Brands Only</option>
                <option value="creator">Creators Only</option>
              </select>

              {/* Sort */}
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [sort, order] = e.target.value.split('-');
                  setSortBy(sort as 'date' | 'name' | 'category');
                  setSortOrder(order as 'asc' | 'desc');
                }}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-poppins transition-all duration-300"
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="category-asc">Category A-Z</option>
                <option value="category-desc">Category Z-A</option>
              </select>
            </div>

            {/* Export Button */}
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins font-medium"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/50 overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-200/50">
            <h2 className="text-xl font-semibold text-gray-900 font-poppins">
              Contact Submissions ({filteredContacts.length})
            </h2>
          </div>

                     {loading ? (
             <div className="flex items-center justify-center py-16">
               <RefreshCw className="w-10 h-10 animate-spin text-gray-400" />
               <span className="ml-3 text-gray-600 font-poppins text-lg">Loading contacts...</span>
             </div>
           ) : filteredContacts.length === 0 ? (
             <div className="flex flex-col items-center justify-center py-16">
               <Users className="w-16 h-16 text-gray-400 mb-6" />
               <p className="text-gray-600 font-poppins text-lg mb-2">No contacts found</p>
               <p className="text-sm text-gray-500 font-poppins">Try adjusting your search or filters</p>
             </div>
           ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                                 <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                   <tr>
                     <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-poppins">
                       Contact
                     </th>
                     <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-poppins">
                       Category
                     </th>
                     <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-poppins">
                       Submitted
                     </th>
                     <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-poppins">
                       Actions
                     </th>
                   </tr>
                 </thead>
                                 <tbody className="bg-white/50 divide-y divide-gray-200/50">
                   <AnimatePresence>
                     {filteredContacts.map((contact, index) => (
                       <motion.tr
                         key={contact._id}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -20 }}
                         transition={{ delay: index * 0.05 }}
                         className="hover:bg-gray-50/80 transition-all duration-300 font-poppins"
                       >
                         <td className="px-8 py-6 whitespace-nowrap">
                           <div>
                             <div className="text-sm font-semibold text-gray-900 font-poppins">
                               {contact.name}
                             </div>
                             <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                               <Mail className="w-4 h-4" />
                               {contact.email}
                             </div>
                           </div>
                         </td>
                         <td className="px-8 py-6 whitespace-nowrap">
                           <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                             contact.category === 'brand'
                               ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800'
                               : 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800'
                           }`}>
                             {contact.category === 'brand' ? (
                               <Building2 className="w-3 h-3" />
                             ) : (
                               <Users className="w-3 h-3" />
                             )}
                             {contact.category}
                           </span>
                         </td>
                         <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-500">
                           <div className="flex items-center gap-2">
                             <Calendar className="w-4 h-4" />
                             <span className="font-poppins">{new Date(contact.createdAt).toLocaleDateString()}</span>
                           </div>
                           <div className="text-xs text-gray-400 mt-1 font-poppins">
                             {new Date(contact.createdAt).toLocaleTimeString()}
                           </div>
                         </td>
                         <td className="px-8 py-6 whitespace-nowrap text-sm font-medium">
                           <div className="flex items-center gap-3">
                             <button 
                               onClick={() => handleViewContact(contact)}
                               className="p-2 text-blue-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300"
                             >
                               <Eye className="w-5 h-5" />
                             </button>
                             <button 
                               onClick={() => handleDeleteContact(contact._id)}
                               className="p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded-lg transition-all duration-300"
                             >
                               <Trash2 className="w-5 h-5" />
                             </button>
                           </div>
                         </td>
                       </motion.tr>
                     ))}
                   </AnimatePresence>
                 </tbody>
              </table>
            </div>
          )}
                 </div>
       </div>

       {/* Contact Detail Modal */}
       <ContactDetailModal
         contact={selectedContact}
         isOpen={isModalOpen}
         onClose={handleCloseModal}
         onDelete={handleDeleteContact}
       />
     </div>
   );
 }
