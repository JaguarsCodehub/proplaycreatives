'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef, useState } from 'react';
import MacOSDock from './mac-os-dock';
import { Features } from './features-10';
import { Case } from './cases-with-infinite-scroll';
import { ImageGeneration } from './ai-chat-image-generation';
import { Button } from './button';

const sampleApps = [
  {
    id: 'finder',
    name: 'Finder',
    icon: 'https://cdn-images.dzcdn.net/images/talk/ab511be54d0f8cbff04218e352e834dc/0x1900-000000-80-0-0.jpg',
  },
  {
    id: 'calculator',
    name: 'Calculator',
    icon: 'https://i.pinimg.com/1200x/d6/66/22/d66622f14d699a3204098568def9d785.jpg',
  },
  {
    id: 'terminal',
    name: 'Terminal',
    icon: 'https://i.pinimg.com/736x/d6/e5/b3/d6e5b3e94e630f7374c8a687fafe24b9.jpg',
  },
  {
    id: 'mail',
    name: 'Mail',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLgElXdRHVibHBeDyEmTLN4IDxBWf5zMtPCAVAreixToboE97k9ZrHOtf5kHh2Ov7XXQ&usqp=CAU',
  },
  {
    id: 'music',
    name: 'Music',
    icon: 'https://upload.wikimedia.org/wikipedia/en/6/63/Battleground_Mobile_India.webp',
  },
  {
    id: 'safari',
    name: 'Safari',
    icon: 'https://play-lh.googleusercontent.com/Rx62F7BIPcyMtJuE1kjODN1-2FBHJcZEAzaiPbq20bI_Hyt0Cwf1vjoqylzlW4m-RJy6',
  },
  {
    id: 'photos',
    name: 'Photos',
    icon: 'https://esportbet.com/data-central/images/casinos/hb-logo/1xbet.jpg',
  },
  {
    id: 'notes',
    name: 'Notes',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/ALOHA_Logo.jpg',
  },
  {
    id: 'calendar',
    name: 'Calendar',
    icon: 'https://cdn.jim-nielsen.com/macos/1024/calendar-2021-04-29.png?rf=1024',
  },
];

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {

   const [openApps, setOpenApps] = useState<string[]>(['finder', 'safari']);

   const handleAppClick = (appId: string) => {
     console.log('App clicked:', appId);

     // Toggle app in openApps array
     setOpenApps((prev) =>
       prev.includes(appId)
         ? prev.filter((id) => id !== appId)
         : [...prev, appId]
     );
   };
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky top-0 h-screen bg-white flex flex-col items-center text-black'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <h1 className='2xl:text-8xl text-5xl px-8 font-merriweather font-medium w-lg 2xl:w-7xl text-center mt-18 bg-gradient-to-r from-black to-zinc-400 bg-clip-text text-transparent'>
        Creators. Brands. Culture. We Connect Them All.
      </h1>
      <div className='flex justify-center w-full'>
        <p className='max-w-3xl mt-8 py-4 px-4 text-center text-2xl 2xl:text-4xl font-merriweather font-medium bg-gradient-to-r from-black to-zinc-500 bg-clip-text text-transparent'>
          Your story deserves to be told by voices that matter, So{' '}
          <span className='inline-block rounded-md px-2 bg-green-600 text-white mt-1'>We make the connections that matter.</span>
        </p>
      </div>

      <div className='flex w-full flex-grow items-center justify-center overflow-hidden'>
        {/* Desktop view: MacOS Dock */}
        <div className='hidden lg:block'>
          <MacOSDock
            apps={sampleApps}
            onAppClick={handleAppClick}
            openApps={openApps}
          />
        </div>

        {/* Mobile view: Buttons */}
        <div className='sm:block lg:hidden z-50'>
          <Button
            variant='outline'
            className='cursor-pointer mb-20 rounded-xl border-2 border-black bg-zinc-200 px-10 py-6 font-merriweather text-2xl font-bold text-black shadow-lg transition-all duration-300 ease-in-out hover:bg-black hover:text-white'
          >
            For Brands and Creators
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  // Card data as in the image
  const cards = [
    {
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      title: 'Mahou',
      subtitle: 'Uplifting a 5-star brand',
    },
    {
      img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      title: 'Cupra',
      subtitle: 'Shaping an expansive brand ecosystem',
    },
    {
      img: '', // This is the abstract shape, so we'll use a colored SVG or div
      title: 'Wallapop',
      subtitle: 'Revamping the iconic marketplace for an even bigger scale',
      isShape: true,
    },
  ];

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative h-[100vh] py-20 bg-black flex flex-col items-center justify-center'
    >
      <h2 className='text-4xl md:text-5xl font-poppins font-light text-center text-white mb-14 mt-20 max-w-3xl mx-auto tracking-tighter'>
        For those who think
        <br />
        beyond, and believe in
        <br />
        the power of brands
      </h2>
      {/* <Features /> */}

      <div>
        {/* <ImageGeneration> */}
          <img
            className='aspect-video object-cover w-3xl'
            src='/brains.jpg'
            alt='21st og generation'
          />
        {/* </ImageGeneration> */}
      </div>
    </motion.section>
  );
};

const Component = forwardRef<HTMLElement>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className='relative h-[200vh] bg-black'>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        {/* <footer className='group bg-[#06060e] '>
          <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
            ui-layout
          </h1>
          <div className='bg-black text-white h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
        </footer> */}
      </main>
    </>
  );
});

Component.displayName = 'Component';

export default Component;