import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import Providers from "@/components/Providers"
import ScrollToTop from "@/components/ui/ScrollToTop"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.streamlineexteriors.ca"),
  title: {
    default: "Streamline Exteriors | Premium Exterior Systems — BC & Alberta",
    template: "%s | Streamline Exteriors",
  },
  description:
    "Premium residential and commercial exterior solutions across BC and Alberta since 1994. Siding, gutters, windows, and renovation. Serving Kelowna, Vernon, Salmon Arm, Revelstoke, and Calgary.",
  keywords: [
    "exterior contractor BC",
    "siding contractor BC",
    "seamless gutters BC",
    "exterior renovation Kelowna",
    "commercial exterior BC",
    "James Hardie installer BC",
    "LP SmartSide BC",
    "GutterGlove leaf guards",
    "exterior contractor Alberta",
    "Streamline Exteriors",
  ],
  authors: [{ name: "Streamline Exteriors Ltd." }],
  creator: "Streamline Exteriors Ltd.",
  publisher: "Streamline Exteriors Ltd.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.streamlineexteriors.ca",
    siteName: "Streamline Exteriors",
    title: "Streamline Exteriors | Premium Exterior Systems — BC & Alberta",
    description:
      "Premium exterior systems for residential and commercial projects across BC and Alberta. Family owned since 1994.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Streamline Exteriors — Premium Exterior Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamline Exteriors | Premium Exterior Systems — BC & Alberta",
    description:
      "Premium exterior systems for residential and commercial projects across BC and Alberta. Family owned since 1994.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.streamlineexteriors.ca",
  },
  other: {
    "format-detection": "telephone=no",
  },
}

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Streamline Exteriors Ltd.",
  url: "https://www.streamlineexteriors.ca",
  logo: "https://www.streamlineexteriors.ca/logo.png",
  image: "https://www.streamlineexteriors.ca/og-image.jpg",
  description:
    "Premium exterior contractor serving BC and Alberta since 1994. Residential and commercial siding, seamless gutters, windows, doors, and full renovation services.",
  foundingDate: "1994",
  telephone: "+12508320610",
  email: "sales@streamlineexteriors.ca",
  areaServed: [
    { "@type": "City", name: "Kelowna" },
    { "@type": "City", name: "Vernon" },
    { "@type": "City", name: "Salmon Arm" },
    { "@type": "City", name: "Revelstoke" },
    { "@type": "City", name: "Calgary" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salmon Arm",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+12508320610",
    contactType: "customer service",
    areaServed: ["BC", "AB"],
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/streamlineexteriorscanada/",
    "https://www.instagram.com/streamline.exteriors/",
    "https://www.linkedin.com/company/streamline-exteriors/",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased bg-black",
        inter.variable,
        bebasNeue.variable,
        "font-sans",
      )}
    >
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YCTB41VKD8" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YCTB41VKD8');`}
        </Script>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
