import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Kanishkhan
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
          <motion.p
            className="mt-4 text-3xl font-normal text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
          >
            I am a Pre-Final Year CSE Student
          </motion.p>
          <div className="flex flex-col items-start gap-8 mt-10">
            <motion.div
              className="flex gap-4"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 2.4 }}
            >
              <a
                href="/assets/KANISHKHANRESUME.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 text-lg font-semibold text-black transition-all bg-white rounded-full hover:scale-105"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3 text-lg font-semibold text-white transition-all border-2 border-white/20 rounded-full hover:bg-white/10 hover:border-white/40"
              >
                Contact Info
              </a>
            </motion.div>
            <motion.div
              className="flex gap-10 px-2"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 2.7 }}
            >
              <a
                href="https://www.linkedin.com/in/kanishkhan/"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="/assets/socials/linkedIn.svg"
                  alt="LinkedIn"
                  className="w-12 h-12"
                />
              </a>
              <a
                href="https://github.com/kanishkhan"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="/assets/logos/github.svg"
                  alt="GitHub"
                  className="w-12 h-12 invert"
                />
              </a>
              <a
                href="https://leetcode.com/kanishkhan"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="/assets/logos/leetcode.svg"
                  alt="LeetCode"
                  className="w-12 h-12"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Kanishkhan
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
          <motion.p
            className="mt-6 text-2xl font-normal text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
          >
            Pre-Final Year CSE Student
          </motion.p>
          <div className="flex flex-col items-center gap-8 mt-10">
            <motion.div
              className="flex flex-col w-full gap-4"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 2.4 }}
            >
              <a
                href="/assets/KANISHKHANRESUME.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full px-6 py-3 text-lg font-semibold text-center text-black bg-white rounded-full"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="w-full px-6 py-3 text-lg font-semibold text-center text-white border-2 border-white/20 rounded-full bg-white/5"
              >
                Contact Info
              </a>
            </motion.div>
            <motion.div
              className="flex justify-center gap-12"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 2.7 }}
            >
              <a
                href="https://www.linkedin.com/in/kanishkhan/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/socials/linkedIn.svg"
                  alt="LinkedIn"
                  className="w-12 h-12"
                />
              </a>
              <a
                href="https://github.com/kanishkhan"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/logos/github.svg"
                  alt="GitHub"
                  className="w-12 h-12 invert"
                />
              </a>
              <a
                href="https://leetcode.com/kanishkhan"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/logos/leetcode.svg"
                  alt="LeetCode"
                  className="w-12 h-12"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
