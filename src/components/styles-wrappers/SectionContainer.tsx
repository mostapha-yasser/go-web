"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SectionContainer = ({
  title,
  description,
  children
}) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // يعني لما يوصل بداية العنصر لـ 80% من الشاشة
        toggleActions: "play none none reverse",
      },
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    tl.from(descRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5");

    tl.from(contentRef.current.children, {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.7,
      ease: "power2.out",
    }, "-=0.4");
  }, { scope: sectionRef }); // دي مهمه جدا عشان يكون الانيميشن مربوط بالمجال الصح

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 ref={titleRef} className="text-4xl font-bold mb-4">{title}</h2>
        <p ref={descRef} className="text-lg text-gray-600 mb-8">{description}</p>
        <div ref={contentRef} className="space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
