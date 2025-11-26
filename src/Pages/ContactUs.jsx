import React from "react";
import Container from "../Components/ui/Container";

export default function Contact() {
  return (
    <Container className="py-14">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="text-slate-600 mb-6">
        Send us a message or reach out via WhatsApp for a quick quote.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-md shadow-sm">
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
              required
            />
            <label className="block text-sm mt-3">Message</label>
            <textarea
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
              rows="6"
              required
            />
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-md">
              Send Message
            </button>
          </form>
        </div>

        <aside className="bg-white p-6 rounded-md shadow-sm">
          <div className="font-semibold">Quick contact</div>
          <div className="mt-2 text-sm text-slate-600">
            WhatsApp: +91 99999 99999
          </div>
          <div className="mt-1 text-sm text-slate-600">
            Email: hello@techwebpixelcraft.com
          </div>
          <div className="mt-4">
            <a href="#" className="text-sm text-teal-600">
              Send WhatsApp message
            </a>
          </div>
        </aside>
      </div>
    </Container>
  );
}
