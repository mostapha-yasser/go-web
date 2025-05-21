"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/consts/aboutUs";

gsap.registerPlugin(ScrollTrigger);



function Services() {
    

  const servicesRef = useRef<HTMLDivElement | null>(null);


  useGSAP(() => {
      if (!servicesRef.current) return;

    gsap.fromTo(
      servicesRef.current.querySelectorAll(".service-item"),
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.15,
        duration: 0.7,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <div ref={servicesRef} className="py-30 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
          {services.map((service, index) => (
            <div key={index} className="service-item flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-main/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-main"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {service.icon}
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text mb-2">
                  {service.title}
                </h3>
                <p className="text-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default Services;
