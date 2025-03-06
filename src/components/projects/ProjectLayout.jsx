import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, tools = [], demoLink, githubLink }) => {
  return (
    <motion.div
      variants={item}
      className="w-full max-w-3xl bg-transparent shadow-lg rounded-xl p-6 flex flex-col space-y-4 border border-muted backdrop-blur-md mx-auto"
    >
      <h2 className="text-lg sm:text-xl font-semibold text-foreground">{name}</h2>
      <p className="text-sm sm:text-base text-muted">{description}</p>
      
      {/* Ensuring tools text wraps properly */}
      <p className="text-sm text-blue-400 font-medium break-words whitespace-normal overflow-hidden">
        <span className="font-semibold">Tools Used:</span> {Array.isArray(tools) ? tools.join(", ") : tools}
      </p>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <ProjectLink
          href={demoLink}
          target="_blank"
          className="px-4 py-2 text-sm sm:text-base bg-primary text-white rounded-lg shadow-md hover:bg-opacity-80 transition transform hover:scale-105 hover:shadow-lg w-full sm:w-auto text-center"
        >
          Live Demo
        </ProjectLink>
        <ProjectLink
          href={githubLink}
          target="_blank"
          className="px-4 py-2 text-sm sm:text-base bg-secondary text-white rounded-lg shadow-md hover:bg-opacity-80 transition transform hover:scale-105 hover:shadow-lg w-full sm:w-auto text-center"
        >
          GitHub Repo
        </ProjectLink>
      </div>
    </motion.div>
  );
};

export default ProjectLayout;
