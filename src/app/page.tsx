'use client'

import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import SearchSection from '@/components/sections/SearchSection'
import DatabasesSection from '@/components/sections/DatabasesSection'
import AboutSection from '@/components/sections/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    setIsSearching(true)
    
    // Simulate search delay
    setTimeout(() => {
      const mockResults = [
        {
          id: 1,
          title: 'Understanding Modern Search Algorithms',
          snippet: 'Explore the cutting-edge algorithms powering next-generation search engines...',
          source: 'Research Database',
          date: '2024-05-20',
          category: 'Technology',
        },
        {
          id: 2,
          title: 'Data Architecture Best Practices',
          snippet: 'Learn how to structure massive datasets for optimal performance and scalability...',
          source: 'Technical Documentation',
          date: '2024-05-15',
          category: 'Engineering',
        },
        {
          id: 3,
          title: 'The Future of Knowledge Management',
          snippet: 'Insights into how organizations are leveraging AI for intelligent data retrieval...',
          source: 'Industry Reports',
          date: '2024-05-10',
          category: 'Analysis',
        },
      ]
      setSearchResults(mockResults)
      setIsSearching(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-dark-950">
      <Hero onSearch={handleSearch} />
      <SearchSection 
        results={searchResults} 
        isSearching={isSearching}
        query={searchQuery}
      />
      <DatabasesSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
