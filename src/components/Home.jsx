import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <section id="home" className="h-screen flex flex-col justify-center items-center">
    <motion.h1
      className="text-5xl font-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
    </motion.h1>
    <p className="text-xl mt-4"></p>
  </section>
);

export default Home;