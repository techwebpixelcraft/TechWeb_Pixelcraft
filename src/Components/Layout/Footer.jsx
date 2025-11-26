import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* GRID — stacks on mobile, 3 columns from md */}
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

            {/* SOCIAL ICONS (Instagram + Facebook) */}
            <div className="flex justify-center md:justify-start gap-3 mt-1">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/techweb_pixelcraft/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TechWeb PixelCraft on Instagram (opens in new tab)"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-slate-700"
                  aria-hidden
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1BHcwTz994/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TechWeb PixelCraft on Facebook (opens in new tab)"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-slate-700"
                  aria-hidden
                >
                  <path
                    d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3v7.03C18.34 21.19 22 17.06 22 12.07z"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    fill="currentColor"
                  />
                </svg>
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
                <a href="tel:+919924846727" className="text-slate-800">
                  +91 99248 46727
                </a>
              </div>
              <div className="mt-2">
                Email:{" "}
                <a
                  href="mailto:techwebpixelcraft@gmail.com"
                  className="text-slate-800"
                >
                  techwebpixelcraft@gmail.com
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
