import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';

function Header() {

    const navItems = [
        {
            id: 2,
            title: "about",
            class: "",
            classActive: '',
        },
        {
            id: 3,
            title: "projects",
            class: "",
            classActive: '',
        },
        {
            id: 4,
            title: "contact",
            class: "",
            classActive: '',
        }
    ];

    const [burgerClicked, setBurgerClicked] = useState(false);

    const ulClasses = classNames(
        'text-4xl font-light nav-burger-menu nav-bar md:text-2xl',
        {
            'nav-burger-menu-clicked': burgerClicked,
        }
    );

    const burgerClasses = classNames(
        'hamburger-menu right-[5%] absolute visible cursor-pointer md:invisible md:pointer-events-none',
    );

    const closeBurgerIcon = (isOpen) => classNames(
        "size-10  transition-all duration-300 ease-in-out",
        {
            'opacity-0 rotate-[180deg]': !isOpen,
        }
    );
    const openBurgerIcon = (isOpen) => classNames(
        "size-10 absolute transition-all duration-300 ease-in-out",
        {
            'opacity-0 -rotate-[180deg]': isOpen,
        }
    );


    return (
        <header className='fixed w-[100%] bg-tranparent-gray  flex justify-center items-center px-5 py-3 md:justify-between md:px-20 lg:px-[10%]'>
            <Link to="home"
                className='text-accent text-5xl sm:text-6xl md:text-4xl font-light opacity-100 cursor-pointer'
                smooth={true}
                duration={400}>Sagar.</Link>

            <ul className={`${ulClasses}`}>
                {navItems.map((item) => (
                    <li key={item.id} className='m-5 md:m-0'>
                        <Link to={item.title}
                            smooth={true}
                            duration={400}
                            offset={window.innerWidth <= 860 ? -81 : 0}
                            onClick={() => {
                                setBurgerClicked(!burgerClicked);
                            }}
                            spy={true}
                            activeClass={item.classActive}
                            className={`hover:border-b hover:border-accent hover:-translate-y-[2px] cursor-pointer transition-all duration-100 ease-in-out ${item.class}`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => {
                setBurgerClicked(!burgerClicked);
            }}
                className={burgerClasses}>
                <img src="burger-menu-right-svgrepo-com.svg" alt="Hamburger-open-icon" className={openBurgerIcon(burgerClicked)} />
                <img src="cross-svgrepo-com.svg" alt="Hamburger-close-icon" className={closeBurgerIcon(burgerClicked)} />
            </div>
        </header >
    )
}

export default Header;