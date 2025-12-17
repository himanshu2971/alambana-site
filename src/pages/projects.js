import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Sejal Engitech</title>
      </Head>

      <main className="min-h-screen bg-slate-950 text-slate-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Projects & Portfolio</h1>
          <p className="text-slate-300 text-sm md:text-base mb-2">
            This space is reserved for our future projects and case studies.
          </p>
          <p className="text-slate-300 text-sm md:text-base">
            As we complete more work under Sejal Engitech, Alambana Edutech, and
            Alambana Digital, we will showcase them here with details and
            results.
          </p>
        </div>
      </main>
    </>
  );
}
