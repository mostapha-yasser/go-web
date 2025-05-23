import { Code, Globe, Wrench, Star, } from 'lucide-react';
export const FAQ_CATEGORIES = [
    {
        category: "Services",
        icon: <Globe className="w-5 h-5" />,
        questions: [
            {
                question: "What types of websites do you develop?",
                answer: "I specialize in developing various types of websites including e-commerce platforms, manufacturing company sites, hospitals and medical centers, portfolios, educational platforms, and any custom web solution you need. Each project is tailored to meet your specific business requirements."
            },
            {
                question: "Do you develop mobile applications?",
                answer: "Currently, I focus exclusively on web development. I create responsive websites that work perfectly on all devices including mobile phones, tablets, and desktops, ensuring your users have an optimal experience across all platforms."
            },
            {
                question: "What's included in your web development service?",
                answer: "My service includes complete website development, responsive design, SEO optimization, content management systems, admin dashboards, database integration, and one month of free maintenance and training after delivery."
            }
        ]
    },
    {
        category: "Technology",
        icon: <Code className="w-5 h-5" />,
        questions: [
            {
                question: "Which technologies do you use?",
                answer: "I use modern and reliable technologies including React for frontend development, Next.js for full-stack applications, MongoDB for database management, and Tailwind CSS for styling. These technologies ensure high performance, scalability, and maintainability."
            },
            {
                question: "Can you integrate with existing systems?",
                answer: "Yes, I can integrate your new website with existing systems, APIs, payment gateways, inventory management systems, and third-party services to ensure seamless operation with your current business processes."
            },
            {
                question: "Do you provide database solutions?",
                answer: "Absolutely! I design and implement robust database solutions using MongoDB, ensuring efficient data storage, retrieval, and management for your website's needs, whether it's for e-commerce, content management, or user data."
            }
        ]
    },
    {
        category: "Process & Support",
        icon: <Wrench className="w-5 h-5" />,
        questions: [
            {
                question: "What does the development process look like?",
                answer: "The process starts with understanding your requirements, followed by design mockups, development phases with regular updates, testing, and finally deployment. Throughout the process, you'll receive regular progress reports and can provide feedback."
            },
            {
                question: "Do you offer maintenance services?",
                answer: "Yes, I provide ongoing maintenance services to keep your website updated, secure, and running smoothly. This includes bug fixes, security updates, content updates, and performance optimization as needed."
            },
            {
                question: "What kind of training do you provide?",
                answer: "After delivery, I provide one month of free training and support to help you manage your website effectively. This includes tutorials on using the admin dashboard, updating content, managing products (for e-commerce), and basic troubleshooting."
            }
        ]
    },
    {
        category: "Pricing & Timeline",
        icon: <Star className="w-5 h-5" />,
        questions: [
            {
                question: "How do you determine pricing?",
                answer: "Pricing is based on project complexity, required features, number of pages, and timeline. Each project receives a custom quote after discussing your specific needs. I provide transparent pricing with no hidden costs."
            },
            {
                question: "Do you offer subscription plans?",
                answer: "I don't offer subscription plans, but I do provide flexible maintenance packages and ongoing support services based on your needs. You own your website completely after delivery."
            },
            {
                question: "What's the typical project timeline?",
                answer: "Timeline varies by project complexity. Simple websites take 2-4 weeks, while complex e-commerce or multi-feature sites may take 1-3 months. I always provide realistic timelines and keep you updated on progress."
            }
        ]
    }
];

export const STATS_DATA = [
    { number: "50+", label: "Projects Completed", color: "text-main" },
    { number: "100%", label: "Client Satisfaction", color: "text-Secondary" },
    { number: "30 Days", label: "Free Support", color: "text-main" }
];

export const TECHNOLOGIES = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Tailwind CSS", icon: "🎨" },

];