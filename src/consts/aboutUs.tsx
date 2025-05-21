import { JSX } from "react";

type CoreValue = {
  title: string;
  description: string;
  icon: JSX.Element;
};

type TeamMember = {
  title: string;
  description: string;
};
type Services = {
  title: string;
  description: string;
  icon: JSX.Element;
};
const services: Services[] =[
  {
    title: "Responsive Website Development",
    description:
      "Mobile-first websites that adapt perfectly to any screen size, ensuring optimal user experience across all devices.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Custom online stores with secure payment processing, inventory management, and optimized shopping experiences.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    ),
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailored software solutions that address unique business challenges and streamline operations.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "Speed enhancements and technical improvements for existing websites to maximize user engagement and conversions.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "UX/UI Design",
    description:
      "User-centered design that balances aesthetics with functionality to create intuitive, engaging digital experiences.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    ),
  },
  {
    title: "API Development & Integration",
    description:
      "Seamless connections between systems and services, enabling powerful functionality and data exchange.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
];

const teamMembers: TeamMember[] = [
  {
    title: "UX/UI Designers",
    description:
      "Our design specialists craft intuitive, engaging user experiences and stunning visual interfaces that captivate audiences.",
  },
  {
    title: "Front-End Developers",
    description:
      "Masters of bringing designs to life, creating responsive, interactive interfaces using cutting-edge frameworks.",
  },
  {
    title: "Back-End Developers",
    description:
      "The architects behind the scenes, building robust, scalable infrastructures that power complex functionalities.",
  },
  {
    title: "Full-Stack Developers",
    description:
      "Our versatile experts bridge design and functionality, working across multiple layers to ensure cohesive integration.",
  },
  {
    title: "Web Application Specialists",
    description:
      "Focused on creating sophisticated web applications that provide desktop-like experiences in browser environments.",
  },
  {
    title: "Project Managers",
    description:
      "Orchestrating every aspect of development, ensuring timely delivery and clear communication throughout.",
  },
];

const coreValues: CoreValue[] = [
  {
    title: "Full-Stack Excellence",
    description: "We approach every project with comprehensive expertise across the entire development spectrum, building complete solutions that function flawlessly.",
    icon: (
      <svg className="w-8 h-8 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Design to Reality",
    description: "We bridge the gap between visionary designs and practical implementation, transforming creative concepts into fully-functioning digital experiences.",
    icon: (
      <svg className="w-8 h-8 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: "Innovation-Driven",
    description: "We constantly push the boundaries of what's possible in web development, embracing new technologies to keep our clients at the forefront.",
    icon: (
      <svg className="w-8 h-8 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Results-Focused",
    description: "Every line of code we write serves a purpose. We measure our success by the tangible outcomes we deliver for our clients.",
    icon: (
      <svg className="w-8 h-8 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];





export {coreValues,teamMembers,services}