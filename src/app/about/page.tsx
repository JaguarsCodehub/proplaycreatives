import { BrandSlideshow } from '@/components/brand-slideshow';
import { Footer } from '@/components/footer-section';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>About Us</h1>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            We are a creative agency passionate about building brands that
            matter.
          </p>
        </div>
      </div>

      {/* Brand Slideshow */}
      <BrandSlideshow />

      {/* Footer */}
      <Footer />
    </div>
  );
} 