'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from './carousel';

const logos = [
  { src: '/samsung.png', alt: 'Aloha Logo' },
  { src: '/beardo logo.png', alt: 'Beardo Logo' },
  { src: '/bewakoof.png', alt: 'After01 Logo' },
  { src: '/redbull-logo.jpg', alt: 'Vercel Logo' },
  { src: '/ALOHA_Logo.jpg', alt: 'Aloha' },
  { src: '/hell-logo.png', alt: 'Globe Logo' },
  { src: '/weplay.png', alt: 'File Logo' },
  { src: '/mostbet.jpeg', alt: 'Window Logo' },
];

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className='w-full py-20 lg:py-40'>
      <div className='container mx-auto'>
        <div className='flex flex-col  gap-10'>
          <h2 className='text-2xl md:text-5xl tracking-tighter lg:max-w-xl font-poppins text-white text-left'>
            Trusted by hundreds of big brands worldwide
          </h2>
          <Carousel setApi={setApi} className='w-full'>
            <CarouselContent>
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem
                  className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6'
                  key={index}
                >
                  <div className='flex rounded-xl aspect-square bg-muted items-center justify-center p-4 sm:p-6 md:p-8'>
                    <Image
                      src={logos[index % logos.length].src}
                      alt={logos[index % logos.length].alt}
                      width={160}
                      height={160}
                      className='object-contain w-full h-full'
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
