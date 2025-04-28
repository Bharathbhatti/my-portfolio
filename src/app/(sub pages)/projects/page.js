import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";

import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
import { projectsData } from "../../data";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

const segregateProjects = (projects) => {
  const frontend = projects.filter((project) => project.type === "frontend");
  const backend = projects.filter((project) => project.type === "backend");
  const fullstack = projects.filter((project) => project.type === "fullstack");
  
  return { frontend, backend, fullstack };
};

export default function Home() {
  const { frontend, backend, fullstack } = segregateProjects(projectsData);

  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Frontend Section */}
          <section className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Frontend Projects</h2>
            <ProjectList projects={frontend} />
          </section>

          {/* Backend Section */}
          <section className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-center mb-8 text-green-600">Backend Projects</h2>
            <ProjectList projects={backend} />
          </section>

          {/* Full Stack Section */}
          <section className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">Full Stack Projects</h2>
            <ProjectList projects={fullstack} />
          </section>
        </div>
      </div>

      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
