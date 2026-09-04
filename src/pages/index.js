import Head from "next/head";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Why from "@/components/Why";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tree Boss | Professional Tree Service in Bucks County, PA</title>
        <meta
          name="description"
          content="Woman-owned tree service in Doylestown, PA. Tree removal, trimming, stump grinding, land clearing, and 24/7 emergency response. Free estimates. 5.0 rated."
        />
        <meta property="og:title" content="Tree Boss | Tree Service Bucks County PA" />
        <meta
          property="og:description"
          content="Certified, insured, woman-owned tree care. Free estimates across Bucks & Montgomery County."
        />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <Hero />
        <Services />
        <About />
        <Why />
        <Contact />
      </main>
    </>
  );
}
