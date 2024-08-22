import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/pexels-shelaghmurphy.jpg";
import portrait from "../assets/pexels-mododeolhar.jpg";
import pastels from "../assets/tutorials/pexels-steve-1629817.jpg";
import watercolour from "../assets/tutorials/pexels-padrinan-19680.jpg";
import charcoal from "../assets/tutorials/pexels-karoldach-1111692.jpg";

const Home = () => {
    return (
        <main className="flex flex-col pb-28">
            <div className="flex flex-col gap-8 p-8 md:grid md:grid-cols-2 md:items-center">
                <figure className="relative margin-0 md:col-span-1">
                    <img src={homeImg} alt="Close up of a person painting on canvas" className="min-w-60 rounded-lg"></img>
                    <figcaption className="hidden absolute bottom-0 right-0 p-1 bg-neutral-300/[.07] text-xs sm:block">Photo by <a href="https://www.pexels.com/@shelaghmurphy/" target="_blank">Shelagh Murphy</a></figcaption>
                </figure>
                <div className="flex flex-col gap-8 lg:items-center md:col-span-1 ">
                    <div className="home-logo flex flex-col gap-2">
                        <div>
                            <h1 className="italic">Paper & Pigment</h1>
                        </div>
                        <span className="text-lg lg:self-end"> Artists' materials</span>
                    </div>
                    <div className="text-3xl">
                            Inspiring your creations
                    </div>
                    <div className="main flex flex-col gap-4 md:flex-row">
                        <Link to="/paper-and-pigment/shop" className="w-fit rounded-md p-2 text-md text-white text-bold bg-[#8C6577] transition-opacity hover:opacity-80">
                            Find your tools
                        </Link>
                        <Link to="/paper-and-pigment/contact" className="w-fit rounded-md p-2 text-md text-white text-bold bg-[#8C6577] transition-opacity hover:opacity-80">
                            Visit us
                        </Link>
                    </div>
                </div>
            </div>
            
            <div>
                <figure className="featured relative margin-0">
                    <figcaption className="hidden absolute bottom-0 right-0 p-1 bg-neutral-300/[.07] text-xs sm:block">Photo by <a href="https://www.pexels.com/@aliciazinn/" target="_blank">Alicia Zinn</a></figcaption>
                    <div className="flex flex-col gap-8 p-8">
                        <h2>Featured artist</h2>
                        <div className="flex flex-col gap-6 p-8 rounded-lg bg-[rgba(0,0,0,0.5)] md:items-center">
                            <h3 className="text-[#e9bea5]">Anne Eliot</h3>
                            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:place-items-center">
                                <div className="order-2 flex flex-col gap-4 md:order-1 md:grid-span-1">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu finibus enim, sit amet sollicitudin mi.
                                        Curabitur lobortis dictum nulla, at pellentesque est dictum sed. Nam quis auctor justo.
                                        Duis ut nunc imperdiet, accumsan turpis et, aliquam tellus. Aenean eu dolor est. Phasellus iaculis enim enim
                                    </p>
                                    <a href="#" className="w-fit rounded-md p-2 text-md text-bold border border-2 border-[#A67D65] transition-colors hover:text-black hover:bg-[#A67D65]">See their work</a>
                                </div>
                                <figure className="relative margin-0 order:1 md:order-2 md:col-span-1">
                                    <img src={portrait} alt="Close up of a person painting on canvas" className="w-80 rounded-lg"></img>
                                    <figcaption className="hidden absolute bottom-0 right-0 p-1 bg-neutral-300/[.07] text-xs sm:block">Photo by <a href="https://www.pexels.com/@mododeolhar/" target="_blank">mododeolhar</a></figcaption>
                                </figure>

                            </div>
                        </div>
                    </div>
                </figure>
            </div>
            <div className="flex flex-col gap-8 p-8">
                <h2>Tutorials</h2>
                <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-10">
                    <div className="flex flex-col gap-4">
                        <a href=""><img className="min-w-60 w-full rounded-md" src={pastels}></img></a>
                        <h3><a href="" className="hover:text-[#cbd485]">Creating landscapes with pastels</a></h3>
                        <p className="text-[#d3d3d3]">19 April, 2024</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href=""><img className="min-w-60 w-full rounded-md" src={watercolour}></img></a>
                        <h3><a href="" className="hover:text-[#cbd485]">Watercolour techniques</a></h3>
                        <p className="text-[#d3d3d3]">13 September, 2023</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href=""><img className="min-w-60 w-full rounded-md" src={charcoal}></img></a>
                        <h3><a href="" className="hover:text-[#cbd485]">Guide to portrait drawing with charcoal</a></h3>
                        <p className="text-[#d3d3d3]">28 March, 2023</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;