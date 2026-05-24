'use client'

import { motion } from 'framer-motion'
import DatabaseCard from '@/components/DatabaseCard'

const databases = [
  {
    id: 1,
    name: 'Research Database',
    description: 'Comprehensive collection of peer-reviewed research papers and academic articles.',
    records: '2.5M+',
    icon: '📚',
  },
  {
    id: 2,
    name: 'Technical Documentation',
    description: 'Official documentation, guides, and technical specifications across industries.',
    records: '500K+',
    icon: '⚙️',
  },
  {
    id: 3,
    name: 'Industry Reports',
    description: 'Market analysis, trend reports, and industry insights from trusted sources.',
    records: '100K+',
    icon: '📊',
  },
  {
    id: 4,
    name: 'Knowledge Base',
    description: 'Curated articles, tutorials, and how-to guides for various topics.',
    records: '1M+',
    icon: '💡',
  },
]

export default function DatabasesSection() {
  return (
    <section id="databases" className="py-20 container-xl bg-dark-900/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          Databases by <span className="text-neon-blue">Shuu</span>
        </h2>
        <p className="text-center text-dark-400 mb-16 max-w-2xl mx-auto">
          Access a vast ecosystem of curated, high-quality data sources. Our comprehensive database collection powers intelligent search and knowledge discovery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {databases.map((db, index) => (
            <DatabaseCard key={db.id} database={db} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
