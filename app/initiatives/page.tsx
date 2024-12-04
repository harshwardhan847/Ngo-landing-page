"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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

export default function Initiatives() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="">
      <section className="relative h-[50vh] bg-black">
        <Image
          src="./initiatives.avif"
          alt="Our Initiatives"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white text-center"
          >
            Our Initiatives
          </motion.h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </main>
  );
}
