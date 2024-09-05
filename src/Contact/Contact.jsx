import React, { useState } from 'react';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <>
            <section className='flex flex-col justify-center px-7 pb-10 md:px-20 md:h-[100vh] lg:px-[10%]' id="contact">
                <h2 className='text-3xl text-white-grey mb-4 md:text-4xl md:mb-10 2xl:text-5xl'>Contact me</h2>
                <div className='flex flex-col w-[100%] md:flex-row md:justify-between'>

                    <div className='text-light-grey font-light text-xl my-5 md:w-[50%] md:mr-10 md:text-2xl md:self-center'>
                        <span className='text-2xl font-normal text-white-grey md:text-3xl'>Get in Touch!</span> <br />
                        I’d love to hear from you! Whether you have a question, a project idea,
                        or just want to say hello, feel free to reach out. I’m always open to new
                        opportunities and collaborations.<br /> <br />

                        <div>Feel free to drop me an email.
                            <div className='text-white-grey underline'>jithinsagar17s@gmail.com</div>
                        </div>
                    </div>

                    <div className='md:w-[50%]'>
                        <h3 className='text-xl md:text-2xl'>Write me a message</h3>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;