// src/sections/CompanyHero.jsx
import React, { useEffect, useRef } from "react";
import { initParticles } from "../assets/utils/particleBackground";

// CompanyHero 스타일 연결 
import "../styles/sections/company/hero-company.css";

export default function CompanyHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = initParticles(canvasRef.current);
    return cleanup;
  }, []);

  return (
    <section className="hero-kakao relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <canvas ref={canvasRef} className="hero-bg-canvas" />

      
      <h1 className="hero-title">기술로 삶을 바꾸는</h1>

      
      <h1 className="hero-title delay-1">헬스케어 테크놀로지 그룹</h1>

      
      <h1 className="hero-title delay-2">
        배움·케어·근무의 모든 순간을
      </h1>

      
      <h1 className="hero-title delay-3">
        기술로 새롭게 디자인합니다.
      </h1>

      {/* scroll indicator */}
      <div className="scroll-indicator delay-3">↓ scroll</div>
    </section>
  );
}
