import Head from "next/head";
import Layout from "../components/Layout";

export default function Services() {
  return (
    <Layout>
      <>
        <Head>
          <title>IT Services | Sejal Engitech</title>
        </Head>

        <main className="min-h-screen bg-slate-950 text-slate-50">
          <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="mb-8">
              <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                IT Services
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-bold">
                IT Services by Sejal Engitech
              </h1>
              <p className="mt-3 text-slate-300 text-sm md:text-base max-w-3xl">
                Reliable development, deployment, and support for businesses—
                designed to be secure, scalable, and easy to maintain.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="grid gap-3 text-sm md:text-base text-slate-200 md:grid-cols-2">
                <span>Software Development</span>
                <span>App Development – School Bus App</span>
                <span>Web Designing</span>
                <span>Video for Ads or YouTube</span>
                <span>Networking</span>
                <span>Hardware and Software Installation</span>
                <span>Cyber Security</span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h2 className="text-lg font-semibold mb-2 text-emerald-300">
                Looking for Training or Digital Marketing?
              </h2>
              <p className="text-slate-300 text-sm md:text-base mb-4">
                Visit our Alambana website for complete details, packages, and
                offerings.
              </p>
              <a
                href="https://alambanatech.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-5 py-2.5 rounded-full bg-emerald-300 text-slate-950 font-semibold text-sm hover:bg-emerald-200 transition"
              >
                Go to alambanatech.com
              </a>
            </div>
          </div>
        </main>
      </>
    </Layout>
  );
}
