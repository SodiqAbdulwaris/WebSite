import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Initiatives } from "@/components/Initiatives";
import { Excos } from "@/components/Excos";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Initiatives />
        <Excos />
        <Community />
      </main>
      <Footer />
    </>
  );
}
