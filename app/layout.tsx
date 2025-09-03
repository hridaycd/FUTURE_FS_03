import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Amazon Shopping - Modern Redesign',
  description: 'Experience the future of online shopping with our modern Amazon redesign. Discover AI-powered recommendations, seamless checkout, and personalized shopping experience.',
  keywords: 'Amazon, shopping, e-commerce, modern design, AI-powered, online shopping',
  authors: [{ name: 'Amazon Shopping Redesign Team' }],
  openGraph: {
    title: 'Amazon Shopping - Modern Redesign',
    description: 'Experience the future of online shopping with our modern Amazon redesign.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Shopping - Modern Redesign',
    description: 'Experience the future of online shopping with our modern Amazon redesign.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
