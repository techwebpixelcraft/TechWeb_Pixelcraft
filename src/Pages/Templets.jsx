// Templates.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionContainer from "../Components/Common/SectionContainer";
import Heading from "../Components/Common/Heading";
import PrimaryButton from "../Components/Common/PrimaryButton";

export default function Templates() {
  const [previewImg, setPreviewImg] = useState(null); // { src, alt, desc }
  const modalInnerRef = useRef(null);
  const closeBtnRef = useRef(null);

  // sample templates list (use files you uploaded to workspace)
  const templates = [
    {
      src: "/images/khodal_info_logo.jpg",
      alt: "Khodal Info Logo",
      desc: "Khodal Info — official logo used on visiting cards and banners.",
    },
    {
      src: "/images/TechWeb_Pixelcraft_logo.jpg",
      alt: "TechWeb PixelCraft Logo",
      desc: "TechWeb PixelCraft — primary brand logo for digital and print.",
    },
    {
      src: "/images/khodal_info.jpg",
      alt: "Khodal Info Poster",
      desc: "Khodal Info — service flyer showing Aadhaar & PAN services.",
    },
    {
      src: "/images/TechWeb_Pixelcraft_introduce.jpg",
      alt: "TechWeb PixelCraft Intro",
      desc: "Intro visual for TechWeb PixelCraft brand presentation.",
    },
    {
      src: "/images/khodal_info_visting.jpg",
      alt: "Khodal Info Visiting Card",
      desc: "Visiting card layout for Khodal Info with contact details.",
    },
  ];

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setPreviewImg(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // lock body scroll while modal open and focus close btn
  useEffect(() => {
    if (previewImg) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [previewImg]);

  return (
    <main className="min-h-screen">
      {/* HERO / page header */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <SectionContainer className="py-8 lg:py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
                Templates
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
                Browse editable, modern and business-ready templates. Tap an
                image to preview details.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <PrimaryButton
                as={Link}
                to="/"
                variant="ghost"
                className="text-sm"
              >
                ← Back to Home
              </PrimaryButton>
              <PrimaryButton
                as={Link}
                to="/contact"
                variant="primary"
                className="text-sm"
              >
                Contact
              </PrimaryButton>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* TEMPLATES GRID */}
      <section id="templates" className="py-10 bg-slate-50">
        <SectionContainer>
          {/* modal */}
          {previewImg && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setPreviewImg(null)}
              aria-hidden="false"
            >
              <div
                className="relative bg-white rounded-lg max-w-4xl w-full shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                ref={modalInnerRef}
                role="dialog"
                aria-modal="true"
                aria-label={previewImg.alt || "Image preview"}
              >
                <button
                  type="button"
                  onClick={() => setPreviewImg(null)}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-teal-300"
                  aria-label="Close preview"
                  ref={closeBtnRef}
                >
                  ✕
                </button>

                <div className="w-full bg-slate-100 flex items-center justify-center p-4">
                  <img
                    src={previewImg.src}
                    alt={previewImg.alt || "Preview"}
                    className="w-full h-auto object-contain max-h-[75vh]"
                    loading="eager"
                  />
                </div>

                {previewImg.desc && (
                  <div className="p-4 border-t">
                    <p className="text-sm text-slate-700">{previewImg.desc}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* grid header */}
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="w-full sm:w-auto">
              <Heading
                title="Premium Templates Crafted for Business Growth"
                subtitle="Editable, modern and business-ready templates that save you time."
              />
            </div>

            <div className="w-full sm:w-auto">
              <PrimaryButton
                as={Link}
                to="/contact"
                variant="outline"
                className="w-full sm:inline-flex justify-center sm:w-auto text-sm"
              >
                Hire us / Customize
              </PrimaryButton>
            </div>
          </div>

          {/* <-- FORCE 2 COLUMNS HERE: always show 2 images per row --> */}
          <div className="grid grid-cols-2 gap-6">
            {templates.map((item, i) => (
              <article
                key={i}
                className="bg-white rounded-xl overflow-hidden card-shadow transform hover:-translate-y-1 transition"
              >
                {/* image (clickable & keyboard accessible) */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setPreviewImg(item)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setPreviewImg(item);
                    }
                  }}
                  aria-label={`Open preview for ${item.alt}`}
                  className="w-full aspect-[4/3] bg-gradient-to-tr from-brand-50 to-white flex items-center justify-center overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center"
                    draggable="false"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 flex flex-col items-start sm:items-center gap-2">
                  <p
                    className="text-sm text-slate-600 w-full text-left sm:text-center overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>
    </main>
  );
}
