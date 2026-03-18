import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LysoGenix Bioactives | Premium Silk Cocoons & Raw Beeswax',
  description: 'Direct-to-brand supplier of 100% natural, unbleached Mulberry Silk Cocoons and raw Beeswax for indie cosmetic brands and K-Beauty startups.',
  generator: 'v0.app',
  icons: {
    icon: '/lysogenix-logo.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
