"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface SectionContainerProps {
  title: string;
  description: string;
  accentColor?: string;
  titleSize?: string;
  descriptionSize?: string;
  sectionClass?: string;
  containerClass?: string;
  children: React.ReactNode;
}

const SectionContainer = ({
  title,
  description,
  accentColor = "border-main",
  titleSize = "text-4xl md:text-5xl",
  descriptionSize = "text-lg md:text-xl",
  sectionClass = "",
  containerClass = "",
  children
}: SectionContainerProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const desc = descRef.current;
    const border = borderRef.current;
    const dotsContainer = dotsRef.current;
    const childrenElements = contentRef.current?.children || [];

    if (!section || !title || !border || !dotsContainer) return;

    const dotCount = 15;
    const dots = [];

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('div');
      dot.className = accentColor.replace('border', 'bg') + ' w-2 h-2 rounded-full absolute ';
      dotsContainer.appendChild(dot);
      dots.push(dot);
    }

    const positionDots = () => {
      const borderWidth = border.offsetWidth;
      const borderHeight = border.offsetHeight;
      const perimeter = 2 * (borderWidth + borderHeight);
      const spacing = perimeter / dotCount;

      dots.forEach((dot, index) => {
        const position = index * spacing;
        let x, y;

        if (position < borderWidth) {
          x = position;
          y = 0;
        }
        else if (position < borderWidth + borderHeight) {
          x = borderWidth;
          y = position - borderWidth;
        }
        else if (position < 2 * borderWidth + borderHeight) {
          x = borderWidth - (position - borderWidth - borderHeight);
          y = borderHeight;
        }
        else {
          x = 0;
          y = borderHeight - (position - 2 * borderWidth - borderHeight);
        }

        gsap.set(dot, { x, y });
      });
    };

    positionDots();

    ScrollTrigger.create({
      trigger: section,
      start: "top 90%",
      end: "bottom 10%",
      onUpdate: (self) => {
        const progress = self.progress;
        dots.forEach((dot, index) => {
          const staggeredProgress = (progress + (index / dotCount)) % 1;
          const position = staggeredProgress * (2 * (border.offsetWidth + border.offsetHeight));
          let x, y;

          if (position < border.offsetWidth) {
            x = position;
            y = 0;
          } else if (position < border.offsetWidth + border.offsetHeight) {
            x = border.offsetWidth;
            y = position - border.offsetWidth;
          } else if (position < 2 * border.offsetWidth + border.offsetHeight) {
            x = border.offsetWidth - (position - border.offsetWidth - border.offsetHeight);
            y = border.offsetHeight;
          } else {
            x = 0;
            y = border.offsetHeight - (position - 2 * border.offsetWidth - border.offsetHeight);
          }

          gsap.to(dot, {
            x, y,
            duration: 0.2,
            ease: "power1.out"
          });
        });
      }
    });

    window.addEventListener('resize', positionDots);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(title, {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out"
    });

    if (desc) {
      tl.from(
        desc,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out"
        },
        "-=0.4"
      );
    }

    tl.from(
      Array.from(childrenElements),
      {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.3"
    );

    return () => {
      window.removeEventListener('resize', positionDots);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      dots.forEach(dot => dot.remove());
    };
  }, [accentColor]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden py-20 mx-auto ${sectionClass}`}
    >
      <div className={`container mx-auto px-6 max-w-4xl relative z-10 ${containerClass}`}>
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className={`font-bold ${titleSize} tracking-tight mb-4`}
          >
            {title}
          </h2>

          {description && (
            <p
              ref={descRef}
              className={`mx-auto max-w-2xl text-gray-600 ${descriptionSize}`}
            >
              {description}
            </p>
          )}
        </div>

        <div
          ref={borderRef}
          className={`relative p-8 border-2 ${accentColor} rounded-lg bg-white/50 backdrop-blur-sm`}
        >
          <div
            ref={dotsRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          />

          <div ref={contentRef} className="space-y-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;