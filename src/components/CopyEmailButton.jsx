import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  return (
    <motion.a
      href="mailto:kanishkhan1209@gmail.com"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden flex items-center justify-center no-underline text-white"
    >
      Email Me
    </motion.a>
  );
};

export default CopyEmailButton;
