// src/sections/PartnersSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import PartnersWaveCanvas from "../components/common/PartnersWaveCanvas.jsx";
import "../styles/sections/partners/partners-section.css";

export default function PartnersSection() {
  const partners = [
    { id: 1, name: "회사로고" },
    { id: 2, name: "회사로고" },
    { id: 3, name: "회사로고" },
    { id: 4, name: "회사로고" },
    { id: 5, name: "회사로고" },
    { id: 6, name: "회사로고" },
    { id: 7, name: "회사로고" },
    { id: 8, name: "회사로고" },
    { id: 9, name: "회사로고" },
    { id: 10, name: "회사로고" },
  ];

  return (
    <section className="partners-section">
      {/* 1) 배경 + 캔버스 레이어 (텍스트/카드는 여기 들어오지 않음) */}
      <div className="partners-layers">
        <div className="partners-bg" />
        <PartnersWaveCanvas />
      </div>

      {/* 2) 텍스트 + 카드 레이어 */}
      <div className="partners-inner">
        <div className="partners-header">
          <p className="partners-label">Partners</p>
          <h2 className="partners-title">
            다양한 산업의 고객들과 협업을 통해
            <br />
            검증된 기술력과 신뢰를 쌓아갑니다.
          </h2>
        </div>

        <div className="partners-slider-wrap">
          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            slidesPerView="auto"
            spaceBetween={36}
            allowTouchMove={false}
          >
            {partners.map((p) => (
              <SwiperSlide key={p.id} className="partners-slide">
                <div className="partners-card">{p.name}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
