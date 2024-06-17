import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/pexels-shelaghmurphy.jpg";

const Home = () => {
    return (
        <section id="home" className="p-4">
            <div className="grid grid-cols-2">
                <figure className="col-span-1 relative margin-0">
                    <img src={homeImg} alt="Close up of a person painting on canvas"></img>
                    <figcaption className="absolute bottom-0 right-0 p-1 bg-neutral-300/[.07] text-xs">Photo by <a href="https://www.pexels.com/@shelaghmurphy/">Shelagh Murphy</a></figcaption>
                </figure>
                <div className="flex flex-col justify-center items-center p-12 gap-8 col-span-1">
                    <div className="home-logo flex flex-col justify-center">
                        <div>
                            <span className="text-5xl italic">Paper & Pigment</span>
                        </div>
                        <span className="self-end"> Artists' materials</span>
                    </div>
                    <div className="text-3xl">
                            Inspiring your creations
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <Link to="/paper-and-pigment/shop">
                            <button>Find your tools</button>
                        </Link>
                        <Link to="/paper-and-pigment/contact">
                            <button>Visit us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;