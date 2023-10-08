import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const Header = () => {
const [toggle, setToggle] = useState(false);
const handleToggle = () => setToggle(!toggle);
return (
    <header className="flex mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between px-5 py-2 bg-primary text-white fixed w-full z-10 ">
        {/*<div class="-z-10 fixed animate-[spin_4s_linear_infinite] -left-1/2 w-full aspect-square border-b rounded-full top-0 border-green-700/30 shadow-md shadow-purple-500/20"></div>*/}
        <a href="/" className="logo text-2xl font-bold text-accent flex mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">JB.</a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
            <ul className="flex">
                <li>
                    <a href="/#about">About</a>
                </li>

                <li>
                    <a href="/#projects">Projects</a>
                </li>

                <li>
                    <a href="/#tech">TechStack</a>
                </li>

                <li>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
        </nav>

        {/* Mobile Nav */}
        <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
            <ul className="flex flex-col">
                <li>
                    <a href="/#about">About</a>
                </li>

                <li>
                    <a href="/#projects">Projects</a>
                </li>

                <li>
                    <a href="/#tech">TechStack</a>
                </li>

                <li>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
        </nav>

        {/* Toggle button */}
        <button onClick={handleToggle} className="block md:hidden">
            {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
    </header>
    );
};

export default Header;