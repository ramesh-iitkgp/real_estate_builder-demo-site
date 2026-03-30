import { motion } from 'framer-motion';
import { Building2, Home, Wrench, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Home size={40} strokeWidth={1.5} />,
    title: 'Residential Construction',
    description: 'Custom-built homes tailored to your lifestyle, blending modern aesthetics with timeless comfort.',
  },
  {
    icon: <Building2 size={40} strokeWidth={1.5} />,
    title: 'Commercial Projects',
    description: 'State-of-the-art commercial spaces designed for productivity, innovation, and growth.',
  },
  {
    icon: <PenTool size={40} strokeWidth={1.5} />,
    title: 'Architectural Design',
    description: 'Visionary architectural planning that maximizes space, light, and environmental harmony.',
  },
  {
    icon: <Wrench size={40} strokeWidth={1.5} />,
    title: 'Renovation & Remodeling',
    description: 'Transforming existing structures into modern masterpieces with meticulous attention to detail.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary text-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif leading-tight"
          >
            Comprehensive Solutions <br />
            <span className="italic font-light text-gray-400">For Every Vision</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-gray-800 hover:border-accent transition-colors group"
            >
              <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
