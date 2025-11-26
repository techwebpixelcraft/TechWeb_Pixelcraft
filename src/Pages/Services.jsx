import React from "react";
import Container from "../Components/ui/Container";
import { Instagram } from "lucide-react";

const services = [
  {
    title: "Logo & Branding",
    desc: "Craft a memorable brand identity with custom logo design, complete brand guidelines, professional visiting cards, and cohesive stationery that leaves a lasting impression.",
  },
  {
    title: "Website Design & Development",
    desc: "Build stunning, mobile-responsive websites using cutting-edge technologies like React, Next.js, and Tailwind CSS. From landing pages to full-scale web applications.",
  },
  {
    title: "Social Media Creatives",
    desc: "Engage your audience with eye-catching posts, stories, reels, and advertisement creatives optimized for Instagram, Facebook, LinkedIn, and other platforms.",
  },
  {
    title: "Print & Promotional Design",
    desc: "Create high-impact print materials including brochures, flyers, banners, posters, and promotional collateral that effectively communicate your brand message.",
  },
];

export default function Services() {
  return (
    <Container className="py-14">
      {/* Header Section */}
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Our Services</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Comprehensive design & development services to help your business
          stand out in the digital landscape and make a powerful impact both
          online and offline.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col"
          >
            <h3 className="font-bold text-lg text-slate-900 mb-3">{s.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {s.desc}
            </p>
            <div className="mt-auto">
              <a
                href="/contact"
                className="inline-flex items-center text-sm text-teal-700 font-semibold hover:text-teal-800 transition-colors"
              >
                Request Service →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram CTA Section */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl p-8 text-center text-white shadow-xl">
        <div className="flex justify-center mb-4">
          <Instagram size={48} className="animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Follow Us on Instagram</h2>
        <p className="text-white/90 mb-6 max-w-md mx-auto">
          Get daily design inspiration, behind-the-scenes content, and stay
          updated with our latest projects!
        </p>
        <a
          href="https://www.instagram.com/techweb_pixelcraft/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
        >
          <Instagram size={20} />
          @techweb_pixelcraft
        </a>
      </div>
    </Container>
  );
}
