import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// Comprehensive SEO Metadata for NYC Apartment Renovation Contractors
export const metadata: Metadata = {
  title: {
    default: 'NYC Apartment Renovation Contractors | Arber Construction',
    template: '%s | Arber Construction - NYC Apartment Renovation'
  },
  description: 'NYC\'s trusted apartment renovation contractors. 500+ completed renovations in Manhattan, Brooklyn, Queens, Bronx. Licensed, insured, EPA certified. Call 646-206-5590.',
  keywords: [
    'NYC apartment renovation contractors',
    'apartment renovation NYC',
    'NYC apartment remodeling',
    'apartment renovation contractors',
    'NYC renovation contractors',
    'Manhattan apartment renovation',
    'Brooklyn apartment renovation',
    'Queens apartment renovation',
    'NYC kitchen remodeling',
    'NYC bathroom renovation',
    'NYC apartment contractors',
    'NYC general contractors',
    'Manhattan renovation contractors',
    'Brooklyn renovation contractors',
    'Queens renovation contractors',
    'NYC home remodeling',
    'apartment renovation Manhattan',
    'apartment renovation Brooklyn',
    'apartment renovation Queens',
    'NYC renovation company',
    'licensed NYC contractors',
    'insured NYC contractors',
    'EPA Lead-Safe contractors NYC',
    'co-op renovation NYC',
    'condo renovation NYC',
    'NYC apartment renovation cost',
    'NYC apartment renovation permits'
  ],
  authors: [{ name: 'Arber Construction Group', url: 'https://arberconstruction.com' }],
  creator: 'Arber Construction Group',
  publisher: 'Arber Construction Group',
  metadataBase: new URL('https://arberconstruction.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arberconstruction.com',
    title: 'NYC Apartment Renovation Contractors | Arber Construction',
    description: 'Transform your NYC apartment with trusted renovation contractors. 500+ completed projects across all boroughs. Licensed, insured & EPA certified. Free estimates.',
    siteName: 'Arber Construction Group',
    images: [
      {
        url: '/images/homepage/hero-apartment-renovation.webp',
        width: 1200,
        height: 630,
        alt: 'NYC apartment renovation showcase by Arber Construction contractors',
        type: 'image/webp',
      },
      {
        url: '/images/homepage/luxury-manhattan-apartment-renovation-interior.webp',
        width: 800,
        height: 600,
        alt: 'Luxury Manhattan apartment renovation interior by NYC contractors',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ArberConstruction',
    creator: '@ArberConstruction',
    title: 'NYC Apartment Renovation Contractors | Arber Construction',
    description: 'NYC\'s trusted apartment renovation contractors. 500+ completed renovations. Licensed, insured, EPA certified. Call 646-206-5590.',
    images: ['/images/homepage/hero-apartment-renovation.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-placeholder',
    yandex: 'verification-code-placeholder',
    yahoo: 'verification-code-placeholder',
  },
  other: {
    'application-name': 'Arber Construction Group',
    'msapplication-TileColor': '#233063',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#233063',
    'category': 'Home Improvement & Construction',
    'classification': 'Construction & Renovation Services',
    'subject': 'NYC Apartment Renovation and Remodeling Services',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured Data Schemas
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://arberconstruction.com/#organization",
    "name": "Arber Construction Group",
    "alternateName": "Arber Construction",
    "url": "https://arberconstruction.com",
    "logo": "https://arberconstruction.com/images/logo.webp",
    "description": "NYC's premier apartment renovation contractors specializing in residential renovations across Manhattan, Brooklyn, Queens, Bronx, and Staten Island. Licensed, insured, and EPA Lead-Safe certified.",
    "foundingDate": "2015",
    "founder": {
      "@type": "Person",
      "name": "Arber Construction Group"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Service Area",
      "addressLocality": "New York",
      "addressRegion": "NY", 
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "telephone": "+1-646-206-5590",
    "email": "info@arberconstruction.com",
    "priceRange": "$$-$$$",
    "paymentAccepted": "Cash, Check, Credit Card, Financing Available",
    "currenciesAccepted": "USD",
    "openingHours": [
      "Mo-Fr 07:00-18:00",
      "Sa 08:00-16:00",
      "Su Emergency Service Only"
    ],
    "serviceArea": [
      {
        "@type": "City",
        "name": "New York",
        "containedInPlace": {
          "@type": "State",
          "name": "New York"
        }
      },
      {
        "@type": "Place", 
        "name": "Manhattan, NY"
      },
      {
        "@type": "Place",
        "name": "Brooklyn, NY"
      },
      {
        "@type": "Place",
        "name": "Queens, NY"
      },
      {
        "@type": "Place",
        "name": "Bronx, NY"
      },
      {
        "@type": "Place",
        "name": "Staten Island, NY"
      },
      {
        "@type": "Place",
        "name": "Long Island, NY"
      },
      {
        "@type": "Place",
        "name": "Westchester County, NY"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "License",
        "name": "NYC General Contractor License"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "Certification",
        "name": "EPA Lead-Safe Certified"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Insurance",
        "name": "Fully Insured & Bonded"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating", 
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Arber Construction transformed our Manhattan apartment beautifully. Professional, on-time, and within budget. Highly recommend their apartment renovation services.",
        "datePublished": "2024-01-15"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ArberConstruction",
      "https://www.instagram.com/arberconstruction",
      "https://www.linkedin.com/company/arber-construction",
      "https://twitter.com/ArberConstruction"
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://arberconstruction.com/#services",
    "name": "NYC Apartment Renovation Services",
    "serviceType": "Apartment Renovation and Remodeling",
    "description": "Complete apartment renovation services including kitchen remodeling, bathroom renovation, basement finishing, and full apartment transformations throughout NYC.",
    "provider": {
      "@id": "https://arberconstruction.com/#organization"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "New York City"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Apartment Renovation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Renovation NYC",
            "description": "Complete kitchen remodeling and renovation services for NYC apartments"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Renovation NYC",
            "description": "Full bathroom renovation and remodeling services for NYC apartments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basement Renovation NYC",
            "description": "Basement finishing and renovation services for NYC apartments and homes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Complete Apartment Renovation NYC",
            "description": "Full apartment renovation and transformation services throughout NYC"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://arberconstruction.com/#website",
    "url": "https://arberconstruction.com",
    "name": "Arber Construction Group - NYC Apartment Renovation Contractors",
    "description": "NYC's trusted apartment renovation contractors with 500+ completed projects",
    "publisher": {
      "@id": "https://arberconstruction.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://arberconstruction.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://arberconstruction.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "NYC Apartment Renovation Contractors",
        "item": "https://arberconstruction.com"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does apartment renovation cost in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NYC apartment renovation costs typically range from $150-400 per square foot depending on the scope of work, finishes selected, and apartment size. We provide detailed estimates for all projects."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you handle NYC permits for apartment renovations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle all NYC Department of Buildings permits, co-op board approvals, and building management requirements for your apartment renovation project."
        }
      },
      {
        "@type": "Question",
        "name": "How long does an apartment renovation take in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most NYC apartment renovations take 4-12 weeks depending on scope. Kitchen renovations typically take 3-6 weeks, bathroom renovations 2-4 weeks, and complete apartment renovations 8-16 weeks."
        }
      }
    ]
  };

  return (
    <html lang="en-US">
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="New York City" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        <meta name="ICBM" content="40.7128, -74.0060" />
        <meta name="DC.title" content="NYC Apartment Renovation Contractors" />
        
        {/* Language and Region */}
        <meta name="language" content="English" />
        <meta name="content-language" content="en-US" />
        
        {/* Cache Control */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta httpEquiv="Expires" content="31536000" />
        
        {/* Fonts with Optimized Loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon and Touch Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/images/homepage/hero-apartment-renovation.webp" as="image" type="image/webp" />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Additional Local Business Meta */}
        <meta name="contact:phone_number" content="+1-646-206-5590" />
        <meta name="contact:email" content="info@arberconstruction.com" />
        <meta name="business:contact_data:street_address" content="Service Area: NYC Metro" />
        <meta name="business:contact_data:locality" content="New York" />
        <meta name="business:contact_data:region" content="NY" />
        <meta name="business:contact_data:postal_code" content="10001" />
        <meta name="business:contact_data:country_name" content="United States" />
        
        {/* Service Area Meta Tags */}
        <meta name="service:area" content="Manhattan, Brooklyn, Queens, Bronx, Staten Island" />
        <meta name="service:type" content="Apartment Renovation, Kitchen Remodeling, Bathroom Renovation" />
        <meta name="service:category" content="Construction, Home Improvement, General Contractor" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 