"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Loader, Mail, MapPin, Phone } from "lucide-react";
import { Strings } from "@/constants/strings";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formDataObject,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          event.currentTarget?.reset();
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Something went wrong!");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:mt-12">
            Volunteer With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto md:mb-8">
            Be a part of our noble cause by being the volunteers of our
            foundation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1  gap-12 mb-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4">
                Volunteer Registration
              </h2>
              <form
                className="space-y-6"
                id="volunteer_form"
                onSubmit={handleFormSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                  <div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 mb-2"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 mb-2"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 mb-2"
                        placeholder="Your message"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact No.
                      </label>
                      <input
                        type="tel"
                        name="mobile_no"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 mb-2"
                        placeholder="your mobile number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="occupation"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 mb-2"
                        placeholder="your occupation"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        name="city"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 mb-2"
                        placeholder="Your city"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Work Preference
                      </label>
                      <div className="flex items-center justify-center space-x-4 w-min">
                        <input
                          name="work_preference"
                          type="radio"
                          required
                          value={"Home"}
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-full"
                        />
                        <p>Home</p>
                        <input
                          name="work_preference"
                          type="radio"
                          value={"Location"}
                          required
                          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-full"
                        />
                        <p>Location</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  disabled={isLoading}
                  className="w-min bg-rose-500 hover:bg-rose-600"
                >
                  {isLoading && <Loader className="animate-spin" />}
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
