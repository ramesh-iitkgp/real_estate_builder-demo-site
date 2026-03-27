import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
            Building More Than Just Houses. <br />
            <span className="italic font-light text-gray-600">We Build Homes.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            For over two decades, The Nest Builders has been synonymous with quality, innovation, and trust. We don't just construct buildings; we craft environments that elevate lifestyles and foster communities.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Our commitment to sustainable practices, cutting-edge design, and uncompromising quality ensures that every project we undertake stands the test of time, becoming a cherished legacy for generations to come.
          </p>
          
          <div className="flex items-center gap-8">
            <div>
              <h4 className="text-4xl font-serif text-primary mb-2">25+</h4>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</span>
            </div>
            <div className="w-[1px] h-12 bg-gray-300" />
            <div>
              <h4 className="text-4xl font-serif text-primary mb-2">150+</h4>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Projects Done</span>
            </div>
            <div className="w-[1px] h-12 bg-gray-300" />
            <div>
              <h4 className="text-4xl font-serif text-primary mb-2">10k+</h4>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Happy Clients</span>
            </div>
          </div>
        </motion.div>

        {/* Right Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative grid grid-cols-2 gap-6"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Modern interior design"
            className="w-full h-[400px] object-cover rounded-sm mt-12 shadow-xl"
            referrerPolicy="no-referrer"
          />
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Luxury home exterior"
            className="w-full h-[400px] object-cover rounded-sm shadow-xl"
            referrerPolicy="no-referrer"
          />
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
