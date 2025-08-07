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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-poppins py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-16">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
            <div className="w-72 h-72 bg-gradient-to-br from-blue-200/40 via-purple-100/40 to-pink-100/40 rounded-full blur-3xl opacity-60" />
          </div>
          <h1 className="text-5xl md:text-6xl font-medium text-gray-900 mb-6 relative z-10 tracking-tight">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">ProPlay Creatives</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium relative z-10">
            At <span className="font-semibold text-blue-700">ProPlay Creatives</span>, we specialize in connecting brands with the right influencers to boost visibility, engagement, and growth. We help brands achieve successful collaborations, increase their view rates, and reach the right audience through strategic influencer marketing. Whether you're looking to grow your brand or launch a campaign, we’re here to turn your vision into results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-4 shadow-lg">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Collaborations</h3>
            <p className="text-gray-600">We match brands with influencers who align with their vision, ensuring authentic and impactful partnerships.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-400 mb-4 shadow-lg">
              <span className="text-3xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Boosted Engagement</h3>
            <p className="text-gray-600">Our campaigns are designed to maximize view rates and audience interaction, driving measurable results for your brand.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-400 mb-4 shadow-lg">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Audience Growth</h3>
            <p className="text-gray-600">We help you reach the right audience, expand your brand presence, and achieve sustainable growth through influencer marketing.</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} mb-4 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
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