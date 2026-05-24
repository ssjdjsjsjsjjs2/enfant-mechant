'use client'

import { motion } from 'framer-motion'

interface ResultCardProps {
  result: {
    id: number
    title: string
    snippet: string
    source: string
    date: string
    category: string
  }
  index: number
}

export default function ResultCard({ result, index }: ResultCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-effect p-6 rounded-lg hover:shadow-dark-elevation transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-dark-100 group-hover:text-neon-blue transition-colors">
            {result.title}
          </h3>
          <p className="text-sm text-dark-400 mt-1">{result.source}</p>
        </div>
        <span className="text-xs font-medium bg-dark-700 text-neon-blue px-3 py-1 rounded-full whitespace-nowrap ml-4">
          {result.category}
        </span>
      </div>

      <p className="text-dark-300 mb-4 line-clamp-2">{result.snippet}</p>

      <div className="flex items-center justify-between">
        <time className="text-xs text-dark-500">{result.date}</time>
        <button className="text-neon-blue hover:text-neon-blue/80 transition-colors text-sm font-medium">
          View Details →
        </button>
      </div>
    </motion.article>
  )
}
