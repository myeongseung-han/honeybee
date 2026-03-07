"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    name: "아카시아꿀",
    description: "은은한 향과 깔끔한 단맛",
    detail:
      "투명한 빛깔과 부드러운 맛이 특징인 아카시아꿀은 결정이 잘 되지 않아 사계절 내내 부드럽게 즐길 수 있습니다.",
    gradient: "from-amber-200 to-yellow-400",
  },
  {
    name: "밤꿀",
    description: "깊고 진한 풍미",
    detail:
      "짙은 갈색빛의 밤꿀은 강한 향과 깊은 맛을 자랑합니다. 미네랄이 풍부하여 건강을 생각하는 분들에게 사랑받는 꿀입니다.",
    gradient: "from-amber-700 to-yellow-900",
  },
  {
    name: "야생화꿀",
    description: "다채로운 꽃의 조화",
    detail:
      "산속 다양한 야생화에서 채집한 꿀로, 계절과 해마다 미묘하게 달라지는 맛이 자연의 다채로움을 그대로 담고 있습니다.",
    gradient: "from-orange-300 to-amber-500",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-honey mb-16">
            우리의 꿀
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.15}>
              <motion.div
                className="rounded-2xl overflow-hidden bg-brown/30 border border-honey/10"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                >
                  <span className="text-6xl">🍯</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-honey mb-1">
                    {product.name}
                  </h3>
                  <p className="text-honey-light text-sm mb-3">
                    {product.description}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {product.detail}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
