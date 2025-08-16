'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Circle, X, Users, Building2, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { FlipWords } from './flip-words';

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-blue-500/[0.08]',
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        style={{
          width,
          height,
        }}
        className='relative'
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'backdrop-blur-[2px] border-2 border-white/60',
            'shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]',
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.9),transparent_70%)]'
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'brands' | 'creators'>('brands');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // Form state
  const [brandForm, setBrandForm] = useState({
    name: '',
    email: ''
  });
  
  const [creatorForm, setCreatorForm] = useState({
    channelName: '',
    email: '',
    channelLink: ''
  });

  const handleSubmit = async (e: React.FormEvent, category: 'brand' | 'creator') => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = category === 'brand' ? brandForm : creatorForm;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...(category === 'brand' 
            ? { name: (formData as any).name } 
            : { channelName: (formData as any).channelName, channelLink: (formData as any).channelLink }
          ),
          email: formData.email,
          category
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        // Reset form
        if (category === 'brand') {
          setBrandForm({ name: '', email: '' });
        } else {
          setCreatorForm({ channelName: '', email: '', channelLink: '' });
        }
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setMessage(null);
        }, 2000);
      } else {
        setMessage({ type: 'error', text: data.error });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'brand' | 'creator') => {
    const { name, value } = e.target;
    if (category === 'brand') {
      setBrandForm(prev => ({ ...prev, [name]: value }));
    } else {
      setCreatorForm(prev => ({ ...prev, [name]: value }));
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-poppins font-semibold text-black">Get Started</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => setActiveTab('brands')}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-4 px-6 font-poppins font-medium transition-all",
              activeTab === 'brands'
                ? "text-black border-b-2 border-black bg-gray-50"
                : "text-gray-500 hover:text-black hover:bg-gray-50"
            )}
          >
            <Building2 className="w-5 h-5" />
            For Brands
          </button>
          <button
            onClick={() => setActiveTab('creators')}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-4 px-6 font-poppins font-medium transition-all",
              activeTab === 'creators'
                ? "text-black border-b-2 border-black bg-gray-50"
                : "text-gray-500 hover:text-black hover:bg-gray-50"
            )}
          >
            <Users className="w-5 h-5" />
            For Creators
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Message Display */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "p-4 rounded-lg font-poppins text-sm",
                  message.type === 'success' 
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                )}
              >
                {message.text}
              </motion.div>
            )}

            {activeTab === 'brands' ? (
              <form onSubmit={(e) => handleSubmit(e, 'brand')} className="space-y-6">
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-black mb-4">
                    Amplify Your Brand with Creator Partnerships
                  </h3>
                  
                  {/* Input Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={brandForm.name}
                        onChange={(e) => handleInputChange(e, 'brand')}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg font-poppins focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Enter your company name"
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={brandForm.email}
                        onChange={(e) => handleInputChange(e, 'brand')}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg font-poppins focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-poppins font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    'Start Brand Partnership'
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, 'creator')} className="space-y-6">
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-black mb-4">
                    Grow Your Creator Business
                  </h3>
                  
                  {/* Input Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                        Creator Name *
                      </label>
                      <input
                        type="text"
                        name="channelName"
                        value={creatorForm.channelName}
                        onChange={(e) => handleInputChange(e, 'creator')}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg font-poppins focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Enter your channel name"
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={creatorForm.email}
                        onChange={(e) => handleInputChange(e, 'creator')}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg font-poppins focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                        Channel Link *
                      </label>
                      <input
                        type="url"
                        name="channelLink"
                        value={creatorForm.channelLink}
                        onChange={(e) => handleInputChange(e, 'creator')}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg font-poppins focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="https://youtube.com/@yourchannel"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-poppins font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    'Join Creator Network'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = 'Design Collective',
  title1 = 'Elevate Your Digital Vision',
  title2 = 'Crafting Exceptional Websites',
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className='relative min-h-screen w-full flex items-start pt-20 justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl' />

        <div className='absolute inset-0 overflow-hidden'>
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient='from-blue-500/[0.25] to-cyan-400/[0.3]'
            className='left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]'
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient='from-rose-500/[0.25] to-pink-400/[0.3]'
            className='right-[-5%] md:right-[0%] top-[70%] md:top-[75%]'
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient='from-violet-500/[0.25] to-purple-400/[0.3]'
            className='left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]'
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient='from-amber-500/[0.25] to-orange-400/[0.3]'
            className='right-[15%] md:right-[20%] top-[10%] md:top-[15%]'
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient='from-emerald-500/[0.25] to-green-400/[0.3]'
            className='left-[20%] md:left-[25%] top-[5%] md:top-[10%]'
          />

          <ElegantShape
            delay={0.8}
            width={180}
            height={50}
            rotate={35}
            gradient='from-indigo-500/[0.25] to-blue-400/[0.3]'
            className='right-[5%] md:right-[10%] bottom-[20%] md:bottom-[25%]'
          />

          <ElegantShape
            delay={0.9}
            width={120}
            height={35}
            rotate={-40}
            gradient='from-teal-500/[0.25] to-cyan-400/[0.3]'
            className='left-[30%] md:left-[35%] top-[60%] md:top-[65%]'
          />
        </div>

        <div className='relative z-10 container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center'>
            <motion.div
              variants={fadeUpVariants}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className='inline-flex font-poppins items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-gray-200/50 mb-6 md:mb-8 shadow-sm backdrop-blur-sm'
            >
              <Circle className='h-2 w-2 fill-rose-500' />
              <span className='text-sm text-gray-600 tracking-wide'>
                {badge}
              </span>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            >
              <h1 className='text-4xl font-poppins sm:text-6xl md:text-7xl mb-4 md:mb-6 tracking-tight'>
                <span className='bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700'>
                  {title1}
                </span>
                <br />
                <span
                  className={cn(
                    'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600'
                  )}
                >
                  {title2}
                  <FlipWords
                    words={['gamers', 'brands', 'creators', 'investors']}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className='group relative inline-flex items-center justify-center px-4 py-2 text-lg font-poppins font-semibold text-white bg-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden'
              >
                <span className=' relative z-10 flex items-center gap-2'>
                  <span className='text-sm'>Get Started</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className='w-5 h-5' />
                  </motion.div>
                </span>
                <div className='absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full' />
              </button>
            </motion.div>
          </div>
        </div>

        <div className='absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/60 pointer-events-none' />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export { HeroGeometric };
