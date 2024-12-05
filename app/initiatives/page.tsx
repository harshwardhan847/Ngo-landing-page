"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Strings } from "@/constants/strings";
import { initiatives } from "@/constants/initiatives";
import InitiativeCard from "@/components/InitiativeCard";

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
                className="bg-white rounded-lg overflow-hidden shadow-lg grid"
              >
                <InitiativeCard
                  key={initiative.title}
                  initiative={initiative}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
