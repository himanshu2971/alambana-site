import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Sejal Engitech & Alambana</title>
      </Head>

      <main className="min-h-screen bg-slate-950 text-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Our Services</h1>

          {/* Sejal Engitech IT Services */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-cyan-300 mb-3">
              Sejal Engitech Private Limited – IT Services
            </h2>
            <ul className="grid gap-2 text-sm md:text-base text-slate-200 md:grid-cols-2">
              <li>Software Development</li>
              <li>App Development – School Bus App</li>
              <li>Web Designing</li>
              <li>Video for Ads or YouTube</li>
              <li>Networking</li>
              <li>Hardware and Software Installation</li>
              <li>Cyber Security</li>
            </ul>
          </section>

          {/* Alambana Edutech / Academy */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-emerald-300 mb-3">
              IT Training Institute – Alambana Edutech / Alambana Academy
            </h2>
            <ul className="grid gap-2 text-sm md:text-base text-slate-200 md:grid-cols-2">
              <li>AI – Basic and Advanced</li>
              <li>Data Analysis – Basic and Advanced</li>
              <li>Machine Learning – Basic and Advanced</li>
              <li>Robotics</li>
              <li>Python</li>
              <li>Excel</li>
              <li>Animation – Basic and Advanced</li>
              <li>Cyber Security</li>
              <li>Web Designing</li>
              <li>Graphic Designing</li>
              <li>Accounting</li>
            </ul>
          </section>

          {/* Alambana Digital */}
          <section>
            <h2 className="text-xl font-semibold text-fuchsia-300 mb-3">
              Alambana Digital
            </h2>
            <ul className="grid gap-2 text-sm md:text-base text-slate-200">
              <li>AI Story Videos – start with short story videos</li>
              <li>
                Digital Marketing – start with SR Healthcare advertisement
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
