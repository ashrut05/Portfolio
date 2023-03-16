import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div  className="max w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis iure illum veniam, culpa ea, sint, accusantium saepe explicabo veritatis quibusdam adipisci. Neque blanditiis eveniet, et sequi iste inventore atque accusamus?  
            </p>

            <br/>

            <p className='text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet tempore magnam quo consequuntur fuga vel facilis ullam maxime ut qui molestias, iure id ratione reprehenderit voluptate repellat. Fuga, blanditiis facere.</p>
        </div>
    </div>
  )
}

export default About