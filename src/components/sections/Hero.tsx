'use client'

import { motion } from 'framer-motion'
import SearchBar from '@/components/SearchBar'

interface HeroProps {
  onSearch: (query: string) => void
}

export default function Hero({ onSearch }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 container-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent"
        >
          21'Searcher
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-dark-300 mb-4"
        >
          The Frontier of Knowledge
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-dark-400 mb-12 text-sm md:text-base"
        >
          Powered by <span className="font-semibold text-neon-blue">Shuu</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <SearchBar onSearch={onSearch} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center gap-4 text-dark-400 text-sm"
        >
          <a href="#about" className="hover:text-neon-blue transition-colors">
            About
          </a>
          <span className="text-dark-600">•</span>
          <a href="#databases" className="hover:text-neon-blue transition-colors">
            Databases
          </a>
          <span className="text-dark-600">•</span>
          <a href="#documentation" className="hover:text-neon-blue transition-colors">
            Docs
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
