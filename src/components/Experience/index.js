import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Experience data
const experiences = [
  {
    id: 1,
    year: "2023 - Present",
    title: "Frontend Developer",
    company: "Tech Company",
    description: "Working on modern web applications using React, Tailwind CSS, and other cutting-edge technologies.",
    skills: ["React", "Tailwind CSS", "JavaScript", "Git"],
  },
  {
    id: 2,
    year: "2022 - 2023",
    title: "UI/UX Designer",
    company: "Design Studio",
    description: "Created user-centered designs and prototypes for various web and mobile applications.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  },
  {
    id: 3,
    year: "2021 - 2022",
    title: "Web Developer Intern",
    company: "Startup",
    description: "Learned and applied web development fundamentals in a fast-paced startup environment.",
    skills: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container mx-auto">
        <motion.h2 
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="h2 text-accent text-center mb-12"
        >
          Professional Experience
        </motion.h2>

        <div className="flex flex-col gap-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={fadeIn("up", 0.2 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col lg:flex-row gap-4 lg:gap-x-10 relative before:absolute before:left-2 lg:before:left-[42%] before:h-full before:w-[2px] before:bg-white/20 last:before:hidden"
            >
              {/* Year */}
              <div className="lg:w-[40%] flex items-center">
                <div className="w-[50px] h-[50px] rounded-full bg-accent/10 flex items-center justify-center relative z-10">
                  <div className="w-[30px] h-[30px] rounded-full bg-accent animate-pulse" />
                </div>
                <div className="text-xl font-primary ml-4">{experience.year}</div>
              </div>

              {/* Content */}
              <div className="lg:w-[60%] bg-black/50 rounded-xl p-6 backdrop-blur-md hover:bg-black/60 transition-all duration-300">
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {experience.title}
                </h3>
                <p className="font-light text-lg mb-2 text-white/60">
                  {experience.company}
                </p>
                <p className="mb-4">{experience.description}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-accent/10 rounded-full text-sm text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;