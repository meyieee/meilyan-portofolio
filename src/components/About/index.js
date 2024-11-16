import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import avatar2 from "../../assets/avatar2.png"; // Fixed import

const skills = [
  { name: "Web Development", percentage: 90 },
  { name: "UI/UX Design", percentage: 85 },
  { name: "React.js", percentage: 88 },
  { name: "Frontend Development", percentage: 85 },
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 relative h-[640px] flex items-center justify-center"
          >
            <img
              src={avatar2}
              alt="About me"
              className="w-[400px] h-[400px] object-cover rounded-full border-2 border-accent/50"
            />
            {/* Gradient circle behind image */}
            <div className="absolute -z-10 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Frontend Developer with over 2 years of experience.
            </h3>
            <p className="mb-6">
              I specialize in creating beautiful and functional websites using
              modern technologies. My passion lies in transforming ideas into
              reality through code.
            </p>

            {/* Stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-xl font-semibold">{skill.name}</span>
                    <span className="text-gradient">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-800 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        inView
                          ? { width: `${skill.percentage}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;