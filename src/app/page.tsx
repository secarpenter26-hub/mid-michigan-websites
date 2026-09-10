import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Examples } from "@/components/examples";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Packages } from "@/components/packages";

export default function Home() {
  return (
    <>
      <Hero />
      <Examples />
      <Packages />
      <HowItWorks />
      <About />
      <Contact />
    </>
  );
}
