"use client";

import { Strings } from "@/constants/strings";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function OurStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="">
      <section className="relative h-[60vh] bg-black">
        <Image
          src="./initiative1.avif"
          alt="Our Story"
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
            Our Story
          </motion.h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-bold text-xl md:text-3xl mb-2">
              Our Beginning
            </h2>
            <p className="mb-4 text-base md:text-lg">
              Founded in Aug 2024, {Strings.ORGANIZATION_NAME} began with a
              simple mission: to provide shelter and support to those who needed
              it most. What started as a small initiative has grown into a
              comprehensive support system for homeless children and hardworking
              individuals facing difficult times.
            </p>

            <h2 className="font-bold text-xl md:text-3xl mb-2">Our Mission</h2>
            <p className="mb-4 text-base md:text-lg">
              We believe that everyone deserves a chance at a better life. Our
              mission is to provide not just shelter, but hope, education, and
              opportunities for those in need to rebuild their lives and achieve
              their dreams.
            </p>

            <h2 className="font-bold text-xl md:text-3xl mb-2">Our Impact</h2>
            <p className=" text-base md:text-lg">
              Over the years, we&apos;ve helped thousands of individuals and
              families find their path to stability and success. Through our
              various programs and initiatives, we&apos;ve created lasting
              change in our community and continue to expand our reach to help
              more people in need.
            </p>

            <blockquote className="p-4 my-4 border-s-4 border-rose-500 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;Hope is the foundation upon which dreams are built. At{" "}
                {Strings.ORGANIZATION_NAME}, we provide that foundation.&quot;
              </p>
            </blockquote>

            <h2 className="font-bold text-xl md:text-3xl mb-2">
              Looking Forward
            </h2>
            <p className="mb-4 text-base md:text-lg">
              As we continue to grow, our commitment to serving our community
              remains unchanged. We&apos;re constantly developing new programs
              and partnerships to better serve those in need and create more
              opportunities for positive change.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
