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
      className="w-full bg-transparent shadow-lg rounded-xl p-6 flex flex-col space-y-4 border border-muted backdrop-blur-md"
    >
      <h2 className="text-xl font-semibold text-foreground">{name}</h2>
      <p className="text-muted text-sm">{description}</p>
      <p className="text-sm text-blue-400 font-medium">Tools Used: {Array.isArray(tools) ? tools.join(", ") : tools}</p>
      <div className="flex items-center space-x-4">
        <ProjectLink
          href={demoLink}
          target="_blank"
          className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-opacity-80 transition transform hover:scale-105 hover:shadow-lg"
        >
          Live Demo
        </ProjectLink>
        <ProjectLink
          href={githubLink}
          target="_blank"
          className="px-4 py-2 bg-secondary text-white rounded-lg shadow-md hover:bg-opacity-80 transition transform hover:scale-105 hover:shadow-lg"
        >
          GitHub Repo
        </ProjectLink>
      </div>
    </motion.div>
  );
};

export default ProjectLayout;
