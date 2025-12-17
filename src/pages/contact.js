import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Sejal Engitech</title>
      </Head>

      <main className="min-h-screen bg-slate-950 text-slate-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 text-sm md:text-base mb-6">
            Have a project, training need, or digital campaign in mind? Reach
            out to us using the form below or via phone/WhatsApp.
          </p>

          {/* Contact details */}
          <div className="mb-8 text-sm md:text-base">
            <p className="text-slate-200">
              Phone / WhatsApp:{" "}
              <a
                href="tel:+919001207105"
                className="text-cyan-300 hover:underline"
              >
                +91 9001207105
              </a>
            </p>
            <p className="text-slate-200">
              Email:{" "}
              <a
                href="mailto:himanshushourabh@gmail.com"
                className="text-cyan-300 hover:underline"
              >
                himanshushourabh@gmail.com
              </a>
            </p>
            <p className="text-slate-400 text-xs mt-2">
              Address: (we will fill exact address later).
            </p>
          </div>

          {/* Enquiry form – now connected to API */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
          >
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Phone / WhatsApp</label>
              <input
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                placeholder="+91 ..."
              />
            </div>

            <div>
              <label className="block text-sm mb-1">How can we help?</label>
              <textarea
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                placeholder="Tell us about your requirement"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/30 hover:bg-cyan-300 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

            {status === "success" && (
              <p className="text-xs text-emerald-300 mt-2">
                Thank you! Your enquiry has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-rose-300 mt-2">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </main>
    </>
  );
}
