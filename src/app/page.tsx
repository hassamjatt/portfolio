// File: page.tsx

import React from 'react';
import {  } from "module";
import Footer from './Component/footer';


export default function Portfolio() {
  return (
    <main className="bg-black text-gray-200 min-h-screen flex flex-col items-center p-8"><img
     src="/WhatsApp Image 2024-11-08 at 18.26.53_edb14c36.jpg"
     alt="" width="400" />
      {/* Header */}
      <header className="text-4xl font-bold border-b border-gray-700 pb-4 mb-8 w-full text-center">
        Hassam Jatt
      </header>
      
      {/* About Section */}
      <section className="w-full max-w-2xl mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-400">
          I am a passionate web developer specializing in building efficient and elegant web solutions using Next.js, React, and Tailwind CSS. With a keen eye for design and detail, I create seamless user experiences.
        </p>
      </section>
      
      {/* Skills Section */}
      <section className="w-full max-w-2xl mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'].map((skill, index) => (
            <span key={index} className="bg-gray-800 px-4 py-2 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */} 
      <section className="w-full max-w-2xl mb-10 text-center"> 
        <h2 className="text-2xl font-semibold mb-3">Projects</h2>
        <div className="space-y-6">
          <div className="bg-gray-800 p-5 rounded-md">
            <h3 className="text-xl font-semibold">Project 1</h3><img src="HH.JPG" alt="" />
            <p className="text-gray-400">Description of your project here.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-md"><img src="II.JPG" alt="" />
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-400">Description of another project.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-md"> <img src="LLL.JPG" alt="" />
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-gray-400">Description of your project here.</p>
          </div>          <div className="bg-gray-800 p-5 rounded-md"> <img src="WH.JPG" alt="" />
            <h3 className="text-xl font-semibold">Project 4</h3>
            <p className="text-gray-400">Description of your project here.</p>
          </div>
          
            <div className="bg-gray-800 p-5 rounded-md"> <img src="image.jpg" alt="" />
            <h3 className="text-xl font-semibold">Project 5</h3>
            <p className="text-gray-400">Description of your project here.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-md"> <img src="kkkal.jpg" alt="" />
            <h3 className="text-xl font-semibold">Project 6</h3>
            <p className="text-gray-400">Description of your project here.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-md"> <img src="lll.jpg" alt="" />
            <h3 className="text-xl font-semibold">Project 6</h3>
            <p className="text-gray-400">Description of your project here.</p>
          </div>
  

        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p className="text-gray-400">
          Feel free to reach out via it <a
         href="mailto:your-email@example.com" className="text-gray-300 underline">Email</a>.
        </p>
      </section>
      <Footer/>
    </main>
    
  );
}
