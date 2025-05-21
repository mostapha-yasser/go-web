"use client"
import { useParams } from 'next/navigation';
import { projects } from "@/consts/projects";
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowLeft,
    Loader,
    Users,
    BookOpen,
    Clock,
    Link as LinkIcon,

    Calendar,

    Play
} from 'lucide-react';

interface TechBadgeProps {
    name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => {
    return (
        <span className="px-4 py-2  bg-main text-Background text-desc-sm font-medium flex items-center gap-2">

            {name}
        </span>
    );
};

interface StatBoxProps {
    label: string;
    value: string | number;
    icon: React.ReactNode;
}

const StatBox = ({ label, value, icon }: StatBoxProps) => {
    return (
        <div className="flex items-center gap-4 p-3  bg-Background/50 border-l-4  border-Aside-Border/10 hover:bg-Background/80 transition-all duration-300 hover:shadow-sm">
            <div className="text-main">{icon}</div>
            <div className="flex flex-wrap gap-2">
                <span className="text-title-sm font-medium text-main">{value}</span>
                <span className="text-desc-xs text-Text/70 my-auto">{label}</span>
            </div>
        </div>
    );
};

export default function ProjectDetails() {
    const params = useParams();
    const slug = params.slug;

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader className="animate-spin text-main" size={40} />
            </div>
        );
    }

    return (
        <div className="min-h-screen   text-Text mt-36">





            <div className="container lg:max-w-[80%] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-2/3">
                        <div className="w-full aspect-video mb-8  overflow-hidden shadow-xl relative group hover:shadow-2xl transition-all duration-300">


                            <video
                                src={project.details.video}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                poster={project.image.src}
                                id="projectVideo"
                                preload="metadata"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20" id="videoOverlay">
                                <button
                                    onClick={() => {
                                        const videoElement = document.getElementById('projectVideo') as HTMLVideoElement;
                                        const overlay = document.getElementById('videoOverlay');

                                        if (videoElement) {
                                            videoElement.play();
                                            if (overlay) {
                                                overlay.style.opacity = '0';
                                                setTimeout(() => {
                                                    overlay.style.display = 'none';
                                                }, 500);
                                            }

                                            videoElement.addEventListener('pause', () => {
                                                if (overlay) {
                                                    overlay.style.display = 'flex';
                                                    setTimeout(() => {
                                                        overlay.style.opacity = '1';
                                                    }, 10);
                                                }
                                            });

                                            videoElement.addEventListener('ended', () => {
                                                if (overlay) {
                                                    overlay.style.display = 'flex';
                                                    setTimeout(() => {
                                                        overlay.style.opacity = '1';
                                                    }, 10);
                                                }
                                            });
                                        }
                                    }}
                                    className="cursor-pointer p-6 bg-main hover:bg-main  text-Background shadow-xl transform transition-all duration-300 hover:scale-110"
                                >
                                    <Play size={32} className="ml-1" />
                                </button>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
                                <h3 className="text-white text-title-md font-medium">{project.title} Demo</h3>
                                <p className="text-white/80 text-desc-sm">Experience the project in action</p>
                            </div>
                        </div>

                        <div className="mb-8 bg-Aside/10 p-8  border border-Aside-Border/30">
                            <div className="flex items-center gap-3 mb-9">

                                <h2 className="text-title-lg font-semibold text-main">Technologies Used</h2>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {project.details.technologies.map((tech, index) => (
                                    <TechBadge key={index} name={tech} />
                                ))}
                            </div>
                        </div>

                        <div className="mb-8 bg-Aside/10 p-8  border border-Aside-Border/30">
                            <div className="flex items-center gap-3 mb-4">

                                <h2 className="text-title-lg font-semibold text-main">Project Overview</h2>
                            </div>
                            <div className="prose max-w-none text-desc-md leading-relaxed bg-Aside/20 p-6 ">
                                <p>{project.details.fullDescription}</p>
                            </div>
                        </div>

                        <div className="mb-8 bg-Aside/10 p-8  border border-Aside-Border/30">
                            <div className="flex items-center gap-3 mb-4">

                                <h2 className="text-title-lg font-semibold text-main">Project Gallery</h2>
                            </div>
                            <div className=" overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.01]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto"
                                    width={1200}
                                    height={675}
                                />
                            </div>

                        </div>
                    </div>
                    {/* ###################################################################################3 */}
                    <div className="w-full  lg:w-1/3   ">
                        <div className=" pb-4">

                            <div className="bg-Aside/50  border-b border-main shadow-lg  ">

                                <div className="p-4 space-y-3">
                                    <h3 className="text-title-md font-medium text-main mb-3 pb-2 border-b border-main flex items-center gap-2">

                                        Project Details
                                    </h3>
                                    <div className='grid grid-cols-1 gap-2'>
                                        <StatBox
                                            label="Client"
                                            value={project.details.client}
                                            icon={<Users size={20} />}
                                        />
                                        <StatBox
                                            label="Pages"
                                            value={project.details.pagesCount}
                                            icon={<BookOpen size={20} />}
                                        />
                                        <StatBox
                                            label="Development"
                                            value={project.details.duration}
                                            icon={<Clock size={20} />}
                                        />
                                        <StatBox
                                            label="Completion"
                                            value={project.details.completionDate || "2025"}
                                            icon={<Calendar size={20} />}
                                        />
                                    </div>
                                </div>

                                <div className="p-6 bg-Background/30">
                                    <h3 className="text-title-md font-medium text-main mb-4 flex items-center gap-2">
                                        Key Features
                                    </h3>

                                    <ul className="space-y-3 text-desc-md">
                                        {project.details.keyFeatures ? (
                                            project.details.keyFeatures.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2 p-2 hover:bg-Background/40  transition-colors duration-200">
                                                    <div className="mt-1.5 text-main">
                                                        <div className="w-1.5 h-1.5 bg-main rounded-full my-auto "></div>
                                                    </div>
                                                    <span className="my-auto" >{feature}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <>
                                                <li className="flex items-start gap-2 p-2 hover:bg-Background/40  transition-colors duration-200">
                                                    <div className="mt-1.5 text-main">
                                                        <div className="w-1.5 h-1.5 bg-main rounded-full my-auto"></div>
                                                    </div>
                                                    <span>Responsive design</span>
                                                </li>
                                                <li className="flex items-start gap-2 p-2 hover:bg-Background/40  transition-colors duration-200">
                                                    <div className="mt-1.5 text-main">
                                                        <div className="w-1.5 h-1.5 bg-main rounded-full my-auto"></div>
                                                    </div>
                                                    <span className="my-auto">Modern UI/UX</span>
                                                </li>
                                                <li className="flex items-start gap-2 p-2 hover:bg-Background/40  transition-colors duration-200">
                                                    <div className="mt-1.5 text-main">
                                                        <div className="w-1.5 h-1.5 bg-main rounded-full my-auto"></div>
                                                    </div>
                                                    <span>SEO optimized</span>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>

                                <div className="p-6 border-t border-Aside-Border/20">
                                    <div className="flex items-center mb-3">
                                        <h3 className="text-title-sm font-medium text-main">Website</h3>
                                    </div>
                                    <Link href={project.target} target="_blank" className="text-main flex flex-start hover:underline  ">
                                        <LinkIcon className="text-main mr-2 my-auto" size={16} />
                                        {project.target}
                                    </Link>
                                </div>

                                <div className="p-6 bg-Background/50 border-t border-Aside-Border/20">
                                    <p className="text-center text-desc-sm mb-4 text-Text/80">Interested in a similar project?</p>
                                    <Link href="/contact">
                                        <button className="w-full cursor-pointer px-6 py-3 bg-main hover:bg-main text-Background  font-medium transition-all duration-300 flex items-center justify-center gap-2">
                                            <Users size={18} />
                                            Start Your Project
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-Aside py-12 mt-12 ">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-title-lg font-semibold text-main mb-6">Ready to see more?</h2>
                    <Link href="/projects">
                        <button className="cursor-pointer px-8 py-4 bg-main text-Background  font-medium hover:bg-main transition-colors duration-300 flex items-center gap-2 mx-auto">
                            <ArrowLeft size={20} />
                            Browse All Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}