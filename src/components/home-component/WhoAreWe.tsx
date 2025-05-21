"use client"
import React, { useRef } from 'react';
import SectionContainer from '../styled-wrappers/SectionContainer';
import Image from 'next/image';
import unico from "../../../public/projects/unico.png"
import hestia from "../../../public/projects/hestia.png"
import baderLab from "../../../public/projects/baderLab.png"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

function WhoAreWe() {
  const container = useRef(null);
  const imagesContainerRef = useRef(null);
  const textRef = useRef(null);
  const imageRefs = useRef([]);
  
  // Add image refs to the array
  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  useGSAP(() => {
    // Set initial positions for images (off-screen)
    gsap.set(imageRefs.current, {
      x: (i) => (i % 2 === 0 ? -150 : 150),
      opacity: .5
    });

    // Animation for images to come in and stay
    imageRefs.current.forEach((img, i) => {
      gsap.to(img, {
        x: 0,
        opacity: .2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imagesContainerRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none"
        }
      });
    });

    // Animation for images to move away when scrolling down
    imageRefs.current.forEach((img, i) => {
      gsap.to(img, {
        x: (i % 2 === 0 ? -300 : 300),
       
         opacity: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      });
    });

    // Animation for text to reveal
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
  }, { scope: container });

  return (
    <SectionContainer 
      containerClass='relative text-center '
      title={'Who Are We'}  
      description={" "}
    >
      <div ref={container} className="relative min-h-screen flex justify-center items-center">
        <div ref={imagesContainerRef} className='images-container absolute top-1/2 left-1/2 -translate-1/2 
        mx-auto max-w-4xl mb-20'>
          <div className='flex justify-center gap-4 mb-4'>
            <div ref={addToRefs} className="image-wrapper">
              <Image 
                src={unico} 
                alt={'Unico project'} 
                width={300} 
                height={200}
                className='border-main border-4 object-cover w-96 h-48 md:h-80 object-top'
              />
            </div>
            <div ref={addToRefs} className="image-wrapper">
              <Image 
                src={hestia} 
                alt={'Hestia project'} 
                width={300} 
                height={200}
                className='border-main border-4 object-cover w-96 h-48 md:h-80 object-top'
              />
            </div>
          </div>
          <div className='flex justify-center gap-4'>
            <div ref={addToRefs} className="image-wrapper">
              <Image 
                src={baderLab} 
                alt={'Bader Lab project'} 
                width={300} 
                height={200}
                className='border-main border-4 object-cover w-96 h-48 md:h-80 object-top'
              />
            </div>
            <div ref={addToRefs} className="image-wrapper">
              <Image 
                src={unico} 
                alt={'Unico project'} 
                width={300} 
                height={200}
                className='border-main border-4 object-cover w-96 h-48 md:h-80 object-top'
              />
            </div>
          </div>
        </div>
        
        {/* Text content */}
        <div ref={textRef} className="opacity-0 px-4">
          <p className="text-lg md:text-xl leading-relaxed text-white text-justify bg-main w-full md:w-3/5 p-6 mx-auto tracking-wide rounded-lg">
            Go-Web is a premier web development agency crafting 
            cutting-edge digital experiences. We specialize in responsive websites,
            e-commerce solutions, and custom web applications. Our expert team combines
            technical excellence with creative vision to deliver 
            high-performance websites that drive results. With years of industry experience,
            we&apos;ve helped businesses of all sizes establish a powerful online presence.
            Our approach combines innovative design with robust functionality to create
            websites that not only look stunning but also perform exceptionally.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

export default WhoAreWe;
