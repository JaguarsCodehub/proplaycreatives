import { BrandSlideshow } from '@/components/brand-slideshow';
import { Footer } from '@/components/footer-section';

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-white py-20'>
      {/* Contact Information Section */}
      <div className='max-w-2xl mx-auto mb-16'>
        <div
          className='relative bg-white/60 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 flex flex-col items-center border border-transparent'
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
        >
          <div className='absolute -inset-1 rounded-3xl z-0 bg-gradient-to-br from-blue-400/30 via-purple-300/20 to-pink-300/20 blur-lg'></div>
          <div className='relative z-10 w-full flex flex-col items-center'>
            <h2 className='text-3xl font-bold font-poppins text-gray-900 mb-6 tracking-tight'>
              Get in Touch
            </h2>
            <p className='text-lg text-gray-700 font-poppins mb-8 text-center max-w-xl'>
              Ready to start your next project? Let's discuss how we can help
              bring your vision to life.
            </p>
            <div className='flex flex-col md:flex-row md:space-x-12 w-full justify-center items-center mb-8'>
              <div className='flex items-center space-x-4 mb-6 md:mb-0'>
                <span className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg'>
                  {/* Mail Icon */}
                  <svg
                    className='w-7 h-7 text-white'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2.2'
                    viewBox='0 0 24 24'
                  >
                    <rect
                      width='20'
                      height='14'
                      x='2'
                      y='5'
                      rx='4'
                      fill='#fff'
                    />
                    <path
                      d='M2 7l10 6 10-6'
                      stroke='#6366f1'
                      strokeWidth='2.2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <span className='font-poppins text-lg text-gray-900 select-all'>
                  creativesproplay@gmail.com
                </span>
              </div>
              <div className='flex items-center space-x-4'>
                <span className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-blue-400 shadow-lg'>
                  {/* Phone Icon */}
                  <svg
                    className='w-7 h-7 text-white'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2.2'
                    viewBox='0 0 24 24'
                  >
                    <rect
                      width='20'
                      height='20'
                      x='2'
                      y='2'
                      rx='6'
                      fill='#fff'
                    />
                    <path
                      d='M6.5 8.5a13 13 0 009 9l2.5-2.5a1.5 1.5 0 011.5-.4c1.1.3 2.3.5 3.5.5a1.5 1.5 0 011.5 1.5V21a1.5 1.5 0 01-1.5 1.5C7.6 22.5 1.5 16.4 1.5 9.5A1.5 1.5 0 013 8h3.5a1.5 1.5 0 011.5 1.5c0 1.2.2 2.4.5 3.5a1.5 1.5 0 01-.4 1.5L6.5 17.5z'
                      stroke='#22c55e'
                      strokeWidth='2.2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <span className='font-poppins text-md text-gray-900 select-all'>
                  +91-9136395765
                </span>
              </div>
            </div>
            <div className='w-full border-t border-gray-200 my-4'></div>
            <div className='flex flex-col items-center'>
              <span className='text-gray-600 font-poppins text-base mb-1 tracking-wide'>
                Partners
              </span>
              <span className='font-poppins text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold tracking-tight'>
                Rohit Daundkar & Ritesh Daundkar
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Slideshow */}
      <BrandSlideshow />

      {/* Footer */}
      <Footer />
    </div>
  );
} 