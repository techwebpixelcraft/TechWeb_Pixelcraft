import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }

    function onDocPointerDown(e) {
      const target = e.target;
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDocPointerDown, {
      passive: true,
    });

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDocPointerDown);
    };
  }, [open]);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navClass = ({ isActive }) =>
    `transition-colors duration-150 ${
      isActive
        ? "text-teal-600 font-semibold"
        : "text-slate-700 hover:text-teal-700"
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Homepage"
            onClick={handleHomeClick}
          >
            <img
              src="/images/TechWeb_Pixelcraft_logo.jpg"
              alt="TechWeb PixelCraft"
              className="h-9 sm:h-10 md:h-12 object-contain"
            />
          </Link>

          {/* desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6 text-sm"
            role="navigation"
            aria-label="Main navigation"
          >
            <NavLink to="/" className={navClass} end onClick={handleHomeClick}>
              Home
            </NavLink>
            <NavLink to="/templates" className={navClass}>
              Templates
            </NavLink>
            <NavLink to="/services" className={navClass}>
              Services
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>

            <Link
              to="/get-quote"
              className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-teal-600 text-white text-sm shadow-sm hover:bg-teal-700 transition"
            >
              Get Quote
            </Link>
          </nav>

          {/* mobile - home, email + toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Home Icon */}
            <NavLink
              to="/"
              className="p-2 rounded-full text-teal-600 hover:bg-teal-50 transition"
              aria-label="Home"
              onClick={handleHomeClick}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </NavLink>

            {/* Email Icon */}
            <a
              href="mailto:techwebpixelcraft@gmail.com"
              className="p-2 rounded-full text-teal-600 hover:bg-teal-50 transition"
              aria-label="Email us"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>

            {/* Hamburger Toggle */}
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((prev) => !prev)}
              className="p-2 rounded-md inline-flex items-center justify-center text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu (slide down) */}
      <div
        ref={menuRef}
        className={`md:hidden transform origin-top transition-all duration-300 ease-in-out ${
          open
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden border-t bg-white`}
        aria-hidden={!open}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          <NavLink
            to="/"
            onClick={(e) => {
              setOpen(false);
              handleHomeClick(e);
            }}
            className="block text-slate-800 py-2 rounded-md hover:bg-slate-50"
          >
            Home
          </NavLink>
          <NavLink
            to="/templates"
            onClick={() => setOpen(false)}
            className="block text-slate-800 py-2 rounded-md hover:bg-slate-50"
          >
            Templates
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setOpen(false)}
            className="block text-slate-800 py-2 rounded-md hover:bg-slate-50"
          >
            Services
          </NavLink>
          <NavLink
            to="/work"
            onClick={() => setOpen(false)}
            className="block text-slate-800 py-2 rounded-md hover:bg-slate-50"
          >
            Our Work
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="block text-slate-800 py-2 rounded-md hover:bg-slate-50"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-slate-800 py-2 rounded-md hover:bg-slate-50"
          >
            Contact
          </NavLink>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-teal-600 text-white font-semibold shadow-sm hover:bg-teal-700"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
