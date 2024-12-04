"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Strings } from "@/constants/strings";

const initiatives = [
  {
    title: "Emergency Shelter Program",
    description:
      "Providing immediate shelter and basic necessities to those in crisis.",
    image: "./initiative1.avif",
  },
  {
    title: "Youth Education Support",
    description:
      "Ensuring every child has access to quality education and resources.",
    image: "./initiative2.avif",
  },
  {
    title: "Job Training & Placement",
    description:
      "Empowering individuals with skills and opportunities for employment.",
    image: "./initiative3.avif",
  },
];

const Initiatives = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Initiatives
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories of hope, resilience, and transformation from our
            community.
          </p> */}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <Button
                  asChild
                  className="w-full bg-rose-500 hover:bg-rose-600"
                >
                  <Link href={Strings.DONATE_LINK}>
                    Support This Initiative
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;