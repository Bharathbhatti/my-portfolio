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
            Hi, I'm Bharath BN, an aspiring Full Stack Developer with a strong
            passion for building scalable, high-performance web applications. I
            specialize in crafting modern, responsive frontends using React.js,
            Next.js, TypeScript, and Tailwind CSS, while also engineering robust
            backend systems with Node.js, Express.js, and databases like
            MongoDB, MySQL, and PostgreSQL.
            <br />
            <br />
            Graduating with a B.Tech in Electronics and Communication
            Engineering from NIT Goa, I have developed a strong foundation in
            Data Structures, Algorithms, OOPS, DBMS, and Operating Systems. My
            experience includes designing and deploying full-stack applications
            such as BookWise, SmartNotes, and ShopperzKart, where I implemented
            secure authentication, optimized database performance, integrated
            payment gateways, and improved application scalability.
            <br />
            <br />
            I’m skilled in DevOps practices like containerization with Docker,
            deployment on platforms like Vercel and Netlify, and setting up
            CI/CD pipelines to ensure smooth and reliable production workflows.
            My approach combines strong technical expertise with a keen focus on
            building user-friendly, maintainable, and efficient software
            solutions.
            <br />
            <br />
            Beyond coding, I enjoy solving problems on LeetCode, exploring new
            technologies, and continuously pushing myself to learn and grow in
            this ever-evolving field.I'm excited to apply my full-stack skills
            to create impactful digital experiences and work with teams that
            value innovation, collaboration, and continuous improvement.Feel
            free to check out my projects, GitHub, or LinkedIn, and let’s
            connect and create something amazing together!
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
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Programming Languages
            </h3>
            <img
              className="w-full max-w-xs h-auto"
              src={`https://skillicons.dev/icons?i=c,python,js,ts`}
              alt="Programming Languages"
              loading="lazy"
            />
            <p className="mt-2 text-sm text-gray-300">
              C, Python, JavaScript, TypeScript
            </p>
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
            <p className="mt-2 text-sm text-gray-300">
              HTML, CSS, React, Next.js, Redux Toolkit, Tailwind CSS
            </p>
          </ItemLayout>

          {/* Backend & Databases */}
          <ItemLayout className="p-6 bg-background shadow-lg rounded-xl text-center flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Backend & Databases
            </h3>
            <img
              className="w-full max-w-xs h-auto"
              src={`https://skillicons.dev/icons?i=nodejs,mysql,mongodb,postgresql`}
              alt="Backend and Databases"
              loading="lazy"
            />
            <p className="mt-2 text-sm text-gray-300">
              Node.js, MySQL, MongoDB, PostgreSQL
            </p>
          </ItemLayout>

          {/* DevOps & Tools */}
          <ItemLayout className="p-6 bg-background shadow-lg rounded-xl text-center flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              DevOps & Tools
            </h3>
            <img
              className="w-full max-w-xs h-auto"
              src={`https://skillicons.dev/icons?i=git,github,docker,vercel,netlify,kubernetes`}
              alt="DevOps and Tools"
              loading="lazy"
            />
            <p className="mt-2 text-sm text-gray-300">
              Git, GitHub, Docker, Vercel, Netlify, Kubernetes
            </p>
          </ItemLayout>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
