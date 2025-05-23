"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Facebook, Linkedin, Users, ArrowRight, } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);


    const companyInfo = {
        name: "Go Web",
        email: "go.web.company99@gmail.com",
        phone: "+20 108 013 1563",
        facebook: "https://www.facebook.com/profile.php?id=61574079332132",
        linkedin: "https://www.linkedin.com/company/go-web-company/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BWEUjraVZQMqMjfXyD41Sww%3D%3D",
        address: "Cairo, Egypt"
    };

    const partners = [
        {
            name: "Mostapha Yasser",

            email: "mostaphyasser18@gmail.com",
            facebook: "https://www.facebook.com/mostapha.yasser.301002",
            linkedin: "https://www.linkedin.com/in/mostapha-yasser",
            image: "/contact/mostapha.jpg"
        },
        {
            name: "Fatma Mohamed",

            email: "fatma.mohamed13499@gmail.com",
            facebook: "https://www.facebook.com/fatma.mohamed.465448",
            linkedin: "https://www.linkedin.com/in/fatma-mohamed-alii",
            image: "/contact/fatma.jpg"
        }
    ];

    return (
        <div className="min-h-screen mt-22 relative">
            <div className="container mx-auto px-8 py-20">
                <div className="mb-24">
                    <div
                        className={`text-center mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            }`}
                    >
                        <h2 className=" text-main mb-6 font-bold text-header-lg" >GO WEB</h2>
                        <p className="text-main max-w-4xl mx-auto  text-title-md" >
                            A specialized company in web development and digital technology solutions.<br />
                            We deliver high-quality services throughout the region.

                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-1 mb-16 max-w-[60rem] mx-auto">
                        {[
                            { icon: Mail, title: "EMAIL", value: companyInfo.email, link: `mailto:${companyInfo.email}`, delay: "delay-[900ms]" },
                            { icon: Phone, title: "PHONE", value: companyInfo.phone, link: `tel:${companyInfo.phone}`, delay: "delay-[1000ms]" },
                            { icon: Facebook, title: "FACEBOOK", value: "Go Web", link: companyInfo.facebook, delay: "delay-[1100ms]" },
                            { icon: Linkedin, title: "LINKEDIN", value: "Go Web Company", link: companyInfo.linkedin, delay: "delay-[1200ms]" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`bg-Aside-Border p-4 relative overflow-hidden group cursor-pointer transform transition-all duration-1000 ${item.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                    }`}
                            >
                                <div className="absolute inset-0 bg-main transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <div className="relative z-10">
                                    <item.icon className="w-8 h-8 text-main mb-2 group-hover:text-white transition-colors duration-500" />
                                    <h3 className="font-black text-main mb-2 tracking-widest group-hover:text-white transition-colors duration-500 text-desc-sm" >{item.title}</h3>
                                    <a
                                        href={item.link}
                                        className="text-main hover:text-white text-desc-sm group-hover:text-slate-300 transition-colors duration-500 font-medium break-all"

                                        target={item.link.startsWith('http') ? '_blank' : undefined}
                                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        {item.value}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ############################################################################### */}
                <div className="mb-20">
                    <div
                        className={`text-center mb-16 transform transition-all duration-1000 delay-[1300ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            }`}
                    >
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-8 h-0.5 bg-main mr-4" />
                            <p className="text-main font-bold text-title-lg flex justify-center items-center " >   <Users className="text-main w-10 h-10 mx-4" />Meet The Founding Partners</p>
                            <div className="w-8 h-0.5 bg-main ml-4" />
                        </div>


                    </div>

                    <div className="grid md:grid-cols-2 gap-1 max-w-6xl mx-auto">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className={` border border-Aside-Border overflow-hidden group cursor-pointer transform transition-all duration-1000 ${index === 0 ? 'delay-[1400ms]' : 'delay-[1500ms]'
                                    } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                            >
                                <div className="relative">
                                    <div className="h-80 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-main transform translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                                        <div className="relative z-10 w-64 h-64 overflow-hidden bg-white border-4 border-white group-hover:border-Aside-Border transition-colors duration-500">
                                            <Image
                                                src={partner.image}
                                                alt={partner.name}
                                                fill
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"

                                            />
                                            <div className="absolute inset-0 bg-white flex items-center justify-center text-header-lg font-bold text-main tracking-wider" style={{ display: 'none' }}>
                                                {partner.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-main transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200" />
                                    <div className="relative z-10">
                                        <div className="mb-8">
                                            <h3 className="text-header-lg  text-main mb-2 font-bold group-hover:text-white transition-colors duration-500">
                                                {partner.name}
                                            </h3>

                                        </div>

                                        <div className="space-y-6">
                                            <div className="flex items-center group-hover:text-white transition-colors duration-500">
                                                <Mail className="w-6 h-6 text-main mr-4 flex-shrink-0 group-hover:text-white transition-colors duration-500" />
                                                <a href={`mailto:${partner.email}`} className="text-main group-hover:text-slate-300 transition-colors duration-500 font-medium">
                                                    {partner.email}
                                                </a>
                                            </div>

                                            <div className="flex items-center group-hover:text-white transition-colors duration-500">
                                                <Facebook className="w-6 h-6 text-main mr-4 flex-shrink-0 group-hover:text-white transition-colors duration-500" />
                                                <a href={partner.facebook} target="_blank" rel="noopener noreferrer" className="text-main group-hover:text-slate-300 transition-colors duration-500 font-medium">
                                                    FACEBOOK PROFILE
                                                </a>
                                            </div>

                                            <div className="flex items-center group-hover:text-white transition-colors duration-500">
                                                <Linkedin className="w-6 h-6 text-main mr-4 flex-shrink-0 group-hover:text-white transition-colors duration-500" />
                                                <a href={partner.linkedin} target="_blank" rel="noopener noreferrer" className="text-main group-hover:text-slate-300 transition-colors duration-500 font-medium">
                                                    LINKEDIN PROFILE
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ################################################################################################################################################### */}
            <div
                className={`text-center transform transition-all duration-1000 delay-[1600ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
            >
                <div className="bg-Aside-Border p-16 relative group">
                    <div className="relative z-10">
                        <h3 className="text-header-lg font-bold mb-8 text-main tracking-tight">
                            Ready To Start?
                        </h3>
                        <p className="text-title-md text-main mb-12 max-w-4xl mx-auto ">
                            LET'S WORK TOGETHER TO BRING YOUR DIGITAL VISION TO LIFE.<br />
                            CONTACT US TODAY FOR A FREE CONSULTATION.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href={`mailto:${companyInfo.email}`}
                                className="bg-white text-main px-12 py-4 tracking-wider hover:bg-main/25 transition-all duration-300 flex items-center group"
                            >
                                SEND EMAIL
                                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                            <a
                                href={`tel:${companyInfo.phone}`}
                                className="border-4 border-white text-main px-12 py-4 font-black tracking-wider hover:bg-white hover:text-main transition-all duration-300 flex items-center group"
                            >
                                CALL NOW
                                <Phone className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}