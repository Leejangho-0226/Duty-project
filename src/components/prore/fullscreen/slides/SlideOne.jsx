import slideBg from "../../../../assets/images/prore/slide-background.png"; 

export default function SlideOne({ shouldZoom, bottomBar }) {
  return (
    <div
      className={`prore-slide prore-slide-one ${shouldZoom ? "zoom" : ""}`}
      style={{
        backgroundImage: `url(${slideBg})`,   // 텍스처 배경
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 메인 인너 영역 */}
      <div className="prore-s1-inner">

        {/* 왼쪽 텍스트 */}
        <div className="prore-s1-left">
          <h2 className="s1-label">PRORE</h2>

          <h1 className="s1-title">
            국내 유일한 통합형
            <br />
            재활 교육 플랫폼
          </h1>

          <p className="s1-desc">
            언제 어디서든 편리하게 배울 수 있는 차세대 재활 교육 솔루션입니다.
            국시 특강부터 3D 이론 교육, 실무·실습 교육까지 통합 제공합니다.
          </p>

          <a
            href="https://www.prore.co.kr/main"
            target="_blank"
            rel="noreferrer"
            className="s1-button"
          >
            프로리 솔루션 바로가기
          </a>

          {/* 버튼 아래 바 */}
          <div className="prore-s1-bottom">{bottomBar}</div>
        </div>

      </div>
    </div>
  );
}
