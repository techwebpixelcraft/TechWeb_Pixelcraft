import React, { useEffect } from "react";
import Container from "../Components/ui/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import PrimaryButton from "../Components/Common/PrimaryButton";
import { Link } from "react-router-dom";

export default function AboutGraphics() {
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  const subtle = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.45 } },
  };
  const hover = { whileHover: { scale: 1.02 }, whileTap: { scale: 0.995 } };

  return (
    <Container className="py-14">
      {/* Title */}
      <motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-2xl md:text-3xl font-bold mb-4"
      >
        Graphics & Brand Creative — TechWeb PixelCraft
      </motion.h1>

      {/* Intro */}
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={subtle}
        className="text-slate-600 max-w-3xl"
      >
        We design high-impact visual assets that work across digital and print.
        Logos, banners, festival campaigns, social packs and business
        collaterals — crafted to be memorable, editable and production-ready.
      </motion.p>

      {/* Main service grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.article
          {...hover}
          data-aos="fade-up"
          className="bg-white p-6 rounded-md shadow-sm"
        >
          <h3 className="font-semibold">Logo & Identity</h3>
          <p className="text-sm text-slate-600 mt-2">
            Custom logos, brand marks and identity systems with flexible
            variants (horizontal, stacked, icon-only) and full brand usage
            guidelines.
          </p>
          <ul className="mt-3 text-sm text-slate-600 space-y-1">
            <li>• Vector SVG / AI sources</li>
            <li>• Monochrome & colored versions</li>
            <li>• Brand usage guidelines</li>
          </ul>
        </motion.article>

        <motion.article
          {...hover}
          data-aos="fade-up"
          data-aos-delay="60"
          className="bg-white p-6 rounded-md shadow-sm"
        >
          <h3 className="font-semibold">Social Media Packs</h3>
          <p className="text-sm text-slate-600 mt-2">
            Ready-to-post templates for Instagram, Facebook, WhatsApp & stories
            — consistent templates to keep your feed on-brand.
          </p>
          <ul className="mt-3 text-sm text-slate-600 space-y-1">
            <li>• Editable Figma files</li>
            <li>• Square, portrait & story sizes</li>
            <li>• Caption + hashtag suggestions (optional)</li>
          </ul>
        </motion.article>

        <motion.article
          {...hover}
          data-aos="fade-up"
          data-aos-delay="120"
          className="bg-white p-6 rounded-md shadow-sm"
        >
          <h3 className="font-semibold">Banners & Campaigns</h3>
          <p className="text-sm text-slate-600 mt-2">
            Web banners, display ads and festival campaign visuals — designed
            for high CTR and visual clarity across platforms.
          </p>
          <ul className="mt-3 text-sm text-slate-600 space-y-1">
            <li>• Multi-size export (web & print)</li>
            <li>• A/B creative variants</li>
            <li>• Fast turnaround for seasonal campaigns</li>
          </ul>
        </motion.article>

        <motion.article
          {...hover}
          data-aos="fade-up"
          data-aos-delay="180"
          className="bg-white p-6 rounded-md shadow-sm"
        >
          <h3 className="font-semibold">Print Collateral</h3>
          <p className="text-sm text-slate-600 mt-2">
            Visiting cards, brochures, flyers and posters — print-ready files
            with bleed, CMYK exports and vendor-ready PDFs.
          </p>
          <ul className="mt-3 text-sm text-slate-600 space-y-1">
            <li>• Print-ready PDFs</li>
            <li>• Trim & bleed setup</li>
            <li>• Suggestions for paper & finish</li>
          </ul>
        </motion.article>

        <motion.article
          {...hover}
          data-aos="fade-up"
          data-aos-delay="240"
          className="bg-white p-6 rounded-md shadow-sm"
        >
          <h3 className="font-semibold">Festival & Campaign Creatives</h3>
          <p className="text-sm text-slate-600 mt-2">
            Seasonal visuals and promotional packs that capture the festival
            mood while staying on-brand — small campaigns to boost engagement.
          </p>
          <ul className="mt-3 text-sm text-slate-600 space-y-1">
            <li>• Festival banner sets</li>
            <li>• Themed social templates</li>
            <li>• Promotional posters and emails</li>
          </ul>
        </motion.article>

        <motion.article
          {...hover}
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white p-6 rounded-md shadow-sm"
        >
          <h3 className="font-semibold">Business Packs</h3>
          <p className="text-sm text-slate-600 mt-2">
            Complete business-ready kits: logo, visiting card, letterhead,
            social cover and a starter website hero — delivered as editable
            source files.
          </p>
          <ul className="mt-3 text-sm text-slate-600 space-y-1">
            <li>• Figma / AI source files</li>
            <li>• Ready-to-use exports (SVG/PNG/PDF)</li>
            <li>• Quick brand launch checklist</li>
          </ul>
        </motion.article>
      </div>

      {/* Process */}
      <div className="mt-10 bg-slate-50 p-6 rounded-lg">
        <motion.h4 data-aos="fade-up" className="text-lg font-semibold">
          Our Graphic Process
        </motion.h4>
        <motion.p
          data-aos="fade-up"
          data-aos-delay="40"
          className="text-sm text-slate-600 mt-2"
        >
          1) Brief → 2) Concepts → 3) Revisions → 4) Final delivery. We hand off
          editable sources and provide minor post-delivery tweaks.
        </motion.p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div
            data-aos="fade-up"
            className="bg-white p-4 rounded-md shadow-sm"
          >
            <div className="font-medium">Turnaround</div>
            <div className="text-sm text-slate-600 mt-1">
              Logos: 2–5 days • Social packs: 1–3 days
            </div>
          </motion.div>

          <motion.div
            data-aos="fade-up"
            data-aos-delay="60"
            className="bg-white p-4 rounded-md shadow-sm"
          >
            <div className="font-medium">Files</div>
            <div className="text-sm text-slate-600 mt-1">
              Figma / AI / SVG / PNG / PDF — sources included
            </div>
          </motion.div>

          <motion.div
            data-aos="fade-up"
            data-aos-delay="120"
            className="bg-white p-4 rounded-md shadow-sm"
          >
            <div className="font-medium">Revisions</div>
            <div className="text-sm text-slate-600 mt-1">
              2 rounds included — extra rounds available
            </div>
          </motion.div>
        </div>
      </div>

      {/* Showcase strip */}
      <div className="mt-10">
        <motion.h5
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-lg font-semibold mb-3"
        >
          Recent Graphics
        </motion.h5>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["/images/TechWeb_Pixelcraft_logo.jpg"].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              data-aos="zoom-in"
              data-aos-delay={i * 60}
              className="bg-white rounded-md overflow-hidden shadow-sm"
            >
              <img
                src={src}
                alt={`graphic-${i}`}
                className="w-full h-32 object-cover"
                draggable="false"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h4 className="text-lg font-semibold">Want a graphics pack?</h4>
          <p className="text-sm text-slate-600">
            Choose a package or request a custom quote — we’ll reply with a
            clear plan and timeline.
          </p>
        </motion.div>

        <div className="mt-4 sm:mt-0 sm:ml-auto flex gap-3">
          <PrimaryButton as={Link} to="/get-quote" variant="primary">
            Get Quote
          </PrimaryButton>
        </div>
      </div>
    </Container>
  );
}
