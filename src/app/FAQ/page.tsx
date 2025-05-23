"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, BookOpen, Zap, ArrowRight } from 'lucide-react';
import { FAQ_CATEGORIES, STATS_DATA, TECHNOLOGIES } from '@/consts/FAQ';
import Link from 'next/link';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
        const newIndex = `${categoryIndex}-${questionIndex}`;
        setActiveIndex(activeIndex === newIndex ? null : newIndex);
    };

    return (
        <div className="min-h-screen mt-22 bg-Background">
            <div className="container mx-auto px-4 py-16">
                <div className={`text-center mb-20 transition-all duration-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {/* <div className="w-16 h-16 bg-main mx-auto mb-6 flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-white" />
                    </div> */}
                    <h1 className="text-header-lg font-bold text-main mb-4">
                        Frequently Asked Questions
                    </h1>

                    <p className="text-title-md text-Text max-w-2xl mx-auto leading-relaxed">
                        Get answers to common questions about my web development services.
                        I'm here to help you understand how we can bring your digital vision to life.
                    </p>
                </div>

                <div className={`max-w-4xl mx-auto mb-16 transition-all duration-800 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="bg-headerBg shadow-lg">
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-main mb-6 text-center">Technologies I Use</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {TECHNOLOGIES.map((tech, index) => (
                                    <div key={index} className="text-center group">
                                        <div className="bg-white shadow-md p-4 mb-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                            <span className="text-3xl block mb-2">{tech.icon}</span>
                                        </div>
                                        <span className="font-medium text-Text group-hover:text-main transition-colors duration-300">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                    {FAQ_CATEGORIES.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className={`mb-12 transition-all duration-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: `${300 + categoryIndex * 150}ms` }}
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-12 h-12 bg-main text-white flex items-center justify-center mr-4">
                                    {category.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-main">{category.category}</h2>
                                <div className="flex-1 h-px bg-main/20 ml-6"></div>
                            </div>

                            <div className="space-y-2">
                                {category.questions.map((faq, questionIndex) => {
                                    const isActive = activeIndex === `${categoryIndex}-${questionIndex}`;
                                    return (
                                        <div key={questionIndex} className="bg-white shadow-md">
                                            <button
                                                className="cursor-pointer  w-full px-6 py-5 text-left flex items-center justify-between hover:bg-Aside transition-all duration-300 group"
                                                onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                                            >
                                                <div className="flex items-center flex-1">

                                                    <h3 className="text-lg font-semibold text-main group-hover:text-Secondary transition-colors duration-300">
                                                        {faq.question}
                                                    </h3>
                                                </div>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-main transition-transform duration-300 ${isActive ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>

                                            <div
                                                className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-96' : 'max-h-0'
                                                    }`}
                                            >
                                                <div className="px-6 py-5 bg-Aside border-l-4 border-main">
                                                    <p className="text-Text leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-800 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {STATS_DATA.map((stat, index) => (
                        <div key={index} className="bg-white shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                            <div className="p-8">
                                <div className={`text-4xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                    {stat.number}
                                </div>
                                <div className="text-Text font-medium">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <div className={`transition-all duration-800 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="bg-Aside-Border text-main shadow-lg  ">
                    <div className="p-12 text-center max-w-3xl mx-auto">
                        <Zap className="w-16 h-16 mx-auto mb-6" />
                        <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                        <p className="text-xl mb-8 opacity-90 max-w-xl mx-auto">
                            Let's discuss your web development needs and create something amazing together
                        </p>
                        <Link href="/contact" className="bg-white cursor-pointer text-main px-8 py-4 font-bold text-lg hover:bg-main/25 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center">
                            Contact us
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;