import { SiteConfig } from '@/types/siteConfig'

export const siteName = 'Flomo 白板'

const baseSiteConfig = {
  name: `${siteName}`,
  description: `${siteName} - Elevate your branding, marketing, and personal projects with unique AI-enhanced hand drawn art`,
  url: 'flomoboard.com/',
  ogImage: 'flomoboard.com/og.png',
  metadataBase: new URL('flomoboard.com/'),
  keywords: [siteName, 'hand drawn', 'hand-drawn'],
  authors: [
    {
      name: 'wujieli',
      url: 'https://www.wujieli.com',
    },
  ],
  creator: '@wujieli',
  themeColor: '#fff',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  links: {
    twitter: 'https://x.com/li_wujie',
    github: 'https://github.com/wujieli0207/hand-drawn-ai',
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}og.png`],
  },
  twitter: {
    card: 'summary_large_image',
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}og.png`],
    creator: baseSiteConfig.creator,
  },
}
