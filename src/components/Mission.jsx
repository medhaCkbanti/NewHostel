import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div className="container mx-auto pt-8">
      <div className="flex items-center justify-between w-full">
        
        {/* Animated Mission Text */}
        <motion.div
          className="max-w-[520px] bg-[#0394b5] h-[500px] rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="heading"> Our Mission </h1>

          <p className="text-white px-6 mt-4">
            We create opportunities for children from remote areas to receive
            quality education and essential healthcare, empowering them to
            thrive. By fostering a nurturing environment, we enable these
            children to unlock their potential and build brighter futures.
          </p>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          className="w-[980px] h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="/src/assets/assest/Slide-02.jpg"
            className="h-full w-full rounded-2xl"
            alt="Mission Slide"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;

