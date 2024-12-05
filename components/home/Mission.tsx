"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
type Props = {};

const Mission = (props: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section className="py-24 text-white bg-gradient-to-br from-rose-500 to-rose-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories of hope, resilience, and transformation from our
            community.
          </p> */}
        </motion.div>

        <div className="w-full md:text-center font-light text-justify">
          At MUSKURAHAT FOUNDATION, our mission is to provide safe and
          supportive shelters for homeless children and hardworking individuals
          who lack a place to stay at night. We are committed to not only
          offering a roof over their heads but also empowering them through
          education in essential life skills, financial literacy, and health
          awareness. We believe in fostering independence and self-reliance,
          enabling individuals to break free from dependency and build a better
          future for themselves, their families, and the nation. Our goal is to
          create a community where everyone has the opportunity to learn, grow,
          and achieve success, turning challenges into stepping stones toward a
          brighter, more fulfilling life.
        </div>
      </div>
    </section>
  );
};

export default Mission;
