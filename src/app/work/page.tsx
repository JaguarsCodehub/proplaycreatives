import { BrandSlideshow } from '@/components/brand-slideshow';
import { Footer } from '@/components/footer-section';
import { Users, Handshake, Share2, FileText, TrendingUp, Video } from 'lucide-react';

const services = [
  {
    title: 'Influencer Marketing',
    description: 'We connect your brand with the right influencers to create powerful, audience-driven campaigns.',
    icon: Users,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Brand Collaborations',
    description: 'We help brands collaborate with content creators to boost engagement and reach.',
    icon: Handshake,
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Social Media Campaigns',
    description: 'Strategic campaigns designed to increase visibility and drive traffic across platforms like Instagram, YouTube, and more.',
    icon: Share2,
    color: 'from-rose-500 to-orange-400',
  },
  {
    title: 'Content Strategy & Planning',
    description: 'We guide your brand in creating engaging and impactful content tailored to your target audience.',
    icon: FileText,
    color: 'from-amber-500 to-yellow-400',
  },
  {
    title: 'Audience Growth',
    description: 'Through smart influencer partnerships, we help grow your audience and enhance your brand’s online presence.',
    icon: TrendingUp,
    color: 'from-emerald-500 to-green-400',
  },
  {
    title: 'Video Promotions',
    description: 'We promote your product or service through high-performing influencer videos and stories.',
    icon: Video,
    color: 'from-indigo-500 to-blue-400',
  },
];

export default function WorkPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-poppins py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold font-poppins text-gray-900 mb-4'>Coming Soon</h1>
          <p className='text-lg font-poppins text-gray-600 max-w-3xl mx-auto'>
            Explore our portfolio of creative projects and brand transformations.
          </p>
        </div>

        {/* Services Section */}
        <div className='mb-24'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10'>Our Services</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {services.map((service) => (
              <div
                key={service.title}
                className='bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300'
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} mb-4 shadow-lg`}>
                  <service.icon className='w-7 h-7 text-white' />
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>{service.title}</h3>
                <p className='text-gray-600 text-sm'>{service.description}</p>
              </div>
            ))}
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