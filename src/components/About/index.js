import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import avatar2 from "../../assets/avatar2.png";
import { getData } from "../../libs/firebase";


const skills = [
  { name: "Web Development", percentage: 70 },
  { name: "UI/UX Design", percentage: 70 },
  { name: "React.js", percentage: 60 },
  { name: "Frontend Development", percentage: 75 },
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [firebaseData, setFirebaseData] = useState(null);

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const data = await getData("About");
        if (data) {
          setFirebaseData(data);
        }
      } catch (error) {
        console.error("Error fetching about description:", error);
      }
    };

    fetchDescription();
  }, []);

  

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
              {firebaseData?.desc || "Loading..."}
            </h3>
            <p className="mb-6">
              {firebaseData?.text || "Loading..."}
            </p>

            {/* Stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Study
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-xl font-semibold">{skill.name}</span>
                    <div className="flex items-center">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        className="text-gradient mr-2"
                      >
                        {inView ? (
                          <CountUp
                            start={0}
                            end={skill.percentage}
                            duration={2}
                            delay={index * 0.3}
                          />
                        ) : null}
                        %
                      </motion.span>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-black/50 rounded-full p-[2px]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        inView
                          ? { width: `${skill.percentage}%` }
                          : { width: 0 }
                      }
                      transition={{
                        duration: 1.5,
                        delay: index * 0.3,
                        ease: "easeInOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 relative"
                    >
                      <div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg" />
                    </motion.div>
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
