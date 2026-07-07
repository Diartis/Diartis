import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CustomCursor } from "@/components/CustomCursor";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WorkSection } from "@/components/WorkSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "DIARTIS",
  jobTitle: "Multidisciplinary Designer",
  description:
    "Multidisciplinary Designer specializing in Graphic Design, Motion Design, and Video Editing.",
  url: "https://diartis.com",
  sameAs: [
    "https://instagram.com/diartis",
    "https://www.linkedin.com/in/diartis/",
    "https://www.behance.net/diartis",
  ],
  telephone: "+38349188957",
  knowsAbout: [
    "Brand Identity",
    "Logo Design",
    "Social Media Design",
    "Motion Design",
    "Video Editing",
    "Advertising Design",
    "Print Design",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <Services />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
