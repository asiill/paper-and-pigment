import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/pexels-shelaghmurphy.jpg";

const Home = () => {
    return (
        <section id="home" className="">
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center">
                <figure className="relative margin-0 md:col-span-1">
                    <img src={homeImg} alt="Close up of a person painting on canvas" className="min-w-60 rounded-lg"></img>
                    <figcaption className="hidden absolute bottom-0 right-0 p-1 bg-neutral-300/[.07] text-xs sm:block">Photo by <a href="https://www.pexels.com/@shelaghmurphy/" target="_blank">Shelagh Murphy</a></figcaption>
                </figure>
                <div className="flex flex-col gap-8 md:col-span-1 lg:items-center">
                    <div className="home-logo flex flex-col gap-2">
                        <div>
                            <span className="text-5xl italic">Paper & Pigment</span>
                        </div>
                        <span className="lg:self-end"> Artists' materials</span>
                    </div>
                    <div className="text-3xl">
                            Inspiring your creations
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <Link to="/paper-and-pigment/shop">
                            <button className="w-fit">Find your tools</button>
                        </Link>
                        <Link to="/paper-and-pigment/contact">
                            <button className="w-fit">Visit us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;