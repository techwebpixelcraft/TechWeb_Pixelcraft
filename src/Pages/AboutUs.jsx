import React from "react";
import Container from "../Components/ui/Container";

export default function About() {
  return (
    <Container className="py-14">
      <h1 className="text-2xl font-bold mb-4">About TechWeb PixelCraft</h1>
      <p className="text-slate-600 max-w-3xl">
        We are a small team of designers and developers focused on delivering
        beautiful and functional websites and graphic templates. We combine
        design thinking with practical web development to produce results that
        help businesses grow.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h3 className="font-semibold">Our Approach</h3>
          <p className="text-sm text-slate-600 mt-2">
            User-centered design, fast development, and clear communication.
          </p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h3 className="font-semibold">Tools</h3>
          <p className="text-sm text-slate-600 mt-2">
            Figma, Photoshop, Illustrator, React, Tailwind, PHP & MySQL for
            backend if needed.
          </p>
        </div>
      </div>
    </Container>
  );
}
