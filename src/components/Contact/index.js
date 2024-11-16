import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-20">
          {/* Text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 leading-tight text-accent">
              Let's Connect<span className="text-white">.</span>
            </h2>
            <p className="max-w-sm mb-8 lg:mb-16">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>

            {/* Social Links */}
            <div className="flex gap-x-6 mb-12">
              <a
                href="#"
                className="text-2xl hover:text-accent transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-accent transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-accent transition-all duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-2xl hover:text-accent transition-all duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <div className="relative group w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all duration-300"
                  placeholder="Your name"
                  required
                />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>
            
            <div className="w-full">
              <div className="relative group w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all duration-300"
                  placeholder="Your email"
                  required
                />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>
            
            <div className="w-full">
              <div className="relative group w-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all duration-300 resize-none mb-12"
                  placeholder="Your message"
                  required
                ></textarea>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>
            
            <button
              type="submit"
              className="btn btn-lg bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition-all duration-300"
            >
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;