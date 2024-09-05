import React from 'react';
import ProfilePic from './src/assets/Profile.jpg'

function Hero() {
    return (
        <section className='flex justify-center items-center px-5 h-[100vh] md:px-20 xl:px-36 2xl:px-56' id="home">

            <div className='flex flex-col justify-center items-center w-[100%] md:flex-row-reverse md:justify-between xl:justify-around '>

                <div className="size-[225px] rounded-full mb-10 md:size-[260px] xl:size-[300px] md:mr-0 overflow-hidden"><img src={ProfilePic} alt="" /></div>
                <h2 className='text-[35px] text-center sm:text-[55px] md:text-left md:text-[52px] lg:text-[60px] xl:text-[64px]'>Hello, I'm
                    <span className='text-accent'> Sagar</span>
                    <br />
                    Frontend Developer
                </h2>
            </div>
        </section>
    )
}
export default Hero;