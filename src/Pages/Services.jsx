// Services.jsx
import React, { useEffect } from "react";
import Container from "../Components/ui/Container";
import { Instagram } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

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
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  };

  const card = {
    hidden: { opacity: 0, y: 8, scale: 0.995 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.36, ease: "easeOut" },
    },
    hover: {
      y: -6,
      scale: 1.01,
      boxShadow: "0px 14px 30px rgba(2,6,23,0.08)",
      transition: { duration: 0.18 },
    },
  };

  const cta = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.02 },
  };

  return (
    <Container className="py-14">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.div
          className="max-w-2xl mb-12"
          variants={card}
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold mb-4 text-slate-900">
            Our Services
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Comprehensive design & development services to help your business
            stand out in the digital landscape and make a powerful impact both
            online and offline.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={container}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col"
              variants={card}
              whileHover="hover"
              data-aos="fade-up"
              data-aos-delay={40 + i * 40}
            >
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                {s.title}
              </h3>
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
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl p-8 text-center text-white shadow-xl"
          variants={cta}
          data-aos="fade-up"
          data-aos-delay="200"
          whileHover="hover"
        >
          <motion.div
            className="flex justify-center mb-4"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Instagram size={48} className="animate-pulse" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Follow Us on Instagram</h2>
          <p className="text-white/90 mb-6 max-w-md mx-auto">
            Get daily design inspiration, behind-the-scenes content, and stay
            updated with our latest projects!
          </p>
          <motion.a
            href="https://www.instagram.com/techweb_pixelcraft/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ duration: 0.18 }}
          >
            <Instagram size={20} />
            @techweb_pixelcraft
          </motion.a>
        </motion.div>
      </motion.div>
    </Container>
  );
}
