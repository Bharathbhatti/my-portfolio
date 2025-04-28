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
      {/* Background Image */}
      <Image
        src={bg}
        alt="Next.js Portfolio website's background"
        className="fixed top-0 left-0 w-full h-full object-cover object-center opacity-50 -z-50"
        priority
        sizes="100vw"
      />

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          
          {/* Frontend Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-blue-600">
              Frontend Projects
            </h2>
            <ProjectList projects={frontend} />
          </section>

          {/* Backend Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-green-600">
              Backend Projects
            </h2>
            <ProjectList projects={backend} />
          </section>

          {/* Fullstack Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-purple-600">
              Full Stack Projects
            </h2>
            <ProjectList projects={fullstack} />
          </section>

        </div>
      </div>

      {/* 3D Model */}
      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-[300px] sm:h-[400px] lg:h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
