// src/assets/utils/particleBackground.js
// ----------------------------------------------------
// - 기술 회로 배경 엔진
// - 격자 기반 회로 라인 생성 (90도 꺾임)
// - 회로 위로 전류(Pulse) 흐름
// - 노드(점) 반짝임
// ----------------------------------------------------

export function initParticles(canvas) {
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;

  let w = 0;
  let h = 0;

  // ====== 회로 파라미터 ======
  const GRID = 80;
  const LINE_COUNT = 26;
  const MAX_SEG = 8;

  const NODE_COUNT = 160;

  // ★ Pulse 개수 축소 (너가 수정한 내용 유지)
  const PULSE_COUNT = 5;

  // ====== 데이터 ======
  let lines = [];
  let nodes = [];
  let pulses = [];

  let animId;

  // --------------------------
  // 화면 크기 잡기
  // --------------------------
  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = rect.width;
    h = rect.height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    buildScene();
  }

  window.addEventListener("resize", resize);
  resize();

  // --------------------------
  // 씬 생성
  // --------------------------
  function buildScene() {
    lines = buildCircuitLines();
    nodes = buildNodes(lines);
    pulses = buildPulses(lines);
  }

  // --------------------------
  // 회로 라인 생성
  // --------------------------
  function buildCircuitLines() {
    const circuitLines = [];
    const cols = Math.floor(w / GRID);
    const rows = Math.floor(h / GRID);

    for (let i = 0; i < LINE_COUNT; i++) {
      const start = {
        x: randInt(1, cols - 2) * GRID,
        y: randInt(1, rows - 2) * GRID
      };

      const path = [start];
      let dir = Math.random() < 0.5 ? "h" : "v";

      let cx = start.x;
      let cy = start.y;

      const segCount = randInt(4, MAX_SEG);

      for (let s = 0; s < segCount; s++) {
        const len = randInt(1, 4) * GRID;

        if (dir === "h") {
          cx += (Math.random() < 0.5 ? -1 : 1) * len;
        } else {
          cy += (Math.random() < 0.5 ? -1 : 1) * len;
        }

        cx = clamp(cx, GRID, cols * GRID - GRID);
        cy = clamp(cy, GRID, rows * GRID - GRID);

        path.push({ x: cx, y: cy });
        dir = dir === "h" ? "v" : "h";
      }

      circuitLines.push(path);
    }

    return circuitLines;
  }

  // --------------------------
  // 노드 생성 (★ 중앙 안전구역 적용)
  // --------------------------
  function buildNodes(circuitLines) {
    const list = [];

    // ★ 중앙 안전구역 설정 (텍스트 영역 비움)
    const safeZone = {
      x1: w * 0.25,
      x2: w * 0.75,
      y1: h * 0.22,
      y2: h * 0.70
    };

    for (let i = 0; i < NODE_COUNT; i++) {
      let p;
      let attempts = 0;

      while (true) {
        const line = circuitLines[randInt(0, circuitLines.length - 1)];
        p = pickRandomPointOnLine(line);

        // ★ 안전구역 안이면 다시 뽑기
        if (
          !(p.x > safeZone.x1 && p.x < safeZone.x2 &&
            p.y > safeZone.y1 && p.y < safeZone.y2)
        ) break;

        attempts++;
        if (attempts > 20) break; // 무한루프 방지
      }

      list.push({
        x: p.x,
        y: p.y,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random() * 0.35 + 0.15,
        tw: Math.random() * 0.010 + 0.003
      });
    }
    return list;
  }

  // --------------------------
  // 전류(Pulse) 생성 (★ 중앙 안전구역 적용)
  // --------------------------
  function buildPulses(circuitLines) {
    const list = [];

    const safeZone = {
      x1: w * 0.25,
      x2: w * 0.75,
      y1: h * 0.22,
      y2: h * 0.70
    };

    for (let i = 0; i < PULSE_COUNT; i++) {
      let pulse, p, attempts = 0;

      while (true) {
        const lineIndex = randInt(0, circuitLines.length - 1);
        pulse = makePulse(lineIndex);

        const line = circuitLines[pulse.lineIndex];
        const segA = line[0];
        const segB = line[1];
        p = {
          x: lerp(segA.x, segB.x, pulse.t),
          y: lerp(segA.y, segB.y, pulse.t)
        };

        // ★ 중앙 영역이면 다시 뽑기
        if (
          !(p.x > safeZone.x1 && p.x < safeZone.x2 &&
            p.y > safeZone.y1 && p.y < safeZone.y2)
        ) break;

        attempts++;
        if (attempts > 20) break;
      }

      list.push(pulse);
    }

    return list;
  }

  function makePulse(lineIndex) {
    return {
      lineIndex,
      segIndex: 0,
      t: Math.random(),
      speed: Math.random() * 0.006 + 0.003,
      size: Math.random() * 1.5 + 1.0,
      glow: Math.random() * 14 + 10
    };
  }

  // --------------------------
  // 업데이트
  // --------------------------
  function updateNodes() {
    for (const n of nodes) {
      n.a += (Math.random() - 0.5) * n.tw;
      if (n.a < 0.12) n.a = 0.12;
      if (n.a > 0.75) n.a = 0.75;
    }
  }

  function updatePulses() {
    for (const p of pulses) {
      const line = lines[p.lineIndex];
      const segA = line[p.segIndex];
      const segB = line[p.segIndex + 1];

      p.t += p.speed;

      if (p.t >= 1) {
        p.t = 0;
        p.segIndex++;

        if (p.segIndex >= line.length - 1) {
          p.lineIndex = randInt(0, lines.length - 1);
          p.segIndex = 0;
        }
      }

      p.x = lerp(segA.x, segB.x, p.t);
      p.y = lerp(segA.y, segB.y, p.t);
    }
  }

  // --------------------------
  // 그리기
  // --------------------------
  function drawLines() {
    ctx.lineWidth = 1.1;

    for (const line of lines) {
      ctx.beginPath();
      ctx.moveTo(line[0].x, line[0].y);

      for (let i = 1; i < line.length; i++) {
        ctx.lineTo(line[i].x, line[i].y);
      }

      ctx.strokeStyle = "rgba(140, 200, 255, 0.14)";
      ctx.stroke();
    }
  }

  function drawNodes() {
    for (const n of nodes) {
      ctx.fillStyle = `rgba(160, 210, 255, ${n.a})`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawPulses() {
    for (const p of pulses) {
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glow);
      grad.addColorStop(0, "rgba(80, 190, 255, 0.55)");
      grad.addColorStop(1, "rgba(80, 190, 255, 0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.glow, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(210, 245, 255, 0.8)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // --------------------------
  // 메인 드로우 루프
  // --------------------------
  function draw() {
    ctx.clearRect(0, 0, w, h);

    updateNodes();
    updatePulses();

    drawLines();
    drawNodes();
    drawPulses();

    animId = requestAnimationFrame(draw);
  }

  draw();

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener("resize", resize);
  };
}

// --------------------------
// 유틸 함수
// --------------------------
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function pickRandomPointOnLine(line) {
  const segIndex = randInt(0, line.length - 2);
  const a = line[segIndex];
  const b = line[segIndex + 1];
  const t = Math.random();
  return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) };
}
