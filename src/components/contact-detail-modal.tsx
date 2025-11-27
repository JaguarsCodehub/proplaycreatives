'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Calendar, Building2, Users, MapPin, Phone, Globe } from 'lucide-react';

interface Contact {
  _id: string;
  name?: string; // For brands
  channelName?: string; // For creators
  channelLink?: string; // For creators
  email: string;
  category: 'brand' | 'creator';
  createdAt: string;
  updatedAt: string;
}

interface ContactDetailModalProps {
  contact: Contact | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete?: (contactId: string) => void;
}

export default function ContactDetailModal({ contact, isOpen, onClose, onDelete }: ContactDetailModalProps) {
  if (!contact) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      time: date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      }),
      relative: getRelativeTime(date)
    };
  };

  const getRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  };

  const dateInfo = formatDate(contact.createdAt);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 font-poppins"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-gray-200/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-poppins">Contact Details</h2>
                <p className="text-sm text-gray-600 font-poppins mt-1">View submission information</p>
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-gray-200 rounded-full transition-all duration-300"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-inner">
                                  <div className="flex items-center gap-6 mb-6">
                    <div className={`p-4 rounded-2xl shadow-lg ${
                      contact.category === 'brand' 
                        ? 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700' 
                        : 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700'
                    }`}>
                      {contact.category === 'brand' ? (
                        <Building2 className="w-8 h-8" />
                      ) : (
                        <Users className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-2">
                        {contact.category === 'brand' ? contact.name : contact.channelName}
                      </h3>
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                        contact.category === 'brand'
                          ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800'
                          : 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800'
                      }`}>
                        {contact.category === 'brand' ? (
                          <Building2 className="w-4 h-4" />
                        ) : (
                          <Users className="w-4 h-4" />
                        )}
                        {contact.category}
                      </span>
                    </div>
                  </div>

                                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700 font-poppins font-medium">{contact.email}</span>
                    </div>
                    
                    {contact.category === 'creator' && contact.channelLink && (
                      <div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl">
                        <Globe className="w-5 h-5 text-gray-500" />
                        <a 
                          href={contact.channelLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-poppins font-medium hover:underline truncate"
                        >
                          {contact.channelLink}
                        </a>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <div className="font-poppins">
                        <span className="text-gray-700 font-medium">{dateInfo.date}</span>
                        <span className="text-gray-500 ml-2">at {dateInfo.time}</span>
                        <span className="text-gray-400 ml-2">({dateInfo.relative})</span>
                      </div>
                    </div>
                  </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Submission ID</h4>
                  <p className="text-sm text-gray-600 font-mono bg-gray-50 p-3 rounded-lg">{contact._id}</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Last Updated</h4>
                  <p className="text-sm text-gray-600 font-poppins">
                    {new Date(contact.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Category Specific Info */}
              <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 rounded-2xl p-8 shadow-inner">
                <h4 className="font-bold text-gray-900 mb-4 text-xl font-poppins">
                  {contact.category === 'brand' ? 'Brand Information' : 'Creator Information'}
                </h4>
                
                {contact.category === 'brand' ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl">
                      <Building2 className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700 font-poppins font-medium">Company/Brand</span>
                    </div>
                    <p className="text-sm text-gray-600 font-poppins leading-relaxed">
                      This contact represents a brand or company looking to partner with creators for marketing campaigns and brand collaborations.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl">
                      <Users className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700 font-poppins font-medium">Content Creator</span>
                    </div>
                    <p className="text-sm text-gray-600 font-poppins leading-relaxed">
                      This contact represents a content creator looking for brand partnerships and collaboration opportunities.
                    </p>
                  </div>
                )}
              </div>

                            {/* Actions */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200/50">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins font-medium">
                  <Mail className="w-4 h-4" />
                  Send Email
                </button>
                
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins font-medium">
                  <Globe className="w-4 h-4" />
                  View Profile
                </button>
                
                <button 
                  onClick={() => {
                    if (onDelete) {
                      onDelete(contact._id);
                    }
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-100 to-red-200 text-red-700 rounded-xl hover:from-red-200 hover:to-red-300 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins font-medium ml-auto"
                >
                  <X className="w-4 h-4" />
                  Delete Contact
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
