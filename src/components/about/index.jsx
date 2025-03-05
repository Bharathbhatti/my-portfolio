import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        {/* Personal Description */}
        <ItemLayout className="col-span-full flex-col items-start p-6 bg-background shadow-lg rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light text-sm sm:text-base md:text-lg mt-4">
            Hi, I'm Bharath BN, a passionate Frontend Engineer with a strong foundation in React.js, Next.js, and modern web development. I specialize in building scalable, high-performance applications with a focus on clean UI/UX, state management, and optimized backend integrations.<br/>I hold a B.Tech in Electronics and Communication Engineering from NIT Goa and have experience working on full-stack projects involving Next.js, TypeScript, Tailwind CSS, PostgreSQL, and Redis. My work includes building BookWise, a modern library management system, and ShopperzKart, an e-commerce platform with secure authentication and Stripe integration.<br/>Beyond frontend development, I have hands-on experience with DevOps tools like Docker and Git, as well as data science applications from my internship, where I built a deep-learning model for time series forecasting.<br/>I’m always excited to work on challenging projects that push the boundaries of web technology. Feel free to check out my projects, GitHub, or LinkedIn, and let’s connect!
          </p>
        </ItemLayout>
      </div>
      
      {/* Skills Section */}
      <div className="col-span-full mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center w-full capitalize mb-10">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <ItemLayout className="p-6 bg-background shadow-lg rounded-xl text-center flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Programming Languages</h3>
            <img
              className="w-full max-w-xs h-auto"
              src={`https://skillicons.dev/icons?i=c,python,js,ts`}
              alt="Programming Languages"
              loading="lazy"
            />
            <p className="mt-2 text-sm text-gray-500">C, Python, JavaScript, TypeScript</p>
          </ItemLayout>
          
          {/* Frontend */}
          <ItemLayout className="p-6 bg-background shadow-lg rounded-xl text-center flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Frontend</h3>
            <img
              className="w-full max-w-xs h-auto"
              src={`https://skillicons.dev/icons?i=html,css,react,next,redux,tailwind`}
              alt="Frontend Technologies"
              loading="lazy"
            />
            <p className="mt-2 text-sm text-gray-500">HTML, CSS, React, Next.js, Redux Toolkit, Tailwind CSS</p>
          </ItemLayout>
          
          {/* Backend & Databases */}
          <ItemLayout className="p-6 bg-background shadow-lg rounded-xl text-center flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Backend & Databases</h3>
            <img
              className="w-full max-w-xs h-auto"
              src={`https://skillicons.dev/icons?i=nodejs,mysql,mongodb,postgresql`}
              alt="Backend and Databases"
              loading="lazy"
            />
            <p className="mt-2 text-sm text-gray-500">Node.js, MySQL, MongoDB, PostgreSQL</p>
          </ItemLayout>
          
          {/* DevOps & Tools */}
          <ItemLayout className="p-6 bg-background shadow-lg rounded-xl text-center flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">DevOps & Tools</h3>
            <img
              className="w-full max-w-xs h-auto"
              src={`https://skillicons.dev/icons?i=git,github,docker,vercel`}
              alt="DevOps and Tools"
              loading="lazy"
            />
            <p className="mt-2 text-sm text-gray-500">Git, GitHub, Docker, Vercel</p>
          </ItemLayout>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
