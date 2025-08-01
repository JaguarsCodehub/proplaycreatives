'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardTitle } from './card';

interface BrandItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

const brandData: BrandItem[] = [
  {
    id: 'samsung',
    title: 'Samsung',
    description: 'Elevating mobile innovation through creative partnerships',
    imageSrc: '/samsung-brand.jpg',
    imageAlt: 'Samsung logo',
    size: 'large'
  },
  {
    id: 'redbull',
    title: 'Red Bull',
    description: 'Energizing brand experiences with dynamic creator collaborations',
    imageSrc: '/redbull-brand1.jpg',
    imageAlt: 'Red Bull logo',
    size: 'large'
  },
  {
    id: 'bewakoof',
    title: 'Bewakoof',
    description: 'Revolutionizing fashion through authentic creator storytelling',
    imageSrc: '/bewakoof-brand.jpg',
    imageAlt: 'Bewakoof logo',
    size: 'large'
  },
  {
    id: 'beardo',
    title: 'Beardo',
    description: 'Crafting masculine grooming narratives with precision',
    imageSrc: '/beardo-brand.png',
    imageAlt: 'Beardo logo',
    size: 'medium'
  },
  {
    id: 'hell',
    title: 'Hell Energy',
    description: 'Powering up brand presence with high-energy creator campaigns',
    imageSrc: '/hell-brand.jpg',
    imageAlt: 'Hell Energy logo',
    size: 'tall'
  },
  {
    id: 'mostbet',
    title: 'Mostbet',
    description: 'Betting on success through strategic creator partnerships',
    imageSrc: '/mostbet.jpeg',
    imageAlt: 'Mostbet logo',
    size: 'medium'
  }
];

export function BrandGrid() {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1';
      case 'medium':
        return 'col-span-1 row-span-1';
      case 'large':
        return 'col-span-2 row-span-2';
      case 'wide':
        return 'col-span-2 row-span-1';
      case 'tall':
        return 'col-span-1 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getAspectRatio = (size: string) => {
    switch (size) {
      case 'small':
        return 'aspect-square';
      case 'medium':
        return 'aspect-[4/3]';
      case 'large':
        return 'aspect-square';
      case 'wide':
        return 'aspect-[2/1]';
      case 'tall':
        return 'aspect-[3/4]';
      default:
        return 'aspect-[4/3]';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.section 
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </motion.div> */}
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 font-merriweather font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Brand Partners
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We've helped these incredible brands connect with the right creators to achieve remarkable results
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-[220px] md:auto-rows-[280px] relative"
          variants={containerVariants}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 rounded-3xl -z-10" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
          {brandData.map((brand, index) => (
            <motion.div
              key={brand.id}
              className={`${getSizeClasses(brand.size)}`}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="bg-white border-0 hover:shadow-2xl transition-all duration-500 group overflow-hidden cursor-pointer rounded-2xl h-full relative">
                <CardContent className="p-0 h-full flex flex-col">
                  <motion.div 
                    className={`relative ${getAspectRatio(brand.size)} overflow-hidden rounded-t-2xl flex-1`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={brand.imageSrc}
                      alt={brand.imageAlt}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Professional gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Brand name overlay on image */}
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                    >
                      <h3 className="text-white text-xl md:text-2xl font-bold font-poppins mb-2 drop-shadow-lg">
                        {brand.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base font-poppins leading-relaxed drop-shadow-md">
                        {brand.description}
                      </p>
                    </motion.div>
                    
                    {/* Subtle border glow effect */}
                    <div className="absolute inset-0 rounded-t-2xl border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                  
                  {/* Bottom content area with glass effect */}
                  <motion.div 
                    className="p-4 md:p-6 bg-white/95 backdrop-blur-sm border-t border-gray-100 flex-shrink-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2 font-poppins">
                          {brand.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-xs md:text-sm leading-relaxed font-poppins">
                          {brand.description}
                        </CardDescription>
                      </div>
                      
                      {/* Professional arrow indicator */}
                      <motion.div 
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ml-4 group-hover:bg-yellow-400 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg 
                          className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </CardContent>
                
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
} 