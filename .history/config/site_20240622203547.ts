import { SiteConfig } from '@/types/siteConfig'

export const siteName = 'Flomo 白板'

const baseSiteConfig = {
  name: `${siteName}`,
  description: `${siteName} - 在白板上整理、思考、展示你的 Flomo 笔记`,
  url: 'https://flomoboard.com/',
  ogImage: 'https://flomoboard.com/og.png',
  metadataBase: new URL('https://flomoboard.com/'),
  keywords: [siteName, 'flomo', '白板'],
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
    github: 'https://github.com/wujieli0207/flomo-board',
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
