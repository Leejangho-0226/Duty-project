// ===============================
// Prore Section
// ===============================
import ProreFullscreenSlider from "../components/prore/fullscreen/ProreFullscreenSlider";

// 섹션 전용 스타일
import "../styles/sections/prore/hero-prore.css";
import "../styles/sections/prore/prore-fullscreen.css";
import "../styles/sections/prore/prore-slide1.css";
import "../styles/sections/prore/prore-slide2.css";


export default function ProreSection() {
  return (
    <section id="prore" className="prore-section-full">
      <ProreFullscreenSlider />
    </section>
  );
}
