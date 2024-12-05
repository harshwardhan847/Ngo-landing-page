"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Strings } from "@/constants/strings";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 to-white">
      <div className="absolute inset-0">
        <div
          className="absolute bg-cover inset-0  bg-top"
          style={{
            // backgroundImage: "url('./header.avif')",
            backgroundImage: "url('./hero.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white md:!leading-[4.5rem]">
            Spreading Smiles,
            <span className="block text-rose-400"> Building Futures</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto text-center">
            Empowering lives with shelter, care, and education,
            <br /> one smile at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white"
            >
              <Link href={Strings.DONATE_LINK}>Donate Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
            >
              <Link href="/our-story">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
