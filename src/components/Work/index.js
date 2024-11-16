import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Import your project images here
const projects = [
  {
    title: "Project 1",
    description: "Web Development",
    image: "/path-to-your-image1.jpg", // Add your project image path
    link: "#",
    github: "#",
    tech: ["React", "Tailwind", "Node.js"],
  },
  {
    title: "Project 2",
    description: "UI/UX Design",
    image: "/path-to-your-image2.jpg", // Add your project image path
    link: "#",
    github: "#",
    tech: ["Figma", "Adobe XD"],
  },
  {
    title: "Project 3",
    description: "Mobile App",
    image: "/path-to-your-image3.jpg", // Add your project image path
    link: "#",
    github: "#",
    tech: ["React Native", "Firebase"],
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <h2 className="h2 leading-tight text-accent text-center mb-4">
            My Latest Work
          </h2>
          <p className="max-w-sm mb-16 text-center">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              variants={fadeIn("up", 0.2 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              key={index}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={project.image}
                alt={project.title}
              />
              {/* Gradient */}
              <div className="absolute -bottom-full left-0 group-hover:bottom-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-8 transition-all duration-500 z-50">
                <h3 className="text-3xl text-gradient mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="btn btn-sm bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="btn btn-sm border border-white/50 hover:border-white/90 hover:scale-105 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;