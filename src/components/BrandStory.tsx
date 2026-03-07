"use client";

import ScrollReveal from "./ScrollReveal";

const stories = [
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto mb-4" fill="none">
        <path
          d="M32 8L36 20H48L38 28L42 40L32 32L22 40L26 28L16 20H28L32 8Z"
          fill="#F5A623"
          stroke="#D4920B"
          strokeWidth="2"
        />
        <circle cx="32" cy="48" r="8" fill="#FFD980" stroke="#D4920B" strokeWidth="2" />
      </svg>
    ),
    title: "자연과 함께하는 양봉",
    body: "깊은 산속 모래재 자락, 맑은 공기와 깨끗한 물이 흐르는 곳에서 벌들과 함께 살아갑니다. 자연의 리듬을 따르며, 벌들이 가장 건강하게 꿀을 모을 수 있는 환경을 만들어갑니다.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto mb-4" fill="none">
        <ellipse cx="32" cy="40" rx="18" ry="16" fill="#FFD980" stroke="#D4920B" strokeWidth="2" />
        <path d="M20 28C20 18 26 10 32 10C38 10 44 18 44 28" stroke="#D4920B" strokeWidth="2" fill="none" />
        <path d="M28 40C28 36 30 34 32 34C34 34 36 36 36 40" fill="#F5A623" />
      </svg>
    ),
    title: "정성으로 만드는 순수한 꿀",
    body: "화학 첨가물 없이, 벌들이 직접 만든 그대로의 꿀을 전해드립니다. 채밀부터 병입까지 한 단계 한 단계 정성을 다해 관리하여 자연 그대로의 맛과 영양을 보존합니다.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto mb-4" fill="none">
        <circle cx="32" cy="28" r="10" fill="#FFD980" stroke="#D4920B" strokeWidth="2" />
        <path d="M32 38V52" stroke="#5C3D1A" strokeWidth="2" />
        <path d="M24 44C28 40 36 40 40 44" stroke="#5C3D1A" strokeWidth="2" fill="none" />
        <circle cx="22" cy="20" r="4" fill="#F5A623" opacity="0.5" />
        <circle cx="42" cy="20" r="4" fill="#F5A623" opacity="0.5" />
      </svg>
    ),
    title: "모래재에서 전하는 건강한 달콤함",
    body: "우리 꿀은 단순한 단맛이 아닌, 건강을 담은 달콤함입니다. 계절마다 다른 꽃에서 모은 꿀은 저마다의 독특한 향과 맛을 지니고 있어 자연의 다채로움을 그대로 느낄 수 있습니다.",
  },
];

export default function BrandStory() {
  return (
    <section id="story" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brown mb-16">
            우리의 이야기
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12">
          {stories.map((story, i) => (
            <ScrollReveal key={story.title} delay={i * 0.2}>
              <div className="text-center">
                {story.icon}
                <h3 className="text-xl font-bold text-brown mb-3">{story.title}</h3>
                <p className="text-brown-light leading-relaxed">{story.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
