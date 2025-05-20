"use client";
import Link from "next/link";
import { Mail, MapPin, Phone,Facebook, Linkedin } from "lucide-react";


import { pages } from "@/consts/pages";
import { projects } from "@/consts/projects";

function Footer() {
  const currentYear = new Date().getFullYear().toString();


  return (
    <footer className="footerBg text-white pt-8 pb-4 w-full bg-fixedComponentBg relative bg-footer">
      <div className="absolute left-17.5 -top-1 h-6 w-6 rounded-full
        bg-secondary animate-ping " />

      <div className="w-11/12 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 lg:justify-items-center">

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Main Links </h3>
            <div className="flex flex-col gap-2 ps-2">
              {pages.map((link) => (
                <Link
                  href={link.target}
                  key={link.title}
                  className="px-4 py-2 w-fit cursor-pointer text-sm hover:bg-main/70 text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>


          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-secondary" />
                <p>El-obour - cairo</p>
              </div>
               <div className="flex items-center gap-3">
                <Facebook size={18} className="text-secondary" />
                <a
                  href="https://www.facebook.com/profile.php?id=61574079332132"
                  className="hover:border-white  border-transparent      border-b-2  cursor-pointer transition-colors duration-300"
                >
                  Facebook
                </a>
              </div>
               <div className="flex items-center gap-3">
                <Linkedin size={18} className="text-secondary" />
                <a
                  href="https://www.linkedin.com/company/go-web-company/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BWEUjraVZQMqMjfXyD41Sww%3D%3D"
                  className="hover:border-white  border-transparent      border-b-2  cursor-pointer transition-colors duration-300"
                >
                  Facebook
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-secondary" />
                <a
                  href="mailto:go.web.company99@gmail.com"
                  className="hover:border-white  border-transparent      border-b-2  cursor-pointer transition-colors duration-300"
                >
                  go.web.company99@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-secondary" />
                <p>01080131563</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Top Projects</h3>
            <div className="flex flex-col gap-2 ps-2">
              {projects.map((link) => (
                <Link
                  href={link.target}
                  key={link.title}
                  className="px-4 py-2 w-fit cursor-pointer text-sm hover:bg-main/70 text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

        

         
        </div>

        <hr className="w-full h-0.5 bg-secondary my-6" />

        <div className="text-center text-sm md:text-base">
          <p className="flex justify-center items-center">
            <span className="text-lg mr-1">©</span> {currentYear}{" "}
            <span className="mx-2 font-semibold">Go-web</span>. All rights reserved.
          </p>
        </div>
      </div>

    
    </footer>
  );
}

export default Footer;