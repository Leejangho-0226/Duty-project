/* ================================
   ProreFullscreenSlider.jsx
================================ */
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

/* ================================
   스타일
================================ */
import "../../../styles/sections/prore/prore-fullscreen.css";
import "../../../styles/sections/prore/prore-slide1.css";
import "../../../styles/sections/prore/prore-slide2.css";
// import "../../../styles/sections/prore/prore-slide3.css"; // ★ 슬라이드3 미사용

/* ================================
   슬라이드 컴포넌트
================================ */
import SlideOne from "./slides/SlideOne";
import SlideTwo from "./slides/SlideTwo";
// import SlideThree from "./slides/SlideThree"; // ★ 슬라이드3 미사용

import PlayPauseButton from "./controls/PlayPauseButton";

export default function ProreFullscreenSlider() {
  const swiperRef = useRef(null);
  const lastIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [shouldZoomFirst, setShouldZoomFirst] = useState(false);

  const autoplayDelay = 6000;

  /* ================= 진행 게이지 ================= */
  useEffect(() => {
    if (!isPlaying) return;

    queueMicrotask(() => setProgress(0));
    let start = Date.now();

    const timer = setInterval(() => {
      const now = Date.now() - start;
      setProgress(Math.min(now / autoplayDelay, 1));
    }, 40);

    return () => clearInterval(timer);
  }, [activeIndex, isPlaying]);

  /* ================= 슬라이드 정의 =================
     ★ slide1, slide2만 사용 (slide3 제외)
  ================================================= */
  const slides = [
    { type: "split" },
    { type: "overlay-review" },
    // { type: "overlay-course" }, // ★ 사용 안 함
  ];

  /* =================================================
     색상 테마 (밤 배경이므로 전체 흰색)
  ================================================= */
  const themeColor = "#ffffff";

  /* =================================================
     BottomBar
  ================================================= */
  const bottomBar = (
    <div className="prore-samsung-bottom theme-dark">
      <div className="prore-samsung-bars">
        {slides.map((_, i) => {
          const isActiveBar = activeIndex === i;
          const scale = isActiveBar ? progress : 0;

          return (
            <button
              key={i}
              className={`prore-samsung-bar ${isActiveBar ? "active" : ""}`}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              type="button"
            >
              <div className="prore-samsung-bar-num">{i + 1}</div>

              <div className="prore-samsung-bar-track">
                <div
                  className="prore-samsung-bar-fill"
                  style={{ transform: `scaleX(${scale})` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      <PlayPauseButton
        isPlaying={isPlaying}
        color={themeColor}
        onToggle={() => {
          const swiper = swiperRef.current;
          if (!swiper) return;

          if (isPlaying) {
            swiper.autoplay.stop();
            setIsPlaying(false);
          } else {
            swiper.autoplay.start();
            setIsPlaying(true);
          }
        }}
      />
    </div>
  );

  return (
    <div className="prore-fullscreen-root">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={900}
        loop={true}
        autoplay={
          isPlaying
            ? { delay: autoplayDelay, disableOnInteraction: false }
            : false
        }
        navigation={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          const prev = lastIndexRef.current;
          const next = swiper.realIndex;

          if (next === 0 && prev !== 0) {
            setShouldZoomFirst(true);
          } else {
            setShouldZoomFirst(false);
          }

          lastIndexRef.current = next;
          setActiveIndex(next);
        }}
        className="prore-fullscreen-swiper"
      >
        {/* ========================= */}
        {/* slide1 + slide2만 사용 */}
        {/* ========================= */}
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {slide.type === "split" && (
              <SlideOne
                isActive={activeIndex === i}
                shouldZoom={activeIndex === 0 && shouldZoomFirst}
                bottomBar={bottomBar}
              />
            )}

            {slide.type === "overlay-review" && (
              <SlideTwo
                isActive={activeIndex === i}
                bottomBar={bottomBar}
              />
            )}

            {/* 
            {slide.type === "overlay-course" && (
              <SlideThree
                isActive={activeIndex === i}
                bottomBar={bottomBar}
              />
            )}
            */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
