import { BookOpen, Flower, Phone, TreePine, Users } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Flower,
      title: "Traditional Funeral Services",
      description: "Complete traditional funeral services including visitation, ceremony, and burial with personalized touches.",
      features: ["Viewing & Visitation", "Funeral Ceremony", "Graveside Service", "Floral Arrangements"],
      price: "Starting at $4,500"
    },
    {
      icon: TreePine,
      title: "Cremation Services",
      description: "Dignified cremation services with various memorial options to honor your loved one's memory.",
      features: ["Direct Cremation", "Memorial Service", "Urn Selection", "Scattering Services"],
      price: "Starting at $2,200"
    },
    {
      icon: Users,
      title: "Memorial Services",
      description: "Celebration of life services that focus on honoring memories and bringing families together.",
      features: ["Celebration of Life", "Memory Displays", "Catering Options", "Video Tributes"],
      price: "Starting at $1,800"
    },
    {
      icon: BookOpen,
      title: "Pre-Planning Services",
      description: "Plan ahead to ease the burden on your family and ensure your wishes are honored.",
      features: ["Pre-Need Consultation", "Payment Plans", "Document Storage", "Family Meetings"],
      price: "Free Consultation"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of funeral and memorial services, 
            each designed to honor your loved one with dignity and respect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-100 pt-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900 mb-3">
                    {service.price}
                  </div>
                  <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              24/7 Emergency Services
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Death doesn't follow a schedule, and neither do we. Our caring staff is available 
              24 hours a day, 7 days a week to assist your family when you need us most.
            </p>
            <a 
              href="tel:+1-555-123-4567" 
              className="inline-flex items-center space-x-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              <span>Call Now: (555) 123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
