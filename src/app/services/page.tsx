import { BrandSlideshow } from '@/components/brand-slideshow';
import { Footer } from '@/components/footer-section';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 font-poppins relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft geometric shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/40 to-pink-200/20 rounded-full blur-2xl -translate-y-24 translate-x-24"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-200/40 to-blue-200/20 rounded-full blur-2xl translate-y-24 -translate-x-24"></div>
        {/* Subtle dots */}
        <div className="absolute inset-0">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-100 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-medium text-gray-900 tracking-wider mb-8 font-poppins drop-shadow-sm">
            What We Do
          </h1>
          {/* Elegant divider */}
          <div className="flex items-center justify-center space-x-2 mb-16">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-400 to-pink-400 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white text-lg font-bold">★</span>
            </div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>

        {/* FOR CREATORS Section */}
        <div className="mb-20">
          <div className="flex items-center mb-12">
            <div className="w-1 h-10 bg-blue-400 rounded mr-6"></div>
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider font-poppins">
              For Creators
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Talent Management */}
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Talent Management</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Get managed by the best esports consultancy brand in India
              </p>
            </div>
            {/* Influencer Marketing */}
            <div className="bg-white rounded-2xl p-8 border border-pink-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Influencer Marketing</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                We help you grow and build your personal brand as an influencer
              </p>
            </div>
            {/* Brand Connect */}
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Brand Connect</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Get sponsored by your favourite brands for the promotions
              </p>
            </div>
          </div>
        </div>

        {/* FOR BRANDS Section */}
        <div>
          <div className="flex items-center mb-12">
            <div className="w-1 h-10 bg-pink-400 rounded mr-6"></div>
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider font-poppins">
              For Brands
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Strategy Consultations */}
            <div className="bg-white rounded-2xl p-8 border border-pink-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Strategy Consultations</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Discuss, Design and Deliver great campaigns executed to perfection
              </p>
            </div>
            {/* Content Production */}
            <div className="bg-white rounded-2xl p-8 border border-pink-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Content Production</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Collaborate with gamers to create engaging content
              </p>
            </div>
            {/* Bespoke Projects */}
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Bespoke Projects</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                White label brand activation with brand's preference
              </p>
            </div>
          </div>
        </div>
      </div>

      <BrandSlideshow />
      <Footer />
    </div>
  );
} 