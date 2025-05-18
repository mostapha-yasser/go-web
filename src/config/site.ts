export const SITE_CONFIG = {
  name: "Go-Web",
  nameAr: "جو-ويب",
  description: "Step by step web solutions from concept to global presence",
  descriptionAr: "حلول ويب متكاملة من الفكرة إلى العالمية",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.go-web.com",
  ogImage: "/og-image.jpg",
  twitterImage: "/twitter-image.jpg",
  keywords: {
    en: ["web design", "web development", "e-commerce", "website company"],
    ar: ["تصميم مواقع", "تطوير ويب", "متاجر إلكترونية", "شركة تصميم مواقع"]
  },
  social: {
    twitter: "@go_web"
  }
};
