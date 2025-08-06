import Image from "next/image";
import HeroScrollAnimation from "@/components/hero-scroll-animation";
import { Case } from '@/components/cases-with-infinite-scroll';
import { Features } from '@/components/features-11';
import { BrandGrid } from '@/components/brand-grid';
import { BrandSlideshow } from '@/components/brand-slideshow';
import { Footer } from '@/components/footer-section';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-full bg-black'>
      {/* Hero Scroll Animation Section */}
      <HeroScrollAnimation />

      <div className='px-8 bg-black md:h-[100vh] h-[60vh]'>
        <Case />
      </div>

      <div className='px-8 bg-black h-[100vh] md:h-[150vh]'>
        <h1 className='pt-10 px-4 text-4xl md:text-6xl tracking-tight lg:max-w-3xl font-merriweather text-white md:pb-12 pb-24'>
          We Excel in connecting brands with the{' '}
          <span className='underline bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent'>
            rightful creators.
          </span>
        </h1>
        <div>
          <Image
            src={'/people-brands.jpg'}
            alt='People and brands'
            width={1000}
            height={1000}
            className='md:w-full md:h-full w-full h-1/2 object-cover'
          />
        </div>
      </div>

      {/* Brand Grid Section */}
      {/* <BrandGrid /> */}

      <Features />

      <section className='mt-8'>
        {/* Brand Grid Section */}
        <BrandGrid />
      </section>

      {/* Brand Slideshow */}
      <BrandSlideshow />

      {/* Footer */}
      <Footer />
    </div>
  );
}
