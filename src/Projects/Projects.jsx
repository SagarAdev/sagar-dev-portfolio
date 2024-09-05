import React from 'react';
import ProjectCard from './ProjectCard';
import dictionaryJpg from '../src/assets/dictionaryWebapp.jpg';
import ecomJpg from '../src/assets/ecomWebsite.jpg'
function Projects() {
    const projectList = [
        {
            title: "React Dictionary Webapp",
            description: "A responsive dictionary app built with React, allowing users to search for word definitions, synonyms, phonetic transcriptions, and examples using a dictionary API. Integrated Axios to fetch real-time data for a complete search experience.",
            imgUrl: ecomJpg,
            link: "https://github.com/SagarAdev/React-Dictionary-Webapp.git",
            linkStatus: "active-link",
            target: "_blank"
        },
        {
            title: "NatureNook (Upcoming)",
            description: "An e-commerce website for indoor plants. A frontend-only platform focused on responsive design and smooth user interactions. Stay tuned for updates!",
            imgUrl: dictionaryJpg,
            link: "",
            linkStatus: "font-normal flex",
            target: "",
        }
    ]

    return (
        <>
            <section className='flex flex-col justify-center px-7 pb-28 md:px-20 md:pt-20 lg:px-[10%] ' id="projects">
                <h2 className='text-3xl text-white-grey mb-4 md:text-4xl md:mb-10 2xl:text-5xl'>Projects</h2>
                <div className='flex flex-wrap justify-around md:flex-col md:flex-nowrap '>
                    {projectList.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            link={project.link}
                            linkStatus={project.linkStatus}
                            target={project.target} />
                    ))}
                </div>

            </section>
        </>
    )
}

export default Projects;