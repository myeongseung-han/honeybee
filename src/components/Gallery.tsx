"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Lightbox from "./Lightbox";

const images = [
  {
    src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop",
    alt: "벌집과 꿀벌",
  },
  {
    src: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=400&fit=crop",
    alt: "꿀 채취",
  },
  {
    src: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=600&h=400&fit=crop",
    alt: "자연 속 양봉장",
  },
  {
    src: "https://images.unsplash.com/photo-1607473129014-0afb7ed09c2a?w=600&h=400&fit=crop",
    alt: "꿀 병입 과정",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    alt: "꽃과 벌",
  },
  {
    src: "https://images.unsplash.com/photo-1586185324875-fe7e4e0fc8cf?w=600&h=400&fit=crop",
    alt: "순수한 꿀",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brown mb-16">
            양봉장 이야기
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={img.alt} delay={i * 0.1}>
              <button
                className="w-full overflow-hidden rounded-xl group cursor-pointer"
                onClick={() => setSelected(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Lightbox
        src={selected?.src ?? null}
        alt={selected?.alt ?? ""}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
