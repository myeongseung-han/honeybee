import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandStory />
      <Products />
      <Gallery />
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">연락처</h2>
      </section>
    </main>
  );
}
