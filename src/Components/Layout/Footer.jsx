import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* GRID — centered on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src="/images/TechWeb_Pixelcraft_logo.jpg"
                alt="TechWeb PixelCraft"
                className="h-10 object-contain"
              />
              <div className="text-left">
                <div className="font-semibold">TechWeb PixelCraft</div>
                <div className="text-slate-500 text-sm">
                  IT • Graphics • Websites
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 max-w-sm mx-auto md:mx-0">
              We design and build templates & websites that help brands stand
              out. Fast turnarounds and pixel-perfect craftsmanship.
            </p>

            {/* SOCIALS */}
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-slate-500 hover:text-teal-600">
                Instagram
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-600">
                Facebook
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-600">
                LinkedIn
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-3">Quick links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link
                to="/templates"
                className="text-slate-600 hover:text-teal-600"
              >
                Templates
              </Link>
              <Link
                to="/services"
                className="text-slate-600 hover:text-teal-600"
              >
                Services
              </Link>
              <Link to="/work" className="text-slate-600 hover:text-teal-600">
                Our Work
              </Link>
              <Link to="/about" className="text-slate-600 hover:text-teal-600">
                About
              </Link>
              <Link
                to="/contact"
                className="text-slate-600 hover:text-teal-600"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="text-sm text-slate-600">
              <div>
                WhatsApp:{" "}
                <a href="tel:+919999999999" className="text-slate-800">
                  +91 99999 99999
                </a>
              </div>
              <div className="mt-2">
                Email:{" "}
                <a
                  href="mailto:hello@techwebpixelcraft.com"
                  className="text-slate-800"
                >
                  hello@techwebpixelcraft.com
                </a>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-600 text-white text-sm hover:bg-teal-700"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t pt-6 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} TechWeb PixelCraft — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
