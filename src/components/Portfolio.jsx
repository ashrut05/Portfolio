import React from 'react';
import portfolio from '../assets/portfolio/portfolio.jpg';
import dalle from '../assets/portfolio/dalle.jpg';
import universityWebsite from '../assets/portfolio/universityWebsite.jpg'
import myRecipes from '../assets/portfolio/myRecipes.jpg';
import metaverse from '../assets/portfolio/metaverse.jpg';
import restaurantCuisine from '../assets/portfolio/restaurantCuisine.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src:portfolio,
            codeLink:"https://github.com/ashrut05/Portfolio",
            demoLink: "https://ashrut.netlify.app/"
        },
        {
            id:2,
            src:dalle,
            codeLink:"https://github.com/ashrut05/DallE-clone",
            demoLink:"https://dall-e-ash.netlify.app/"
        },
        {
            id:3,
            src:metaverse,
            codeLink:"https://github.com/ashrut05/metaverse",
            demoLink:"https://ashmeta.netlify.app/"
        },
        {
            id:4,
            src:universityWebsite,
            codeLink:"https://github.com/ashrut05/University-Website",
            demoLink:"https://ashrut05.github.io/University-Website/HTML/index.html"
        },
        {
            id:5,
            src:myRecipes,
            codeLink: "https://github.com/ashrut05/My-Recipes",
            demoLink: "https://main--peppy-dango-32a513.netlify.app/"

        },
        {
            id:6,
            src:restaurantCuisine,
            codeLink: "https://github.com/ashrut05/Cuisine-Restaurant-App",
            demoLink: "https://github.com/ashrut05/Cuisine-Restaurant-App"
        }
    ]
  return <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline-border-b-4 border-gray-500'>Portfolio</p>
        <p>Check out some of my work right here</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
      {
        portfolios.map(({id, src, codeLink, demoLink}) => (
            <div  key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <a href={demoLink}  target='_blank' rel="noreferrer">
              <img src={src} 
              alt=""
              className="rounded-md duration-200 hover:scale-105 cursor-pointer"/>
              </a>
                <div className='flex items-center justify-center'>
                  <a href={codeLink}  target='_blank' rel="noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                  </a>
                </div>
              </div>
        ))
      }
      </div>
    </div>
  </div>;
}

export default Portfolio