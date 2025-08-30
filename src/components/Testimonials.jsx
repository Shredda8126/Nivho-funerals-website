import { Quote, Star } from "lucide-react";


function Testimonials() {
  const testimonials = [
    {
      name: "Maria Gonzalez",
      location: "Springfield",
      text: "The Thompson family and their staff made an incredibly difficult time more bearable. Their compassion and attention to detail was exactly what our family needed. We felt supported every step of the way.",
      rating: 5,
      service: "Traditional Funeral Service"
    },
    {
      name: "David & Carol Johnson",
      location: "Riverside",
      text: "From the initial consultation to the final service, everything was handled with such care and professionalism. They helped us create a beautiful memorial that truly honored our father's life.",
      rating: 5,
      service: "Memorial Service"
    },
    {
      name: "Jennifer Parks",
      location: "Oak Valley",
      text: "The pre-planning process was thorough and thoughtful. Having everything arranged in advance gave our family peace of mind during a very emotional time. Highly recommend their services.",
      rating: 5,
      service: "Pre-Planning Services"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Families Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The trust families place in us during their most difficult times 
            is both humbling and inspiring. Here's what they have to say.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Quote size={32} className="text-orange-600 mr-4" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-100 pt-6">
                <div className="font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  {testimonial.location}
                </div>
                <div className="text-sm text-blue-900 font-semibold">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Over 5,000 Families
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For over seven decades, we have had the privilege of serving families 
              throughout our community. Your trust and satisfaction remain our highest priorities.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm font-semibold">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">5,000+</div>
                <div className="text-gray-600">Families Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">70+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;