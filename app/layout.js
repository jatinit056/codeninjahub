import './globals.css'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'CodeNinjaHub - Programming Language Guide & Comparison',
    template: '%s | CodeNinjaHub'
  },
  description: 'Comprehensive guide to programming languages. Compare Python, Java, C++, and more. Learn features, use cases, and code examples for each language.',
  keywords: ['programming languages', 'python', 'java', 'c++', 'coding', 'software development', 'learn programming'],
  authors: [{ name: 'CodeNinjaHub' }],
  creator: 'CodeNinjaHub',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CodeNinjaHub',
    title: 'CodeNinjaHub - Programming Language Guide & Comparison',
    description: 'Comprehensive guide to programming languages. Compare Python, Java, C++, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeLang Hub - Programming Language Guide',
    description: 'Comprehensive guide to programming languages.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
