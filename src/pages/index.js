import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <>
        <Head>
          <title>Sejal Engitech Pvt. Ltd. | IT Services</title>
          <meta
            name="description"
            content="Sejal Engitech Pvt. Ltd. provides IT services for businesses: software development, apps, web design, networking, installation, and cyber security."
          />
        </Head>

        <main className="min-h-screen bg-slate-950 text-slate-50">
          <section className="max-w-6xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.2em] mb-3">
                Sejal Engitech Pvt. Ltd.
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                IT services that simplify your business
                <span className="block text-cyan-300">
                  and help you grow faster.
                </span>
              </h1>

              <p className="text-slate-300 text-sm md:text-base mb-6">
                We help businesses with end-to-end IT services including
                software development, app development, web designing, networking,
                hardware/software installation, and cyber security.
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="/contact"
                  className="px-5 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/30 hover:bg-cyan-300 transition"
                >
                  Contact / Get Quote
                </a>
                <a
                  href="/services"
                  className="px-5 py-2.5 rounded-full border border-slate-600 text-sm hover:border-cyan-400 hover:text-cyan-300 transition"
                >
                  Explore IT Services
                </a>
              </div>

              <p className="text-xs text-slate-400">
                For Training & Digital services, visit{" "}
                <a
                  href="https://alambanatech.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  alambanatech.com
                </a>
                .
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h2 className="text-sm font-semibold text-cyan-300 mb-2">
                  Our IT Services
                </h2>
                <ul className="grid gap-2 text-xs md:text-sm text-slate-200 md:grid-cols-2">
                  <li>Software Development</li>
                  <li>App Development</li>
                  <li>Web Designing</li>
                  <li>Networking</li>
                  <li>Installation & Support</li>
                  <li>Cyber Security</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h2 className="text-sm font-semibold text-emerald-300 mb-2">
                  Need Training or Digital Marketing?
                </h2>
                <p className="text-xs md:text-sm text-slate-300 mb-3">
                  Those services are handled under our Alambana brand with
                  dedicated details and offerings.
                </p>
                <a
                  href="https://alambanatech.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex px-4 py-2 rounded-full border border-slate-700 text-xs hover:border-emerald-300 hover:text-emerald-300 transition"
                >
                  Visit Alambana Tech
                </a>
              </div>
            </div>
          </section>
        </main>
      </>
    </Layout>
  );
}
