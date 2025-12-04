// src/sections/DutyOnSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import "../styles/sections/dutyon/hero-dutyon.css";

import dutyonImg from "../assets/images/dutyon/dutyon.png";
import dutyonImg2 from "../assets/images/dutyon/dutyon2.png";

export default function DutyOnSection() {
  return (
    <section id="dutyon" className="dutyon-section">

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        speed={1800}
        className="dutyon-swiper"
      >

        
        <SwiperSlide>
          <div className="dutyon-slide">
            <img src={dutyonImg} className="dutyon-image" alt="dutyon-hero-1" />

            <div className="dutyon-text slide1">
              <h2 className="dutyon-title dark">
                DutyOn<br/>
                <span>AI 간호 근무표 자동 생성 플랫폼</span>
              </h2>

              <p className="dutyon-desc dark">
                근무 규정, 휴무, 관리 밸런스를 고려한 자동 편성<br/>
                간호 조직의 공정한 스케줄을 데이터 기반으로 완성합니다.
              </p>

              <a
                className="dutyon-btn dark-btn"
                href="https://duty-one.vercel.app/"
                target="_blank"
              >
                DutyOn 바로가기
              </a>
            </div>
          </div>
        </SwiperSlide>

       
        <SwiperSlide>
          <div className="dutyon-slide">
            <img src={dutyonImg2} className="dutyon-image" alt="dutyon-hero-2" />

            <div className="dutyon-text slide2">
              <h2 className="dutyon-title white">
                DutyOn<br/>
                <span>AI 간호 근무표 자동 생성 플랫폼</span>
              </h2>

              <p className="dutyon-desc white">
                근무 규정, 휴무, 관리 밸런스를 고려한 자동 편성<br/>
                간호 조직의 공정한 스케줄을 데이터 기반으로 완성합니다.
              </p>

              <a
                className="dutyon-btn white-btn"
                href="https://duty-one.vercel.app/"
                target="_blank"
              >
                DutyOn 바로가기
              </a>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}
