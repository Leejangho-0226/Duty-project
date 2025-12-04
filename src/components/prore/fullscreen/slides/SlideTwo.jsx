// src/pages/home/components/slides/two/SlideTwo.jsx

import { useState } from "react";
import reviewBg from "../../../../assets/images/prore/slide-background.png";

export default function SlideTwo({ isActive, bottomBar }) {   // bottomBar 추가
  const [isPaused, setIsPaused] = useState(false);

  /* =============================
      후기 데이터 
  ============================= */
  const reviews = [
    {
      title: "어려웠던 개념들이 하나둘 연결되며 공부가 훨씬 쉬워졌어요.",
      text:
        "막연하게 외우던 내용들이 PRORE 수업을 듣고 나니 흐름이 잡혀서 이해 중심으로 바뀌었습니다. 문제 풀 때 바로 적용되는 순간이 많아 기분 좋았어요.",
      user: "박**",
      major: "해부생리학 / 운동학",
    },
    {
      title: "실기 접근법을 반복 학습할 수 있어서 확실히 도움이 됩니다.",
      text:
        "실기 위주의 동작 해석부터 실제 적용 방법까지 단계별로 알려줘서 복습할 때도 막힘 없이 따라갈 수 있었어요. 실습과 연결되는 점이 특히 좋았습니다.",
      user: "오**",
      major: "실기 대비 수강생",
    },
    {
      title: "전체 흐름이 보이기 시작하면서 시험 준비가 훨씬 수월해졌습니다.",
      text:
        "세부 내용만 보던 때와 달리 전체 구조가 보이니까 공부 방향이 잡혔어요. 과목별 연계성이 좋아서 자연스럽게 복습이 되는 느낌이 들었습니다.",
      user: "장**",
      major: "전과목 패키지",
    },
    {
      title: "실무에서 바로 쓰는 설명이 많아서 진짜 도움이 되었습니다.",
      text:
        "현장에서 바로 적용할 수 있는 팁들이 많아서 수업을 들을수록 '아 이런 부분이었구나' 라는 깨달음이 컸어요. 기억에 오래 남는 설명이었습니다.",
      user: "이**",
      major: "신경계 중재",
    },
    {
      title: "3D 모델로 설명해주니 이해도가 정말 많이 올라갔어요.",
      text:
        "평면이 아닌 입체적으로 보이니까 해부학적 구조가 머릿속에 쉽게 그려졌습니다. 덕분에 외우기보다 이해하는 방식으로 공부가 바뀌었어요.",
      user: "김**",
      major: "운동학 심화",
    },
    {
      title: "실습과 이론이 자연스럽게 연결되면서 실력이 올라가는 게 느껴졌어요.",
      text:
        "온라인·오프라인 실습이 함께 진행돼서 배운 내용을 바로 확인할 수 있었습니다. 체감되는 변화가 있어서 동기부여도 훨씬 잘 되었어요.",
      user: "최**",
      major: "실전 실습 연계",
    },
    {
      title: "복습할 때도 설명이 바로 떠올라서 공부가 편해졌습니다.",
      text:
        "흐름 위주의 설명이라 암기하려 하지 않아도 자연스럽게 기억됐습니다. 예전보다 훨씬 빠르게 복습이 가능해졌어요.",
      user: "한**",
      major: "근골격계 평가",
    },
    {
      title: "핵심 포인트만 콕 집어줘서 공부 시간이 확실히 줄었습니다.",
      text:
        "군더더기 없이 필요한 설명만 딱딱 짚어주니까 이해가 훨씬 빨랐습니다. 바쁜 일정 속에서도 효율적으로 공부할 수 있었어요.",
      user: "서**",
      major: "전과목 종합반",
    },
    {
      title: "설명이 귀에 쏙 들어와서 이해가 쉬웠습니다.",
      text:
        "어렵게 느껴지던 개념들을 친절하고 쉽게 풀어주셔서 복습할 때도 금방 떠올랐습니다. 특히 예시 설명이 정말 도움이 많이 됐어요.",
      user: "문**",
      major: "국시 대비반",
    },
    {
      title: "실전 문제에 바로 적용할 수 있는 내용이 많았습니다.",
      text:
        "개념만 배우는 게 아니라 실제 문제풀이랑 연결된 설명이 많아서 시험 준비에 큰 도움이 됐습니다. 실전 감각이 자연스럽게 길러졌어요.",
      user: "유**",
      major: "신경·근골격 통합",
    },
  ];

  return (
    <div
      className={`prore-slide prore-slide-two ${isActive ? "active" : ""}`}
      style={{
        backgroundImage: `url(${reviewBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="prore-overlay">

        {/* =============================
            상단 메인 타이틀
        ============================= */}
        <div className="prore-s2-header prore-s2-header-tight">
          <h3 className="prore-s2-subtitle">조작 없는 100% 리얼 후기</h3>

          <h1 className="prore-s2-title">
            수강생들이 직접 증명한 PRORE의 변화
          </h1>

          <div className="prore-s2-rating">만족도 4.9점 │ ★★★★★</div>

          <p className="prore-s2-desc">
            PRORE 재활 교육 플랫폼을 이용한 9,000명 이상의 실제 수강생 후기입니다.
          </p>
        </div>

        {/* =============================
            가로 무한 슬라이드
        ============================= */}
        <div className="prore-s2-track-wrapper">
          <div
            className={`prore-s2-track ${isPaused ? "paused" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="prore-review-card">

                <div className="prore-review-title">{r.title}</div>

                <div className="prore-review-text">“{r.text}”</div>

                <div className="prore-review-footer">
                  <div className="prore-profile-circle"></div>
                  <div>
                    <div className="prore-review-user">{r.user}</div>
                    <div className="prore-review-major">{r.major}</div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* =============================
            ★ Bottom Bar (슬라이드2 하단 중앙)
        ============================= */}
        <div className="prore-s2-bottom">
          {bottomBar}
        </div>

      </div>
    </div>
  );
}
