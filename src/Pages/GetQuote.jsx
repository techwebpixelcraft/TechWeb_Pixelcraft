import React, { useEffect, useState } from "react";
import Container from "../Components/ui/Container";
import PrimaryButton from "../Components/Common/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function GetQuote() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Logo & Branding",
    details: "",
  });

  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});

  const SERVICES = [
    "Logo & Branding",
    "Website Design",
    "Social Media Creatives",
    "Visiting Card + Print",
    "Brochure / Company Profile",
    "UI/UX Design",
    "Custom Project",
  ];

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
    return () => {
      AOS.refreshHard();
    };
  }, []);

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.06, when: "beforeChildren" },
    },
  };

  const field = {
    hidden: { opacity: 0, y: 10, scale: 0.995 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.36, ease: "easeOut" },
    },
  };

  const btnHover = {
    hover: { y: -4, scale: 1.02 },
    tap: { scale: 0.985 },
  };

  function showToast(msg, type = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your name";
    if (!form.email.trim()) e.email = "Enter your email";
    if (!form.details.trim()) e.details = "Describe your project";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function sendEmail(e) {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Quote Request — ${form.service}`;
    const body = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || "-"}

Service Requested: ${form.service}

Project Details:
${form.details}

Page: ${window.location.href}
    `;

    window.open(
      `mailto:techwebpixelcraft@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );

    showToast("Email app opened — please send message.");
    // optional: clear form (commented to preserve user input after email open)
    // setForm({ name: "", email: "", phone: "", service: "Logo & Branding", details: "" });
  }

  function sendWhatsApp() {
    if (!form.details.trim()) {
      showToast("Add project details before sending.", "error");
      return;
    }

    const wa = "919924829289";
    const text = `
Quote Request: ${form.service}

Name: ${form.name || "-"}
Email: ${form.email || "-"}
Phone: ${form.phone || "-"}

Details:
${form.details}

Sent from: ${window.location.href}
`;

    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(text)}`);
  }

  return (
    <Container className="py-14">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
      >
        <motion.h1
          className="text-3xl font-bold text-slate-900"
          variants={field}
          data-aos="fade-up"
        >
          Get a Custom Quote
        </motion.h1>
        <motion.p
          className="mt-2 text-slate-600"
          variants={field}
          data-aos="fade-up"
          data-aos-delay="40"
        >
          Fill in a few details and we’ll send you a clear estimate within 24
          hours.
        </motion.p>

        <motion.div
          className="mt-8 bg-white rounded-2xl shadow-sm p-6 md:p-8"
          variants={field}
          data-aos="fade-up"
          data-aos-delay="80"
        >
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={sendEmail}
          >
            {/* Name */}
            <motion.div variants={field}>
              <label className="text-sm font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`mt-1 w-full border rounded-md px-3 py-2 text-sm ${
                  errors.name ? "border-red-400" : "border-slate-300"
                }`}
                placeholder="Your full name"
                data-aos="fade-up"
                data-aos-delay="100"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={field}>
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-1 w-full border rounded-md px-3 py-2 text-sm ${
                  errors.email ? "border-red-400" : "border-slate-300"
                }`}
                placeholder="you@example.com"
                data-aos="fade-up"
                data-aos-delay="120"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* Phone */}
            <motion.div variants={field}>
              <label className="text-sm font-medium">Phone (optional)</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm border-slate-300"
                placeholder="+91 9xxxxxxxxx"
                data-aos="fade-up"
                data-aos-delay="140"
              />
            </motion.div>

            {/* Service */}
            <motion.div variants={field}>
              <label className="text-sm font-medium">Service Needed</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm bg-white border-slate-300"
                data-aos="fade-up"
                data-aos-delay="160"
              >
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </motion.div>

            {/* Details */}
            <motion.div className="md:col-span-2" variants={field}>
              <label className="text-sm font-medium">Project Details</label>
              <textarea
                name="details"
                rows={6}
                value={form.details}
                onChange={handleChange}
                className={`mt-1 w-full border rounded-md px-3 py-2 text-sm ${
                  errors.details ? "border-red-400" : "border-slate-300"
                }`}
                placeholder="Describe your project, goals, timeline or any references..."
                data-aos="fade-up"
                data-aos-delay="180"
              />
              {errors.details && (
                <p className="text-xs text-red-500 mt-1">{errors.details}</p>
              )}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="md:col-span-2 flex flex-col sm:flex-row items-center gap-3 mt-4"
              variants={field}
            >
              <motion.div whileHover="hover" whileTap="tap" variants={btnHover}>
                <PrimaryButton
                  type="submit"
                  className="w-full sm:w-auto px-5"
                  variant="primary"
                >
                  Send Quote Request
                </PrimaryButton>
              </motion.div>

              <motion.button
                type="button"
                onClick={sendWhatsApp}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 text-sm border rounded-md hover:bg-slate-50"
                whileHover="hover"
                whileTap="tap"
                variants={btnHover}
              >
                <svg
                  viewBox="0 0 32 32"
                  className="w-4 h-4 text-green-600"
                  fill="currentColor"
                >
                  <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.624.84 5.055 2.268 7.038L4 29l7.202-2.216A12.98 12.98 0 0 0 16.001 27C22.627 27 28 21.627 28 15S22.627 3 16.001 3zm5.94 18.668c-.25.703-1.457 1.348-2.01 1.396-.553.049-.557.45-3.519-.931-2.963-1.382-4.85-4.77-5.004-4.99-.153-.22-1.195-1.623-1.195-3.093 0-1.47.767-2.19 1.04-2.49.273-.3.6-.372.8-.372.2 0 .4 0 .576.01.188.007.431-.07.675.515.25.603.852 2.087.927 2.239.076.153.127.332.024.532-.102.2-.153.332-.305.515-.153.183-.32.41-.453.55-.152.162-.31.338-.133.662.177.323.789 1.302 1.693 2.107 1.163 1.045 2.144 1.37 2.468 1.523.324.153.514.127.7-.076.187-.203.801-.933 1.015-1.253.214-.32.428-.27.724-.162.296.106 1.872.884 2.193 1.045.321.162.535.24.613.372.077.132.077.703-.173 1.405z" />
                </svg>
                WhatsApp
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Toast */}
        {toast && (
          <div
            className={`fixed bottom-6 right-6 px-4 py-2 rounded-md shadow text-sm ${
              toast.type === "error"
                ? "bg-red-50 text-red-700"
                : "bg-green-50 text-green-700"
            }`}
          >
            {toast.msg}
          </div>
        )}
      </motion.div>
    </Container>
  );
}
