'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 container-xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="text-4xl font-bold mb-8 text-dark-100">
          About <span className="text-neon-blue">21'Searcher</span>
        </h2>

        <div className="space-y-6 text-dark-300">
          <p>
            21'Searcher represents a revolutionary approach to knowledge discovery and data retrieval. Built on cutting-edge technologies and powered by comprehensive, meticulously curated databases maintained by Shuu, our platform combines lightning-fast performance with intuitive usability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-neon-blue mb-2">Lightning Fast</h3>
              <p className="text-sm text-dark-400">Sub-millisecond search across millions of records with advanced indexing.</p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-neon-blue mb-2">Precision Data</h3>
              <p className="text-sm text-dark-400">Meticulously maintained databases with verified, high-quality information.</p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-neon-blue mb-2">Intelligent Results</h3>
              <p className="text-sm text-dark-400">Advanced algorithms that understand context and deliver relevant findings.</p>
            </div>
          </div>

          <p>
            Our mission is to democratize access to knowledge, enabling individuals and organizations to make informed decisions based on comprehensive, reliable data. Every database in our ecosystem is carefully selected and maintained to ensure accuracy and relevance.
          </p>

          <p className="text-dark-400 italic">
            "Knowledge is power, and we believe everyone deserves access to the best tools for discovery." — Shuu
          </p>
        </div>
      </motion.div>
    </section>
  )
}
