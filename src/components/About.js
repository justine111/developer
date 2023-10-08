import React from "react";
//import Adobexd from "../assets/adobex.4d905a69.png";


const About = () => {
return (
    <section className="bg-primary text-white px-5 py-32" id="about">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
            <div className="about-info">
                <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                    About Me
                </h2>

                <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-sm md:text-base">
                    Hi, My Name Is Mark Justine Bengson. I am a Fullstack Developer. 
                    I build beautifull websites and web based System with Html, Boostrap, JavaScript and
                    PHP. I'm now learning more about framework in order to stay with current trends
                    for ex. this website is build with React js &#x1F604;
                </p>

                <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-sm md:text-base">
                    I'm now working as MIS Staff in a private company. Also i am 
                    open for commision in building your projects for more info Get in touch. &#x1F44D; 
                </p>

                <div className="flex items-left gap-x-4 mt-8 sm:justify-left relative">
                    <div className="border-b-2 border-green-800 border-t-2 w-12 aspect-square animate-[spin_4s_linear_infinite] rounded-full"></div>
                    <a href="/#contact">Contact Me</a>
                </div>
            </div>            
        </div>
    </section>
    );
};

export default About;