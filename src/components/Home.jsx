import React from 'react';
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full min-h-full">
                <h2 className="lg:text-7xl md:text-7xl sm:text-5xl sm:mt-12 font-bold text-white">
                    I'm a Deverloper and Developer
                </h2>
                <p className="text-gray-400 py-4 max-w-md">I have been a designer and programmer for over 9 years. I have industrial work experience working at Pearson Canada Inc. as a web designer and developer.  I also completed numerous personal projects in my spare time to enhance my programming knowledge. Currently, some of the technologies I like to work with include HTML, CSS, JavaScript, React, Next,js, Framer Motion and Tailwind.</p>
                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center random-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={20} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='sm:mb-12'>
                <img src={HeroImage} alt="My profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
        </div>
    </div>
  );
}

export default Home;