import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Stories from "@/components/home/Stories";
import Partners from "@/components/home/Partners";
import Initiatives from "@/components/home/Initiatives";
import Mission from "@/components/home/Mission";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Initiatives />
      <Stats />
      {/* <Stories /> */}
      <Partners />
    </main>
  );
}
