import '@/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: 'BookAChef - Hire Top-Rated Private Chefs for Any Occasion',
  description: 'Book a professional chef for your private dinners, events, and parties effortlessly. Find the perfect chef for your next meal or event.',
  keywords: ['private chef', 'hire chef', 'personal chef', 'gourmet dining', 'chef booking', 'dinner party', 'culinary experience', 'event catering'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 