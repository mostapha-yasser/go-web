"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import aboutUS from "../../../public/aboutUs.svg";
import aboutUS2 from "../../../public/aboutUs2.svg";

import { coreValues, teamMembers } from "@/consts/aboutUs";

function AboutUs() {
  gsap.registerPlugin(ScrollTrigger);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const aboutTextRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
      if (!headerRef.current||!aboutTextRef.current||!valuesRef.current||!teamRef.current||!statsRef.current) return;

    
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );

    
    gsap.fromTo(
      aboutTextRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
      }
    );

    // Values section animation
    gsap.fromTo(
      valuesRef.current.querySelectorAll(".value-card"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
        },
      }
    );

    // Team section animation
    gsap.fromTo(
      teamRef.current.querySelectorAll(".team-card"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.7,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 75%",
        },
      }
    );

    // Stats counter animation
    const statElements = statsRef.current.querySelectorAll(".stat-number");
    statElements.forEach((stat) => {
const targetValue = parseInt(stat.getAttribute("data-value") ?? "0", 10)
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            stat,
            { textContent: "0" },
            {
              duration: 2,
              textContent: targetValue,
              roundProps: "textContent",
              ease: "power1.inOut",
            }
          );
        },
        once: true,
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full ">
            <Image
              src={aboutUS2}
              alt="Go-Web Team"
              className="w-full  object-cover "
            />
          </div>
        </div>

        <div
          ref={headerRef}
          className="container mx-auto px-4 md:px-8 z-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-main mb-6">
            We Are <span className="scale-110">Go-Web</span>
          </h1>
          <p className="text-xl md:text-2xl text-Text max-w-3xl mx-auto">
            A premier web development agency crafting cutting-edge digital
            experiences since 2024
          </p>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src={aboutUS}
                alt="Our Team"
                className="rounded-sm shadow-xl w-full h-auto"
              />
            </div>
            <div ref={aboutTextRef} className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-Text mb-6">
                Our Story
              </h2>
              <p className="text-lg text-Text/55 mb-6">
                Founded in 2024, Go-Web emerged with a clear vision: to bridge
                the gap between innovative design and technical excellence. We
                believe that truly exceptional digital experiences don&apos;t
                just look beautiful—they function flawlessly.
              </p>
              <p className="text-lg text-Text/55 mb-6">
                Our team of specialists combines deep technical expertise with
                creative problem-solving to deliver websites and applications
                that not only meet but exceed our clients&apos; expectations.
                From responsive websites to sophisticated e-commerce solutions
                and custom web applications, we transform digital challenges
                into opportunities.
              </p>
              <p className="text-lg text-Text/55">
                At Go-Web, we don&apos;t just build websites—we create digital
                assets that drive real results for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={statsRef} className="py-5 bg-gradient-to-b from-Text to-main text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h3
                className="stat-number text-5xl font-bold mb-2"
                data-value="50"
              >
                0
              </h3>
              <p className="text-xl">Happy Clients</p>
            </div>
            <div className="p-6">
              <h3
                className="stat-number text-5xl font-bold mb-2"
                data-value="20"
              >
                0
              </h3>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div className="p-6">
              <h3
                className="stat-number text-5xl font-bold mb-2"
                data-value="10"
              >
                0
              </h3>
              <p className="text-xl">Team Members</p>
            </div>
            <div className="p-6">
              <h3
                className="stat-number text-5xl font-bold mb-2"
                data-value="7"
              >
                0
              </h3>
              <p className="text-xl">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
      {/* Core Values Section */}
      <div ref={valuesRef} className="py-20 bg-gradient-to-b from-main to-main/10 ">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map(({ title, description, icon }) => (
              <div
                key={title}
                className="value-card bg-white p-8 rounded-sm 
                shadow-lg border-t-4  border-main hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-main/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-Text text-center mb-4">
                  {title}
                </h3>
                <p className="text-Text/55 text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
  <div ref={teamRef} className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-Text mb-16">
      Our Expert Team
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="team-card border-l-3 border-main bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold text-Text mb-2">
              {member.title}
            </h3>
            <p className="text-Text/55">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Services Section */}
    </div>
  );
}

export default AboutUs;
