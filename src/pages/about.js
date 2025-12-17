import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Sejal Engitech</title>
      </Head>

      <main className="min-h-screen bg-slate-950 text-slate-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">About Sejal Engitech</h1>
          <p className="text-slate-300 mb-4 text-sm md:text-base">
            Sejal Engitech started in 2011. Since then, we have been working
            with businesses to simplify their IT and digital needs.
          </p>
          <p className="text-slate-300 mb-4 text-sm md:text-base">
            We bring a strong local touch and treat your business as our own.
            Our focus is to build your brand and operations to the sky for you.
          </p>
          <p className="text-slate-400 text-xs">
            Mission: (Reserved – we will fill this section together later.)
          </p>
        </div>
      </main>
    </>
  );
}
