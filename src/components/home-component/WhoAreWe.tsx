import React from 'react';
import SectionContainer from '../styled-wrappers/SectionContainer';
import { 
  LayoutDashboard, 
  Code2, 
  Server, 
  TestTube2,
  Rocket,
  ShieldCheck,
  Smartphone,
  Globe
} from 'lucide-react';

function WhoAreWe() {
    const isArabic = false;
    const services = [
        {
            title: "UI/UX Design",
            icon: <LayoutDashboard className="w-8 h-8" />,
            description: "Beautiful, intuitive interfaces with user-centered design principles"
        },
        {
            title: "Frontend",
            icon: <Code2 className="w-8 h-8" />,
            description: "Modern React/Next.js applications with responsive design"
        },
        {
            title: "Backend",
            icon: <Server className="w-8 h-8" />,
            description: "Robust API development and database architecture"
        },
        {
            title: "Testing",
            icon: <TestTube2 className="w-8 h-8" />,
            description: "Comprehensive testing for reliability and performance"
        },
        {
            title: "Deployment",
            icon: <Rocket className="w-8 h-8" />,
            description: "CI/CD pipelines and cloud infrastructure setup"
        },
        {
            title: "Security",
            icon: <ShieldCheck className="w-8 h-8" />,
            description: "Enterprise-grade security and compliance"
        },
        {
            title: "Mobile",
            icon: <Smartphone className="w-8 h-8" />,
            description: "Cross-platform mobile solutions"
        },
        {
            title: "Web Apps",
            icon: <Globe className="w-8 h-8" />,
            description: "Full-stack web application development"
        }
    ];

    return (
       <SectionContainer 
            title={'Who Are We'}  
            description={isArabic 
                ? "جو-ويب هي وكالة رائدة في تطوير الويب تبتكر تجارب رقمية متطورة. نختص في إنشاء مواقع متجاوبة، حلول التجارة الإلكترونية، وتطبيقات الويب المخصصة. يجمع فريقنا من المطورين والمصممين الخبراء بين التميز التقني والرؤية الإبداعية لتقديم مواقع عالية الأداء تحقق النتائج." 
                : "Go-Web is a premier web development agency crafting cutting-edge digital experiences. We specialize in responsive websites, e-commerce solutions, and custom web applications. Our expert team combines technical excellence with creative vision to deliver high-performance websites that drive results."} 
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className="group relative p-6 bg-Background   text-Text   border border-main/10 shadow-sm hover:shadow-md transition-all duration-400 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-main/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-main/10      ry-300">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-Text/80     mb-2">
                                {service.title}
                            </h3>
                            <p className=" text-Text/70      300 text-sm">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
       </SectionContainer>
    );
}

export default WhoAreWe;
