import baderLab from "../../public/projects/baderLab.png";
import unico from "../../public/projects/unico.png";
import Hestia from "../../public/projects/hestia.png";

export const projects = [
  {
    slug: "unico",
    title: "Unico",
    target: "https://unicop.vercel.app/",
    image: unico,
    shortDescription: "Website and dashboard design for an Oil & Gas services company.",
    details: {
      client: "Unico Petroleum",
      duration: "3 months",
      pagesCount: 6,
      completionDate: "1/1/2025",
      keyFeatures: ["SEO optimized", "Responsive design", "Modern UI/UX"],
      technologies: ["React", "Next.js", "Tailwind CSS", "mongoDB"],
      video: "/projects/video/Unico-petroleum.mp4",
      fullDescription:
        "Designed and developed a complete website for Unico Petroleum, a specialized company in the Oil and Gas industry. Created a custom dashboard that helps the company efficiently manage their services and projects. The website showcases the company's premium services and their history spanning over two decades in the industry."
    }
  },

  {
    slug: "hestia",
    title: "Hestia",
    target: "https://hestia-sable.vercel.app/",
    image: Hestia,
    shortDescription: "E-commerce website with management system for a natural products company.",
    details: {
      client: "Hestia Candles",
      duration: "2 months",
      pagesCount: 6,
      completionDate: "1/1/2025",
      technologies: ["React", "Node.js", "MongoDB"],
      video: "/projects/video/Dr.Badr-lab.mp4",
      fullDescription:
        "Developed a complete e-commerce website for Hestia, a company specializing in eco-friendly natural candles. Designed a distinctive user interface reflecting the brand identity along with an integrated dashboard for managing products, orders, sales, and inventory tracking."
    }
  },

  {
    slug: "badr-lab",
    title: "badr-lab",
    target: "https://the-badr-lab-iutb.vercel.app/",
    image: baderLab,
    shortDescription: "Academic website and specialized management system for research.",
    details: {
      client: "Badr Research Laboratory",
      duration: "1.5 months",
      pagesCount: 6,
      completionDate: "1/1/2025",
      technologies: ["React", "Next.js", "Firebase", "Tailwind CSS"],
      video: "/projects/video/Dr.Badr-lab.mp4",
      fullDescription:
        "Designed and developed an academic website for a research laboratory specializing in human microbiome studies. Also created a specialized dashboard that facilitates sharing research findings, tracking experiments, and enabling collaboration between researchers."
    }
  },

  {
    slug: "fatma-portfolio",
    title: "Fatma-portfolio",
    target: "https://fatma-mohamed99.github.io/Portfolio/",
    image: baderLab,
    shortDescription: "Professional portfolio website with content management system.",
    details: {
      client: "Fatma Mohamed",
      duration: "1 month",
      pagesCount: 6,
      completionDate: "1/1/2025",
      technologies: ["HTML", "CSS", "JavaScript"],
      video: "https://www.youtube.com/embed/sample-video-fatma",
      fullDescription:
        "Designed and developed a professional portfolio website for Fatma Mohamed with a modern interactive interface that showcases her skills and projects distinctively. Added a dashboard that enables her to easily update her information and projects."
    }
  },

  {
    slug: "mostapha-portfolio",
    title: "Mostapha-portfolio",
    target: "https://mostapha-yasser.github.io/mostapha-Portfolio/",
    image: baderLab,
    shortDescription: "Modern portfolio website with custom content management features.",
    details: {
      client: "Mostapha Yasser",
      duration: "1 month",
      pagesCount: 6,
      completionDate: "1/1/2025",
      technologies: ["HTML", "CSS", "JavaScript"],
      video: "https://www.youtube.com/embed/sample-video-mostapha",
      fullDescription:
        "Created a comprehensive portfolio website for Mostapha Yasser featuring an intuitive design and responsive layout. Implemented a custom dashboard allowing for easy content updates and project management while maintaining a professional appearance."
    }
  }
];
