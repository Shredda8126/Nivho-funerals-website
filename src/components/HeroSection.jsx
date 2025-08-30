import { ArrowRight, Heart, ImagesIcon, Link, Phone } from "lucide-react";
import banner from "../assets/images.jpg";

function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-900">
                <Heart size={24} className="text-orange-600" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Compassionate Care Since 0000
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Honoring Lives,
                <span className="text-blue-900 block">
                  Comforting Families
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                For over 7 years, we have provided dignified funeral services with 
                compassion, respect, and personalized care during life's most difficult moments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                Our Services
              </a>
              <a 
                href="tel:+1-555-123-4567" 
                className="flex items-center justify-center space-x-2 border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300"
              >
                <Phone size={20} />
                <span>Call 24/7: (555) 123-4567</span>
              </a>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">
                "Your peace of mind is our concern."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={banner}
                alt="Peaceful memorial garden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">6+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
