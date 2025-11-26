import React, { useEffect, useState } from "react";
import Container from "../Components/ui/Container";
import PrimaryButton from "../Components/Common/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function ContactCreative() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
    // optional: refresh on route change or when content changes
    return () => {
      AOS.refreshHard();
    };
  }, []);

  // Framer Motion variants
  const containerVariant = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
        when: "beforeChildren",
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 12, scale: 0.995 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.42, ease: "easeOut" },
    },
  };

  const floatVariant = {
    hover: { y: -4, scale: 1.01, transition: { duration: 0.25 } },
    tap: { scale: 0.99 },
  };

  // Validation
  function validate() {
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name";
    if (!form.email.trim()) err.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Enter a valid email";
    if (!form.message.trim()) err.message = "Please write a short message";
    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function showToast({ type = "success", text }) {
    setToast({ type, text });
    setTimeout(() => setToast(null), 4500);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  // Email via mailto
  function openMailClient(e) {
    e.preventDefault();
    if (!validate()) return;

    const subject = `${form.subject} — TechWeb PixelCraft`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
      "",
      "Message:",
      form.message,
      "",
      `From Page: ${window.location.href}`,
    ].join("\n");

    const mailto = `mailto:techwebpixelcraft@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailto, "_blank");

    showToast({
      type: "success",
      text: "Email client opened — please send the message.",
    });

    setForm({
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
      phone: "",
    });

    setErrors({});
  }

  // WhatsApp full details share
  function sendWhatsApp() {
    if (!form.message.trim() && !form.name.trim() && !form.email.trim()) {
      showToast({
        type: "error",
        text: "Please fill your details before sending to WhatsApp.",
      });
      return;
    }

    const waNumber = "919924846727"; // your number without +
    const lines = [
      `New Lead: ${form.subject}`,
      `Website: ${window.location.href}`,
      "",
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Phone: ${form.phone || "-"}`,
      "",
      "Message:",
      form.message || "-",
      "",
      "— Sent via TechWeb PixelCraft Website",
    ];

    const encoded = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${waNumber}?text=${encoded}`;
    window.open(url, "_blank");
  }

  return (
    <Container className="py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SECTION */}
        <motion.div
          className="lg:col-span-1 flex flex-col justify-center gap-4"
          data-aos="fade-right"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-xl bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm transform-gpu">
            <h1 className="text-2xl font-bold leading-tight">Get in touch</h1>
            <p className="mt-2 text-slate-600">
              Quick quotes, friendly support and clear timelines. Select a
              subject, write a short brief and we’ll respond fast.
            </p>

            <div className="mt-4 grid gap-3">
              {/* WhatsApp */}
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <svg
                  className="w-6 h-6 text-teal-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M21 10v6a2 2 0 0 1-2 2H5l-2 2V6a2 2 0 0 1 2-2h11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-sm">
                  <div className="font-medium">WhatsApp</div>
                  <a className="text-slate-700 block" href="tel:+919924846727">
                    +91 99248 46727
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
              >
                <svg
                  className="w-6 h-6 text-teal-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-sm">
                  <div className="font-medium">Email</div>
                  <a
                    className="text-slate-700 block"
                    href="mailto:techwebpixelcraft@gmail.com"
                  >
                    techwebpixelcraft@gmail.com
                  </a>
                </div>
              </motion.div>

              <div className="mt-2">
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-sm text-teal-600 hover:underline"
                >
                  View recent work →
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SECTION (FORM) */}
        <motion.div
          className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={containerVariant}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">Tell us about your project</h2>
              <p className="text-sm text-slate-600 mt-1">
                Fill the form or send details via WhatsApp.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={openMailClient}
          >
            {/* Name */}
            <motion.div className="" variants={itemVariant}>
              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`mt-1 w-full border rounded-md px-3 py-2 text-sm ${
                  errors.name ? "border-red-400" : "border-slate-200"
                }`}
                data-aos="fade-up"
                data-aos-delay="40"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div className="" variants={itemVariant}>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                className={`mt-1 w-full border rounded-md px-3 py-2 text-sm ${
                  errors.email ? "border-red-400" : "border-slate-200"
                }`}
                data-aos="fade-up"
                data-aos-delay="60"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* Phone */}
            <motion.div className="" variants={itemVariant}>
              <label className="block text-sm font-medium">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 9xxxxxxxxx"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm border-slate-200"
                data-aos="fade-up"
                data-aos-delay="80"
              />
            </motion.div>

            {/* Subject */}
            <motion.div className="" variants={itemVariant}>
              <label className="block text-sm font-medium">Subject</label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm bg-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <option>General Inquiry</option>
                <option>Logo & Branding</option>
                <option>Website Design</option>
                <option>Social Media Creatives</option>
                <option>Print & Brochure</option>
                <option>Custom Quote</option>
              </select>
            </motion.div>

            {/* Message */}
            <motion.div className="md:col-span-2" variants={itemVariant}>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Describe what you want. Short brief helps!"
                className={`mt-1 w-full border rounded-md px-3 py-2 text-sm ${
                  errors.message ? "border-red-400" : "border-slate-200"
                }`}
                data-aos="fade-up"
                data-aos-delay="120"
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">{errors.message}</p>
              )}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="md:col-span-2 flex flex-col sm:flex-row items-center gap-3 mt-2"
              variants={itemVariant}
            >
              {/* Email Button */}
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
              >
                <PrimaryButton
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto px-5"
                >
                  Send Email
                </PrimaryButton>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.button
                type="button"
                onClick={sendWhatsApp}
                className="w-full sm:w-auto inline-flex items-center gap-2 justify-center px-4 py-2 rounded-md border text-sm hover:bg-slate-50"
                variants={floatVariant}
                whileHover="hover"
                whileTap="tap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-4 h-4 text-green-600"
                  fill="currentColor"
                >
                  <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.624.84 5.055 2.268 7.038L4 29l7.202-2.216A12.98 12.98 0 0 0 16.001 27C22.627 27 28 21.627 28 15S22.627 3 16.001 3zm5.94 18.668c-.25.703-1.457 1.348-2.01 1.396-.553.049-.557.45-3.519-.931-2.963-1.382-4.85-4.77-5.004-4.99-.153-.22-1.195-1.623-1.195-3.093 0-1.47.767-2.19 1.04-2.49.273-.3.6-.372.8-.372.2 0 .4 0 .576.01.188.007.431-.07.675.515.25.603.852 2.087.927 2.239.076.153.127.332.024.532-.102.2-.153.332-.305.515-.153.183-.32.41-.453.55-.152.162-.31.338-.133.662.177.323.789 1.302 1.693 2.107 1.163 1.045 2.144 1.37 2.468 1.523.324.153.514.127.7-.076.187-.203.801-.933 1.015-1.253.214-.32.428-.27.724-.162.296.106 1.872.884 2.193 1.045.321.162.535.24.613.372.077.132.077.703-.173 1.405z" />
                </svg>
                WhatsApp
              </motion.button>

              {/* RESET */}
              <button
                type="button"
                onClick={() => {
                  setForm({
                    name: "",
                    email: "",
                    subject: "General Inquiry",
                    message: "",
                    phone: "",
                  });
                  setErrors({});
                  showToast({ type: "success", text: "Form reset" });
                }}
                className="ml-auto text-sm text-slate-600 hover:underline"
              >
                Reset
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Toast */}
        {toast && (
          <div
            className={`fixed bottom-6 right-6 z-50 rounded-md px-4 py-2 text-sm ${
              toast.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            } shadow`}
          >
            {toast.text}
          </div>
        )}
      </div>
    </Container>
  );
}
