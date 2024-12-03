"use client";

import { Heart, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-bold">HopeHaven</span>
            </div>
            <p className="text-gray-400">
              Providing shelter and hope to those in need, building a better future together.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-story" className="text-gray-400 hover:text-rose-400">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-gray-400 hover:text-rose-400">
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-rose-400">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-rose-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-rose-500" />
                <span className="text-gray-400">123 Hope Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-rose-500" />
                <span className="text-gray-400">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-rose-500" />
                <span className="text-gray-400">contact@hopehaven.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-rose-500 focus:outline-none"
              />
              <button className="w-full px-4 py-2 bg-rose-500 hover:bg-rose-600 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} HopeHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;