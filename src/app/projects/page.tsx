import React from 'react';
import Link from 'next/link';
import { projects } from "@/consts/projects";
import Card from '@/components/Card/Card';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen max-w-7xl mx-auto bg-Background py-12 mt-16">
            <div className="container mx-auto px-4">
                <h1 className="text-header-lg font-bold text-main text-center mb-6">Our Projects</h1>
                <p className='max-w-2xl mx-auto font-semibold text-main text-center mb-12 text-desc-lg'>Each project delivers both a custom-designed front-facing website and a powerful administrative dashboard, providing clients with complete digital ecosystems tailored to their specific business needs</p>

                <div className="grid grid-cols-2 gap-12 items-center justify-center">
                    {projects.map((project) => (
                        <Link href={`/projects/${project.slug}`} key={project.slug}>
                            <Card
                                title={project.title}
                                description={project.shortDescription}
                                image={project.image}
                                className='w-full   shadow-lg shadow-Aside border-2 border-b-main'
                                // imgclassName='w-full '
                                useFill={true}
                                titleClassName='bg-main/90 py-0.5 px-3 rounded-sm '
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}