import { FlipWords } from '@/components/flip-words';
import Image from 'next/image';

export default function WhyUsPage() {

  const words = ['build', 'scale', 'deploy', 'design'];
  return (
    <div className='min-h-screen bg-white py-20'>
      <div className='z-40 max-w-4xl mx-auto text-center space-y-6'>
        <h1 className='text-3xl md:text-7xl font-medium font-poppins leading-tight tracking-tight text-black'>
          We{' '}
          <span className='text-emerald-600'>
            <FlipWords words={words} />
          </span>
          the tech;
          <br />
          you drive the growth
        </h1>

        <p className='text-md md:text-xl text-black/90'>
          Let’s transform your vision into a world-class product faster than you
          thought possible.
        </p>

        <div className='flex flex-col items-center space-y-4'>
          {/* <Button
              className='z-50 cursor-pointer px-12 py-2 text-base font-normal text-white bg-black rounded-full hover:bg-black/90'
              onClick={() => setDrawerOpen(true)}
            >
              Bet your luck on us{' '}
              <span>
                <ArrowLeft className='text-emerald-400' />
              </span>{' '}
              Click Here
            </Button> */}

          

          {/* <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-emerald-500 rounded-full'></div>
              <span className='text-sm text-black/90'>Available now</span>
            </div> */}
        </div>
      </div>
    </div>
  );
} 