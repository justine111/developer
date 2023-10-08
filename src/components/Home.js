import React from "react";
import HeroImg from "../logo.svg";

const Home = () => {
return (
    <section className="bg-primary px-5 text-white py-32">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
            <div className="hero-info pb-5 md:pb-0">
                <h2 className="text-gray-400 tracking-wide mt-8 sm:mt-0">
                    Hi, I am Mark Justine Bengson
                 </h2>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-text tracking-wide text-transparent mt-4 bg-clip-text bg-gradient-to-r from-green-400 to-purple-600 max-w-3xl mx-auto">
                    TRYING TO BE BETTER<br/>WEB DEVELOPER.
                </h1>      

                <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-sm md:text-base">
                    A passionate web developer in vanilla PHP. I'm now learning more about framework in order to stay with current trends.
                </p>
            </div>
        
            <div className="hero-img">
                <img src={HeroImg} alt="coding illustration" className="lgw-[80%] ml-auto"/>
            </div>
        </div>
    </section>
    );
};

export default Home;