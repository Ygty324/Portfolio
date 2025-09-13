import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Yiğit Aktürk - Bilgisayar Mühendisi | Yazılım Geliştirici Portfolio',
  description: 'Yiğit Aktürk - Bilgisayar Mühendisi ve Yazılım Geliştirici. React, Node.js, Python ve modern web teknolojileri ile projeler geliştiriyorum. Portfolio ve iletişim bilgileri.',
  keywords: 'Yiğit Aktürk, bilgisayar mühendisi, yazılım geliştirici, React, Node.js, Python, web geliştirme, portfolio, JavaScript, full stack, machine learning',
  authors: [{ name: 'Yiğit Aktürk' }],
  robots: 'index, follow',

  openGraph: {
    type: 'website',
    url: 'https://yigitakturkportfolio.netlify.app/',
    title: 'Yiğit Aktürk - Bilgisayar Mühendisi | Yazılım Geliştirici Portfolio',
    description: 'Bilgisayar Mühendisi ve Yazılım Geliştirici. React, Node.js, Python ve modern web teknolojileri ile projeler geliştiriyorum.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yiğit Aktürk",
    "jobTitle": "Bilgisayar Mühendisi",
    "description": "Yazılım Geliştirici ve Bilgisayar Mühendisi",
    "url": "https://yigitakturkportfolio.netlify.app/",
    "sameAs": [
      "https://www.linkedin.com/in/yi%C4%9Fit-akt%C3%BCrk-0a42502b8/",
      "https://github.com/Ygty324"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ankara",
      "addressCountry": "TR"
    },
    "email": "yigitakturk324@gmail.com",
    "knowsAbout": [
      "Machine Learning",
      "Python",
      "React.js",
      "JavaScript",
      "Web Development",
      "Data Science",
      "TensorFlow",
      "HTML",
      "CSS",
      "Git",
      "Node.js"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Machine Learning Specialization",
        "credentialCategory": "Professional Certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Stanford University"
        }
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "TensorFlow Developer Certificate",
        "credentialCategory": "Professional Certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Google"
        }
      }
    ]
  }

  return (
    <html lang="tr" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gray-800 text-gray-100 font-sans">
        {children}
      </body>
    </html>
  )
}