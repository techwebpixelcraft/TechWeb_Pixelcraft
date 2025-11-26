import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/AboutUs";
import Contact from "./Pages/ContactUs";
// import OurWork from "./Pages/OurWork";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Templates from "./Pages/Templets";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          {/* <Route path="/work" element={<OurWork />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* fallback to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
