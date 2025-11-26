import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionContainer from "../Components/Common/SectionContainer";
import Heading from "../Components/Common/Heading";
import PrimaryButton from "../Components/Common/PrimaryButton";

export default function Home() {
  const [previewImg, setPreviewImg] = useState(null);
  const modalInnerRef = useRef(null);

  // close modal on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setPreviewImg(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <SectionContainer className="py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-sm font-medium">
                Design • Digital Identity • Web
              </div>
              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                We Don’t Just Design Brands — We Shape Their Digital Identity
              </h1>
              <p className="mt-5 text-slate-600 max-w-xl">
                TechWeb PixelCraft blends strategic design with clean
                development to deliver brand systems, templates, and websites
                that convert.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton
                  as={Link}
                  to="/templates"
                  variant="primary"
                  size="lg"
                >
                  Explore Designs
                </PrimaryButton>

                <PrimaryButton
                  as={Link}
                  to="/contact"
                  variant="outline"
                  size="lg"
                >
                  Start My Brand Journey
                </PrimaryButton>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center card-shadow">
                    <svg
                      className="w-4 h-4 text-brand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l2 2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Fast delivery</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center card-shadow">
                    <svg
                      className="w-4 h-4 text-brand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 7l10 10M7 17V7h10"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 7h7v7"
                        opacity="0.0"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Pixel-perfect</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center card-shadow">
                    <svg
                      className="w-4 h-4 text-brand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Editable sources</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center card-shadow">
                    <svg
                      className="w-4 h-4 text-brand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden
                    >
                      <rect
                        x="7"
                        y="3"
                        width="10"
                        height="14"
                        rx="2"
                        ry="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 18h2"
                      />
                      <rect x="3" y="19" width="18" height="2" rx="1" ry="1" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Responsive-first</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="bg-white rounded-2xl p-6 card-shadow max-w-md mx-auto">
                <img
                  src="/images/TechWeb_Pixelcraft_logo.jpg"
                  alt="TechWeb PixelCraft logo"
                  className="w-full h-auto object-contain"
                  draggable="false"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Branding & Web Kits</h3>
                  <p className="text-sm text-slate-600 mt-2">
                    Starter packs for businesses — logo, card, social & ready
                    site templates.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <PrimaryButton
                      as={Link}
                      to="/templates"
                      variant="ghost"
                      size="md"
                    >
                      See samples
                    </PrimaryButton>

                    <PrimaryButton
                      as={Link}
                      to="/contact"
                      variant="ghost"
                      size="md"
                    >
                      Contact
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-14">
        <SectionContainer>
          <Heading
            title="Complete Creative & Digital Solutions"
            subtitle="From identity systems to responsive websites — everything under one roof."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="bg-white rounded-xl p-6 card-shadow">
              <h4 className="font-semibold">Brand Identity</h4>
              <p className="mt-2 text-sm text-slate-600">
                Strategy-led logos and cohesive identity systems that
                communicate your values.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 card-shadow">
              <h4 className="font-semibold">Web Experience</h4>
              <p className="mt-2 text-sm text-slate-600">
                Conversion-oriented, responsive websites built with clean code
                and clear UX.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 card-shadow">
              <h4 className="font-semibold">Print & Social Creatives</h4>
              <p className="mt-2 text-sm text-slate-600">
                Visiting cards, brochures, social packs — ready to publish and
                share.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 card-shadow">
              <h4 className="font-semibold">Template Packs</h4>
              <p className="mt-2 text-sm text-slate-600">
                Premium, editable templates for fast deployment and consistent
                branding.
              </p>
            </article>
          </div>
        </SectionContainer>
      </section>

      {/* TEMPLATES (with click-to-preview + descriptions) */}
      <section id="templates" className="py-14 bg-slate-50">
        <SectionContainer>
          {/* IMAGE PREVIEW MODAL */}
          {previewImg && (
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setPreviewImg(null)}
            >
              <div
                className="relative bg-white rounded-lg max-w-3xl w-full shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                ref={modalInnerRef}
              >
                <button
                  type="button"
                  onClick={() => setPreviewImg(null)}
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                  aria-label="Close preview"
                >
                  ✕
                </button>

                <img
                  src={previewImg.src}
                  alt={previewImg.alt || "Preview"}
                  className="w-full h-auto object-contain max-h-[70vh]"
                />

                {/* description inside modal */}
                {previewImg.desc && (
                  <div className="p-4 border-t">
                    <p className="text-sm text-slate-700">{previewImg.desc}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Heading + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="w-full sm:w-auto">
              <Heading
                title="Premium Templates Crafted for Business Growth"
                subtitle="Editable, modern and business-ready templates that save you time."
              />
            </div>

            <div className="w-full sm:w-auto">
              <PrimaryButton
                as={Link}
                to="/templates"
                variant="ghost"
                className="w-full sm:inline-flex justify-center sm:w-auto text-sm"
              >
                Browse all →
              </PrimaryButton>
            </div>
          </div>

          {/* PREVIEW GRID: 2 cols on mobile, 2 on sm, 3 on md, 4 on lg */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
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
            ].map((item, i) => (
              <article
                key={i}
                className="bg-white rounded-xl overflow-hidden card-shadow transform hover:-translate-y-1 transition"
              >
                {/* Make the image itself clickable to open the modal */}
                <div
                  className="w-full h-48 bg-gradient-to-tr from-brand-50 to-white flex items-center justify-center overflow-hidden cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => setPreviewImg(item)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setPreviewImg(item);
                    }
                  }}
                  aria-label={`Open preview for template ${i + 1}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center"
                    draggable="false"
                  />
                </div>

                {/* stacked footer: title on top, description below */}
                <div className="p-4 flex flex-col items-start sm:items-center gap-2">
                  <p className="text-sm text-slate-600 w-full text-left sm:text-center">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-14">
        <SectionContainer>
          <Heading
            title="Why Brands Trust TechWeb PixelCraft"
            subtitle="A mix of design thinking, technical craft, and client-first delivery."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h4 className="font-semibold">Design That Feels Personal</h4>
              <p className="mt-2 text-sm text-slate-600">
                We design with your audience in mind — not just aesthetics.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h4 className="font-semibold">Technology That Works</h4>
              <p className="mt-2 text-sm text-slate-600">
                Fast-loading, maintainable sites built using modern tools.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h4 className="font-semibold">Premium Quality, Zero Hassle</h4>
              <p className="mt-2 text-sm text-slate-600">
                Clear process, clear timelines and agency-level quality.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h4 className="font-semibold">End-to-End Partner</h4>
              <p className="mt-2 text-sm text-slate-600">
                From concept to delivery and small updates — we stay with you.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="py-14 bg-slate-50">
        <SectionContainer>
          <Heading
            title="A Process Designed for Clarity & Speed"
            subtitle="Simple steps from idea to delivered brand assets."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center card-shadow">
              <div className="text-xl font-bold">1</div>
              <h4 className="mt-3 font-semibold">Discover</h4>
              <p className="mt-2 text-sm text-slate-600">
                We learn your goals, audience and brand personality.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center card-shadow">
              <div className="text-xl font-bold">2</div>
              <h4 className="mt-3 font-semibold">Design</h4>
              <p className="mt-2 text-sm text-slate-600">
                Concepts & drafts with clear rationale and visual options.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center card-shadow">
              <div className="text-xl font-bold">3</div>
              <h4 className="mt-3 font-semibold">Refine</h4>
              <p className="mt-2 text-sm text-slate-600">
                Feedback rounds and polishing until it’s right.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center card-shadow">
              <div className="text-xl font-bold">4</div>
              <h4 className="mt-3 font-semibold">Deliver</h4>
              <p className="mt-2 text-sm text-slate-600">
                Final assets in all formats + support after delivery.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* CONTACT BOX */}
      <section id="contact" className="py-14">
        <SectionContainer>
          <div className="bg-gradient-to-tr from-brand-50 to-white rounded-xl p-8 lg:p-12 card-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold">
                  Let’s Build Something Your Customers Will Remember
                </h3>
                <p className="mt-3 text-slate-600">
                  Quick quotes, clear timelines and friendly support. Tell us
                  what you need and we’ll reply fast.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PrimaryButton as={Link} to="/contact" variant="primary">
                    Start Your Project
                  </PrimaryButton>
                  <PrimaryButton
                    as="a"
                    href="mailto:hello@techwebpixelcraft.com"
                    variant="outline"
                  >
                    Email Us
                  </PrimaryButton>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
                  <div>
                    📞 WhatsApp:{" "}
                    <a className="text-slate-800" href="tel:+919999999999">
                      +91 99999 99999
                    </a>
                  </div>
                  <div>✉️ hello@techwebpixelcraft.com</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thanks — we will contact you!");
                  }}
                >
                  <label className="block text-sm">Name</label>
                  <input
                    className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
                    required
                  />
                  <label className="block text-sm mt-3">Email</label>
                  <input
                    className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
                    type="email"
                    required
                  />
                  <label className="block text-sm mt-3">Message</label>
                  <textarea
                    className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
                    rows="4"
                    required
                  />
                  <PrimaryButton
                    className="mt-4 w-full"
                    variant="primary"
                    size="md"
                    type="submit"
                  >
                    Send Message
                  </PrimaryButton>
                </form>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
