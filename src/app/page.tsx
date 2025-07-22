import Image from "next/image";
import HeroScrollAnimation from "@/components/hero-scroll-animation";
import { Case } from '@/components/cases-with-infinite-scroll';
import { Features } from '@/components/features-11';
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

      <div className='px-8 bg-black h-[150vh] md:h-[100vh]'>
        <h1 className='pt-6 px-12 text-3xl md:text-5xl tracking-tight lg:max-w-3xl font-merriweather text-white md:pb-12 pb-24'>
          We Excel in connecting brands with the{' '}
          <span className='underline bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent'>
            rightful creators.
          </span>
        </h1>
        <Features />
      </div>

      {/* Footer */}
      <footer className='bg-black text-white py-8 mt-8'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6'>
          <div className='font-bold text-lg tracking-wide font-poppins'>
            Pro Play Creatives
          </div>
          <nav className='flex flex-wrap gap-6 text-sm font-poppins'>
            <Link href='/' className='hover:underline'>
              Home
            </Link>
            <Link href='/about' className='hover:underline'>
              About
            </Link>
            <Link href='/contact' className='hover:underline'>
              Contact
            </Link>
            <Link href='/privacy' className='hover:underline'>
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
