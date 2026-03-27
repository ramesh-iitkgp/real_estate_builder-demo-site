import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The attention to detail and commitment to quality is unparalleled. They didn't just build a house; they created our dream home.",
    author: "Sarah Jenkins",
    role: "Homeowner, Oakwood Estates",
  },
  {
    id: 2,
    quote: "Professional, transparent, and incredibly skilled. The commercial space they delivered exceeded all our expectations.",
    author: "Michael Chen",
    role: "CEO, TechFlow Solutions",
  },
  {
    id: 3,
    quote: "From the initial design phase to the final handover, the entire process was seamless. A truly exceptional team.",
    author: "Elena Rodriguez",
    role: "Resident, The Azure",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block"
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-primary leading-tight"
          >
            Words of <span className="italic font-light text-gray-600">Appreciation</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-10 shadow-sm relative"
            >
              <Quote className="text-accent/20 w-12 h-12 absolute top-6 right-6" />
              <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-serif text-primary text-lg">{testimonial.author}</h4>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
