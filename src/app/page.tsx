import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="story" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">브랜드 스토리</h2>
      </section>
      <section id="products" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">제품 소개</h2>
      </section>
      <section id="gallery" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">갤러리</h2>
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">연락처</h2>
      </section>
    </main>
  );
}
