"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home, Users, Heart } from "lucide-react";

const stats = [
  {
    icon: Home,
    value: "50+",
    label: "Live Impacted",
    description: "Provided safe housing to those in need",
  },
  {
    icon: Heart,
    value: "2",
    label: "Active Projects",
    description: "Given education and care",
  },
  {
    icon: Users,
    value: "5",
    label: "Volunteers",
    description: "Dedicated to making a difference",
  },
];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-br from-rose-500 to-rose-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-rose-50"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-rose-500" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              {/* <div className="text-gray-600">{stat.description}</div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
