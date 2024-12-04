"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Wallet } from "lucide-react";
import { Strings } from "@/constants/strings";
import Link from "next/link";

const donationOptions = [
  { amount: 25, label: "Provide meals for a week" },
  { amount: 50, label: "Support education supplies" },
  { amount: 100, label: "Sponsor shelter for a month" },
  { amount: 250, label: "Fund job training program" },
];

export default function Donate() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <Heart className="h-16 w-16 text-rose-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Make a Difference Today
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Your donation helps us provide shelter, education, and support to
            those in need.
          </p>
        </motion.div>

        {/* <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="grid grid-cols-2 gap-4 mb-8">
            {donationOptions.map((option) => (
              <button
                key={option.amount}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-rose-500 hover:bg-rose-50 transition-colors"
              >
                <div className="text-2xl font-bold text-gray-900">
                  ${option.amount}
                </div>
                <div className="text-gray-600">{option.label}</div>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="number"
                placeholder="Custom Amount"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <span className="text-gray-600">USD</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button className="w-full bg-rose-500 hover:bg-rose-600">
                <CreditCard className="mr-2 h-4 w-4" /> Credit Card
              </Button>
              <Button className="w-full bg-rose-500 hover:bg-rose-600">
                <Wallet className="mr-2 h-4 w-4" /> PayPal
              </Button>
            </div>
          </div>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-rose-500 hover:bg-rose-600 text-white"
          >
            <Link href={Strings.DONATE_LINK}>Donate</Link>
          </Button>
        </motion.div>

        <div className="mt-12 text-center text-gray-600">
          {/* <p className="mb-4">
            Your donation is tax-deductible. You will receive a receipt for your
            records.
          </p> */}
          <p className=" mb-2">
            For questions about donations, please contact us at{" "}
            <a
              href={`mailto:${Strings.ORGANIZATION_EMAIL}`}
              className="text-rose-500 hover:text-rose-600"
            >
              {Strings.ORGANIZATION_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
