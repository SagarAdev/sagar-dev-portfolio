import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_h6dz6r9', 'service_h6dz6r9', form.current, {
                publicKey: 'ziTJe91Z0AMBk5lvm',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className=''>
                <div><input className='input' type="text" placeholder="Enter your name" name="user_name" /></div>
                <div><input className='input' type="email" placeholder="Enter your email" name="user_email" /></div>
                <div><textarea className='input h-32 resize-none rounded-[30px] py-5 px-7' name="message" placeholder="Enter your message" /></div>
                <input className="button button-hover mt-0  w-[50%] h-12 text-xl md:mt-5 " type="submit" value="Send" />
            </form>
        </>
    )
}

export default ContactForm; 