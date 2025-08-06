import { BrandSlideshow } from '@/components/brand-slideshow';
import { Footer } from '@/components/footer-section';

export default function WorkPage() {
  return (
    <div className='min-h-screen bg-white py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-medium font-poppins text-gray-900 mb-2'>Coming Soon</h1>
          <p className='text-lg font-poppins text-gray-600 max-w-3xl mx-auto'>
            Explore our portfolio of creative projects and brand
            transformations.
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