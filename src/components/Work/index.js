import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.jpg";

const projects = [
  {
    id: 1,
    title: "Project 1",
    category: "Student Assosication",
    image: work3, // Replace with your project image
    description: "Secretary of Computer Science Student Association.",
  },
  {
    id: 2,
    title: "Project 2",
    category: "UI/UX Design",
    image: work1, // Replace with your project image
    description: "UI/UX for my Human and computer interaction subject.",
  },
  {
    id: 3,
    title: "Project 3",
    category: "Social Media",
    image: work2, // Replace with your project image
    description: "I working as a video creator in mie gori restaurant",
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="h2 text-accent text-center mb-12"
        >
          My Projects & Experience
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", 0.2 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              {/* Image */}
              <img
                className="group-hover:scale-125 transition-all duration-500 w-full h-[300px] object-cover"
                src={project.image}
                alt={project.title}
              />

              {/* Gradient */}
              <div className="absolute -bottom-full left-0 group-hover:bottom-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-8 transition-all duration-500 z-50">
                <h3 className="text-2xl text-gradient mb-2">{project.title}</h3>
                <p className="text-white/70 mb-2">{project.category}</p>
                <p className="text-white/90">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
