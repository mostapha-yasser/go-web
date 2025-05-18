import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isArabic = params.lang === 'ar';
  
  return {
    title: {
      default: isArabic ? "جو-ويب | تصميم مواقع احترافية" : "Go-Web | Professional Web Design",
      template: isArabic ? "%s | جو-ويب" : "%s | Go-Web"
    },
    description: isArabic 
      ? "حلول ويب متكاملة من الفكرة إلى العالمية. نصنع مواقع مذهلة عالية الأداء."
      : "Step by step web solutions from concept to global presence. We build stunning, high-performance websites.",
    keywords: isArabic
      ? ["تصميم مواقع", "تطوير ويب", "متاجر إلكترونية", "شركة تصميم مواقع"]
      : ["web design", "web development", "e-commerce", "website company"],
    
    metadataBase: new URL('https://www.go-web.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'ar-EG': '/ar',
      },
    },
    
    openGraph: {
      title: isArabic ? "جو-ويب | تصميم مواقع احترافية" : "Go-Web | Professional Web Design",
      description: isArabic 
        ? "حول أفكارك إلى وجود قوي على الإنترنت مع خدماتنا الخبيرة في تطوير الويب"
        : "Transform your ideas into a powerful online presence with our expert web development services",
      url: 'https://www.go-web.com',
      siteName: 'Go-Web',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: isArabic ? 'ar_EG' : 'en_US',
      type: 'website',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: isArabic ? "جو-ويب | تصميم مواقع احترافية" : "Go-Web | Professional Web Design",
      description: isArabic 
        ? "حلول ويب متكاملة من الفكرة إلى العالمية"
        : "Web solutions from concept to global presence",
      images: ['/twitter-image.jpg'],
    },
    
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    
    verification: {
      google: 'your-google-verification-code',
    },
    
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
}
