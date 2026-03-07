export default function Home() {
  return (
    <main>
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">히어로 섹션</h1>
      </section>
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
