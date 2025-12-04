// src/sections/HealingSection.jsx
import React from "react";
import healingBg from "../assets/images/healing/healing.png";

import "../styles/sections/healing/hero-healing.css";

//  추가: 아이콘 이미지 3개
import iconFatigue from "../assets/images/healing/fatigue.png";
import iconConvenience from "../assets/images/healing/convenience.png";
import iconCare from "../assets/images/healing/care.png";

export default function HealingSection() {
  return (
    <section id="healingyou" className="healing-hero">

      {/* 배경 */}
      <div className="hero-bg" style={{ backgroundImage: `url(${healingBg})` }} />
      <div className="hero-overlay" />
      <div className="hero-texture" />

      <div className="hero-content">

        <h1 className="brand-title">HealingYou</h1>

        <h2 className="main-title">회복의 경험을 디자인하다</h2>

        <p className="sub-description">
          간호사와 물리치료사가 만든 힐링 · 헬스케어 브랜드
        </p>

        
        <div className="feature-stats">

          {/* 1 */}
          <div className="stat-box">
            <img src={iconFatigue} className="stat-icon-img" alt="피로" />
            <p className="stat-keyword">피로</p>
            <p className="stat-desc">피로 회복을 위한 압박스타킹</p>
          </div>

          {/* 2 */}
          <div className="stat-box">
            <img src={iconConvenience} className="stat-icon-img" alt="편의성" />
            <p className="stat-keyword">편의성</p>
            <p className="stat-desc">
              번거로움을 없애는 올인원 템플릿
            </p>
          </div>

          {/* 3 */}
          <div className="stat-box">
            <img src={iconCare} className="stat-icon-img" alt="케어" />
            <p className="stat-keyword">케어</p>
            <p className="stat-desc">루틴, 공부, 스케줄을 한 번에 관리</p>
          </div>

        </div>

        <a
          href="https://www.xn--9y2bo8vwym.kr/"
          target="_blank"
          className="hero-btn"
        >
          HealingYou 서비스 보러가기
        </a>

      </div>
    </section>
  );
}
