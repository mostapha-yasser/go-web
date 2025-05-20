import React from 'react';
import SectionContainer from '../styled-wrappers/SectionContainer';
import Card from '../Card/Card';
import { services } from '@/consts/services';

function WhoAreWe() {
    const isArabic = false;
  
    return (
       <SectionContainer 
            title={'Who Are We'}  
            description={isArabic 
                ? "جو-ويب هي وكالة رائدة في تطوير الويب تبتكر تجارب رقمية متطورة. نختص في إنشاء مواقع متجاوبة، حلول التجارة الإلكترونية، وتطبيقات الويب المخصصة. يجمع فريقنا من المطورين والمصممين الخبراء بين التميز التقني والرؤية الإبداعية لتقديم مواقع عالية الأداء تحقق النتائج." 
                : "Go-Web is a premier web development agency crafting cutting-edge digital experiences. We specialize in responsive websites, e-commerce solutions, and custom web applications. Our expert team combines technical excellence with creative vision to deliver high-performance websites that drive results."} 
        >
            <div className="flex  gap-4 flex-wrap justify-center">
                {services.map((service) => (
                    <Card image={service.image} key={service.title} title={service.title} description={service.description}/>
                ))}
            </div>
       </SectionContainer>
    );
}

export default WhoAreWe;
