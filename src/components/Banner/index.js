import React from "react";
import Image from "../../assets/avatar.png";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              MEILYAN <span>SIWY</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Student",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Frontend Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 font-normal text-lg text-gray-300"
            >
              A passionate third-year student exploring the world of web
              development and design. Currently focused on creating beautiful,
              functional websites while learning and growing in the tech
              industry.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.instagram.com/meilyansiwy?igsh=OGRsNXJwaHF2aWV1&utm_source=qr"
                className="hover:text-accent transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/meyieee"
                className="hover:text-accent transition-colors duration-300"
              >
                <FaGithub />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <div className="absolute -z-10 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-2xl"></div>
            <img
              src={Image}
              alt="Avatar"
              className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full border-2 border-accent/50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
