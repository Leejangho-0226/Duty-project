// src/components/common/PartnersWaveCanvas.jsx
import { useEffect, useRef } from "react";
import { initPartnersWave } from "../../assets/utils/partnersWave.js";

export default function PartnersWaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cleanUp = initPartnersWave(canvas);
    return () => {
      if (typeof cleanUp === "function") cleanUp();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="partners-wave-canvas"
      aria-hidden="true"
    />
  );
}
