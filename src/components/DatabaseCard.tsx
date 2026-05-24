'use client'

import { motion } from 'framer-motion'

interface DatabaseCardProps {
  database: {
    id: number
    name: string
    description: string
    records: string
    icon: string
  }
  index: number
}

export default function DatabaseCard({ database, index }: DatabaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="glass-effect p-6 rounded-lg border border-dark-700/50 hover:border-neon-blue/50 transition-all duration-300"
    >
      <div className="text-4xl mb-4">{database.icon}</div>
      <h3 className="text-lg font-semibold text-dark-100 mb-2">{database.name}</h3>
      <p className="text-sm text-dark-400 mb-4 line-clamp-3">{database.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-dark-700">
        <span className="text-xs text-dark-500">Records</span>
        <span className="font-bold text-neon-blue">{database.records}</span>
      </div>
    </motion.div>
  )
}
