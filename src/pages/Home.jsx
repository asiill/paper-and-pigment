import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section id="home" className="p-4">
            <div className="flex flex-col justify-center items-center p-12 gap-8">
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
        </section>
    );
};

export default Home;