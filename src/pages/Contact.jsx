import React from "react";
import telephone from "../assets/icons/tel.svg";
import location from "../assets/icons/location.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import pinterest from "../assets/icons/pinterest.svg";

const Contact = () => {
    return (
        <section id="contact" className="flex flex-col gap-4 md:items-center">
            <h1>Get in touch</h1>

            <div className="flex flex-col gap-4 md:flex-row md:gap-32">
                <div className="flex flex-col gap-2">
                    <h2>Location</h2>
                    <div className="flex flex-col">
                        <span>8972, Avenue des Arts</span>
                        <span>Montreal, Quebec</span>
                        <span>H8F 3Y9</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={telephone} alt="telephone receiver" className="w-5 h-5"></img>
                        <p>(514) 123-4567</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={location} alt="location pin" className="w-5 h-5 cursor-pointer"></img>
                        <a href="" target="_blank">Get directions</a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h2>Store hours</h2>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <span>Monday to Friday</span>
                            <span>10h00 - 18h00</span>
                        </div>
                        <div className="flex flex-col ">
                            <span>Saturday & Sunday</span>
                            <span>12h00 - 17h00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h2>Find us on social media</h2>
                <div className="flex flex-wrap gap-4 md:justify-center md:items-center">
                    <a href="" target="_blank"><img src={facebook} title="facebook" className="min-w-5 h-5 md:w-10 md:h-10"></img></a>
                    <a href="" target="_blank"><img src={instagram} title="instagram" className="min-w-5 h-5 md:w-10 md:h-10"></img></a>
                    <a href="" target="_blank"><img src={twitter} title="X" className="min-w-5 h-5 md:w-10 md:h-10"></img></a>
                    <a href="" target="_blank"><img src={pinterest} title="pinterest" className="min-w-5 h-5 md:w-10 md:h-10"></img></a>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;