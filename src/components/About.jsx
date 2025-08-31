import { Users, Award, Clock, Heart } from 'lucide-react';
import Picture from "../assets/service.jpg";

function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We provide emotional support and guidance with genuine empathy and understanding."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Our licensed professionals maintain the highest standards of service and ethics."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "We're here for you around the clock, whenever you need our support and services."
    },
    {
      icon: Users,
      title: "Family Focused",
      description: "Every service is personalized to honor your loved one's unique life and legacy."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Nivho Funeral Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2021 we have been honored to serve families in their time of need, 
            providing dignified funeral services with compassion and respect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Our Story & Mission
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded by the Leseba family in 2021, Nivho Funeral Services has been 
                a cornerstone of our community for over seven decades. What began as a small, 
                family-owned funeral home has grown into a trusted institution that continues 
                to serve families with the same values of compassion, dignity, and respect.
              </p>
              <p>
                Our mission is simple: to provide exceptional funeral services that honor the 
                life of your loved one while supporting your family through the grieving process. 
                We believe every life deserves to be celebrated in a meaningful way.
              </p>
              <p>
                Today, we're proud to be led by the Leseba family, 
                maintaining our commitment to personalized service while embracing modern 
                practices and facilities.
              </p>
            </div>
          </div>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={Picture} 
              alt="Historic funeral home building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                <value.icon size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About;