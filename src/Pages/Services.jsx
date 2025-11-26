import React from "react";
import Container from "../Components/ui/Container";

const services = [
  {
    title: "Logo & Branding",
    desc: "Custom logos, brand identity, visiting cards and stationery.",
  },
  {
    title: "Website Design",
    desc: "Responsive websites using modern technologies.",
  },
  {
    title: "Social Media Creatives",
    desc: "Posts, stories, and ad creatives ready to publish.",
  },
  {
    title: "Print & Brochure",
    desc: "Print-ready brochures, flyers and banners.",
  },
];

export default function Services() {
  return (
    <Container className="py-14">
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <p className="text-slate-600 mb-8 max-w-xl">
        Design & development services to help businesses stand out online and
        offline.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-xl p-5 card-shadow">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
            <div className="mt-4">
              <a href="/contact" className="text-sm text-teal-700 font-medium">
                Request Service →
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
