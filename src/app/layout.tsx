import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "21'Searcher - The Frontier of Knowledge",
  description: 'Advanced search engine powered by Shuu. Lightning-fast search across comprehensive databases.',
  keywords: ['search', 'engine', 'database', 'knowledge', 'Shuu'],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: "21'Searcher",
    description: 'Advanced search engine powered by Shuu',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-950 text-dark-100`}>
        {children}
      </body>
    </html>
  )
}
