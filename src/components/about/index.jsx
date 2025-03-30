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
            Hi, I'm Bharath BN, a tech enthusiast and problem-solver passionate
            about crafting efficient and user-friendly software solutions. With
            a strong foundation in full-stack web development and DevOps, I love
            leveraging modern technologies to build scalable systems that make
            life easier. I recently graduated from National Institute of
            Technology, Goa, earning a Bachelor's degree in Electronics and
            Communication Engineering.
            <br />
            <br />
            My journey as a developer has been fueled by hands-on experience
            designing innovative projects like BookWise, a feature-rich library
            management system, and ShopperzKart, a responsive e-commerce
            platform with seamless payment integration. Beyond full-stack web
            development, I'm delving into DevOps practices to optimize
            deployment pipelines and boost system reliability. Equipped with
            certifications from IBM and HackerRank, I have a demonstrated
            proficiency in Python, SQL, React.js, and REST APIs, among others.
            <br />
            <br />
            I'm on a continuous learning curve, exploring cutting-edge tools
            like Docker and Kubernetes to master containerization and
            orchestration, while keeping a sharp focus on the core principles of
            Data Structures, OOPS, and problem-solving. Feel free to check out
            my projects, GitHub, or LinkedIn, and let’s connect and create
            something amazing together!
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
