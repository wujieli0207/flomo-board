import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/config/site'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from './GoogleAnalytics'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  themeColor: siteConfig.themeColor,
  icons: siteConfig.icons,
  metadataBase: siteConfig.metadataBase,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>

      {process.env.NODE_ENV === 'development' ? (
        <></>
      ) : (
        <>
          <Analytics />
          <GoogleAnalytics />
        </>
      )}
    </html>
  )
}
