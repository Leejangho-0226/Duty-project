// ===============================================
// Partners Wave — S자 대형 커브 완전 구현 버전
// 왼쪽 아래 → 크게 위로 → 중앙 깊은 하강 → 오른쪽으로 큰 상승
// ===============================================

export function initPartnersWave(canvas) {
  const ctx = canvas.getContext("2d");

  // 섹션 높이를 기준으로 캔버스 크기 설정
  const section = canvas.closest(".partners-section") || canvas.parentElement;

  let w = 0;
  let h = 0;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = section.offsetHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  // 애니메이션 값
  let progressDraw = 0;
  let fadeOut = 0;

  const drawSpeed = 0.008;
  const fadeSpeed = 0.02;

  // 네온 그라디언트
  function neonGradient(y) {
    const g = ctx.createLinearGradient(0, y - 40, 0, y + 40);
    g.addColorStop(0, "rgba(255,60,60,0)");
    g.addColorStop(0.35, "rgba(255,80,80,0.6)");
    g.addColorStop(0.5, "rgba(255,120,120,1)");
    g.addColorStop(0.65, "rgba(255,80,80,0.6)");
    g.addColorStop(1, "rgba(255,60,60,0)");
    return g;
  }

  // ===============================================
  // S자 곡선 공식 (커브 최종 튜닝)
  //
  // baseline 높임 → 전체 커브 위치 위로
  // heightScale 줄임 → 중앙 하강 완화
  // cos 계수 증가 → 양 끝 봉우리 강조
  // sin 계수 조정 → 중앙 하강 완만
  // ===============================================
  function getCurvePoint(p) {
    const x = w * p;

    // 곡선을 전체적으로 위로 올림
    const baseY = h * 0.62;

    // 중앙 하강 깊이 조절
    const heightScale = h * 0.45;

    // 양쪽이 높고 가운데가 낮은 S자 곡선 조합
    const shape =
      Math.cos(2 * Math.PI * (p - 0.10)) * 1.45 +   // 양 끝 봉우리
      Math.sin(2 * Math.PI * (p - 0.25)) * 0.75;    // 중앙 하강

    const y = baseY - shape * heightScale;
    return { x, y };
  }

  // ===============================================
  // 메인 애니메이션
  // ===============================================
  function animate() {
    ctx.clearRect(0, 0, w, h);
    ctx.globalAlpha = 1 - fadeOut;
    ctx.lineCap = "round";

    // Glow 라인
    ctx.lineWidth = 18;
    ctx.strokeStyle = "rgba(255,40,40,0.25)";
    ctx.beginPath();

    for (let i = 0; i <= 300 * progressDraw; i++) {
      const p = i / 300;
      const pt = getCurvePoint(p);
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    }
    ctx.stroke();

    // 네온 중앙 라인
    ctx.lineWidth = 5;
    const midY = getCurvePoint(Math.min(progressDraw * 0.5, 1)).y;
    ctx.strokeStyle = neonGradient(midY);

    ctx.beginPath();
    for (let i = 0; i <= 300 * progressDraw; i++) {
      const p = i / 300;
      const pt = getCurvePoint(p);
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    }
    ctx.stroke();

    // 진행 업데이트
    if (progressDraw < 1) {
      progressDraw += drawSpeed;
    } else {
      fadeOut += fadeSpeed;
      if (fadeOut >= 1) {
        progressDraw = 0;
        fadeOut = 0;
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  return () => {
    window.removeEventListener("resize", resize);
  };
}
