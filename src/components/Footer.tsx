'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-800 bg-dark-900/50 py-12 container-xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
      >
        <div>
          <h3 className="text-lg font-bold text-dark-100 mb-4">21'Searcher</h3>
          <p className="text-sm text-dark-400">The frontier of knowledge, powered by Shuu.</p>
        </div>
        <div>
          <h4 className="font-semibold text-dark-100 mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-dark-400">
            <li><a href="#" className="hover:text-neon-blue transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-neon-blue transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-neon-blue transition-colors">API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-dark-100 mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-dark-400">
            <li><a href="#" className="hover:text-neon-blue transition-colors">About</a></li>
            <li><a href="#" className="hover:text-neon-blue transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-neon-blue transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-dark-100 mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-dark-400">
            <li><a href="#" className="hover:text-neon-blue transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-neon-blue transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-neon-blue transition-colors">License</a></li>
          </ul>
        </div>
      </motion.div>

      <div className="border-t border-dark-800 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-dark-500">
          <p>
            © {currentYear} 21'Searcher. All rights reserved. Powered by <span className="font-semibold text-neon-blue">Shuu</span>.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon-blue transition-colors">Twitter</a>
            <a href="#" className="hover:text-neon-blue transition-colors">GitHub</a>
            <a href="#" className="hover:text-neon-blue transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
