// src/sections/QuestionSection.jsx

import "../styles/sections/question/question-section.css";

export default function QuestionSection() {
  return (
    <section className="question-final-section">

      <div className="question-wrapper">
        <h2 className="question-title">
          지금, 더 나은 케어 경험을 시작하세요
        </h2>

        <p className="question-desc">
          작은 질문이라도 좋습니다.<br />
          전문 상담팀이 가장 빠른 시간 안에 도와드립니다.
        </p>

        <button
          className="question-btn"
          onClick={() => alert("서비스 준비중입니다 죄송합니다🙇‍♂️")}
          style={{ cursor: "pointer" }}
        >
          문의하기
        </button>

      </div>

    </section>
  );
}
