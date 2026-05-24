'use client'

import { motion } from 'framer-motion'
import ResultCard from '@/components/ResultCard'

interface SearchResult {
  id: number
  title: string
  snippet: string
  source: string
  date: string
  category: string
}

interface SearchSectionProps {
  results: SearchResult[]
  isSearching: boolean
  query: string
}

export default function SearchSection({ results, isSearching, query }: SearchSectionProps) {
  if (!query) return null

  return (
    <section className="py-20 container-xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-dark-100">
          Results for <span className="text-neon-blue">'{query}'</span>
        </h2>

        {isSearching ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {results.map((result, index) => (
              <ResultCard key={result.id} result={result} index={index} />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}
