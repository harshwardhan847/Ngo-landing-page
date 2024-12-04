"use client";

import { Strings } from "@/constants/strings";
import {
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-bold">
                {Strings.ORGANIZATION_NAME}
              </span>
            </div>
            <p className="text-gray-400">
              Providing shelter and hope to those in need, building a better
              future together.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/our-story"
                  className="text-gray-400 hover:text-rose-400"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/initiatives"
                  className="text-gray-400 hover:text-rose-400"
                >
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-gray-400 hover:text-rose-400"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-rose-400"
                >
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
                <span className="text-gray-400">
                  123 Hope Street, City, Country
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-rose-500" />
                <span className="text-gray-400">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-rose-500" />
                <span className="text-gray-400">
                  {Strings.ORGANIZATION_EMAIL}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Instagram className="h-5 w-5 text-rose-500" />
                <Link
                  href={"/"}
                  className="text-gray-400 hover:text-rose-400 transition"
                >
                  @Muskurahat_NGO
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Facebook className="h-5 w-5 text-rose-500" />
                <Link
                  href={"/"}
                  className="text-gray-400 hover:text-rose-400 transition"
                >
                  Muskurahat.Foundation
                </Link>
              </li>

              <li className="flex items-center space-x-2">
                <Youtube className="h-5 w-5 text-rose-500" />
                <Link
                  href={"/"}
                  className="text-gray-400 hover:text-rose-400 transition"
                >
                  Muskurahat.Foundation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} {Strings.ORGANIZATION_NAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
