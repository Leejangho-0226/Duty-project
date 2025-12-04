// src/pages/home/components/slides/three/SlideThree.jsx
import slide3 from "../../../../assets/images/prore/slide3.png";

export default function SlideThree({ isActive }) {
  const courses = [
    { title: "신경계 중재 실전 완성" },
    { title: "운동학 기초 마스터" },
    { title: "해부생리학 핵심 완성" },
    { title: "근골격계 실전 트레이닝" },
    { title: "기능해부학 심화" },
    { title: "3D 인체 움직임 분석 특강" }
  ];

  return (
    <div
      className={`prore-slide prore-slide-three ${isActive ? "active" : ""}`}
      style={{
        backgroundImage: `url(${slide3})`
      }}
    >
      <div className="prore-overlay">

        <div className="prore-s3-header">
          <h2 className="prore-overlay-title">대표 강좌</h2>
          <p className="prore-overlay-desc">
            최신 기출 분석 기반 국시 특강부터 실무·실습까지
          </p>
        </div>

        {/* 3x2 카드 */}
        <div className="prore-s3-cards">
          {courses.map((c, i) => (
            <div key={i} className="prore-course-card">
              <div className="prore-course-badge">BEST</div>
              <h3 className="prore-course-title">{c.title}</h3>
              <p className="prore-course-sub">
                3D 모델 기반 다각도 학습 + 실무 모션 트레이닝
              </p>
            </div>
          ))}
        </div>

        {/* 더보기 버튼 */}
        <div className="prore-s3-bottom">
          <a
            href="https://www.prore.co.kr/special-lecture/package"
            className="prore-more-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            강의 더 보기
          </a>
        </div>

      </div>
    </div>
  );
}
