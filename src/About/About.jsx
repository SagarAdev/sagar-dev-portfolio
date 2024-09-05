import React from 'react';
import SkillCard from '../SkillCard';
import htmlSvg from '../src/assets/htmlIcon.svg';
import cssSvg from '../src/assets/cssIcon.svg';
import jsSvg from '../src/assets/jsIcon.svg';
import reactSvg from '../src/assets/reactIcon.svg';
import tailwindSvg from '../src/assets/tailwindIcon.svg';
import githubSvg from '../src/assets/githubIcon.svg';
import responsiveSvg from '../src/assets/responsiveIcon.svg';

function About() {
    return (
        <>
            <section className='flex flex-col justify-center px-7 mb-24 md:px-20 md:pt-20 lg:px-[10%]' id='about'>
                <h2 className='text-3xl text-white-grey mb-4 md:text-4xl md:mb-10 2xl:text-5xl '>About Me</h2>
                <div className='flex flex-col md:flex-row'>
                    <div className='text-light-grey font-light text-2xl md:w-[50%] md:mr-10 2xl:text-3xl  '>
                        Hey, I’m Sagar, a frontend developer from Bengaluru, India.
                        I love creating clean, user-friendly interfaces from scratch
                        and enjoy learning about the latest tech.
                        <br />
                        <br />
                        I’m currently on the lookout for internship opportunities
                        where I can get hands-on experience with real projects.
                        I’m eager to learn from experienced professionals, contribute
                        to meaningful work, and continue growing my skills in a
                        practical setting.
                    </div>
                    <div className='my-6 md:my-0 md:w-[50%] md:ml-10 md:px-5'>
                        <h3 className='text-2xl'>My Skills</h3>
                        <div className="flex flex-wrap justify-around w-[100%] pt-5 md:py-5">
                            <SkillCard imgUrl={htmlSvg} title="HTML5" />
                            <SkillCard imgUrl={cssSvg} title="CSS3" />
                            <SkillCard imgUrl={jsSvg} title="Javascript" />
                            <SkillCard imgUrl={reactSvg} title="React.js" />
                            <SkillCard imgUrl={tailwindSvg} title="Tailwind CSS" />
                            <SkillCard imgUrl={githubSvg} title="Github" />
                            <SkillCard imgUrl={responsiveSvg} title="Responsive Design" />
                        </div>
                    </div>
                </div>
                <button className='button button-hover'>Resume</button>
            </section>
        </>
    )
}

export default About;