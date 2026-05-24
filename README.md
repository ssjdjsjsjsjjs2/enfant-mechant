# 21'Searcher - Advanced Search Engine

**The Frontier of Knowledge, Powered by Shuu**

A sophisticated, highly performant web application for an advanced search engine, inspired by minimalist, data-driven design principles.

## 🚀 Features

- **Lightning-fast Search**: Sub-millisecond search across millions of records
- **Comprehensive Databases**: Access curated data sources maintained by Shuu
- **Modern Stack**: Built with Next.js, React, TypeScript, and Tailwind CSS
- **Elegant UI**: Minimalist design with smooth animations via Framer Motion
- **Performance Optimized**: Lighthouse scores >90, optimized for speed
- **Accessible**: WCAG 2.1 AA compliant
- **Responsive Design**: Mobile-first, works seamlessly on all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ssjdjsjsjsjjs2/enfant-mechant.git
cd enfant-mechant

# Install dependencies
npm install

# Setup environment variables
cp .env.local.example .env.local
# Update .env.local with your Supabase credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🔧 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_NAME=21'Searcher
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   ├── SearchBar.tsx       # Search input component
│   ├── ResultCard.tsx      # Result card component
│   ├── DatabaseCard.tsx    # Database card component
│   └── Footer.tsx          # Footer component
```

## 🎨 Design System

- **Color Palette**: Dark mode with neon accents (blue/violet)
- **Typography**: Geist Sans (UI), JetBrains Mono (code)
- **Animations**: Smooth micro-interactions via Framer Motion
- **Layout**: Component-based atomic design principles

## 📈 Performance

Optimized for maximum performance:
- Server-side rendering (SSR) and static generation (SSG)
- Image optimization with modern formats (WebP, AVIF)
- Lazy loading of components
- Minified and optimized bundle

## 🔐 Security

- TypeScript for type safety
- HTTPS headers for security
- Supabase authentication
- Environment variable protection

## 📝 License

MIT License - See LICENSE file for details

## 🙏 Attribution

Data and databases powered by **Shuu**.

---

**21'Searcher** - Where knowledge meets innovation.
