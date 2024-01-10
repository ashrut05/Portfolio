import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div  className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
            Hi! I am Ash, a recent graduate from Centennial College, who has completed an Advanced Diploma in Software Engineering Technology. I also have previous Co-op experiences as well as a Bachelor of Computer Applications degree.
            </p>

            <br/>
            
            <p className='text-xl'>
            Throughout my studies in Computer Science, I developed a deep understanding of HTML, CSS, JavaScript in an Agile environment,and I completed several projects that involved designing and creating visually stunning and user-friendly websites. These experiences ignited my passion for web designing and pushed me to pursue a career in this field. I am also dedicated to staying up to date with the latest technologies and best practices in web development, and I am always looking for opportunities to learn and improve. I would be happy to provide you with references who could vouch for my abilities in an industrial environment.</p>

            <br/>

            <p className='text-xl'>As a self-starter and a quick learner, I am committed to developing my skills in a professional setting. I am excited to work with a team who can help me grow in my career and contribute to the success of the company.</p>
        </div>
    </div>
  )
}

export default About