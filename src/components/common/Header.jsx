import { useEffect, useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState("ko");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const TEXT = {
    ko: {
      logo: "프로리 그룹",
      company: "회사소개",
      business: "사업분야",
      innovation: "기술혁신",
      stories: "스토리",
      contact: "고객센터",
      about: "회사 개요",
      vision: "비전",
      history: "연혁",
      prore: "프로리 솔루션",
      healing: "힐링유",
      dutyon: "듀티온",
      proreDesc: "교육 솔루션 / 3D 학습",
      healingDesc: "힐링 커머스 / 패키지",
      dutyonDesc: "근무표 AI 자동화",
      ai: "AI 플랫폼",
      ed3d: "3D 교육",
      data: "데이터 헬스케어",
      teacherStory: "강사 이야기",
      userReview: "사용자 후기",
      brand: "브랜드 철학",
      ask: "문의하기",
      recruit: "제휴 / 채용",
    },

    en: {
      logo: "PRORE GROUP",
      company: "Company",
      business: "Business",
      innovation: "Innovation",
      stories: "Stories",
      contact: "Contact",
      about: "About Us",
      vision: "Vision",
      history: "History",
      prore: "Prore Solution",
      healing: "Healing You",
      dutyon: "DutyOn",
      proreDesc: "Education / 3D Learning",
      healingDesc: "Healing Commerce / Package",
      dutyonDesc: "AI Duty Automation",
      ai: "AI Platform",
      ed3d: "3D Education",
      data: "Data Healthcare",
      teacherStory: "Teachers Story",
      userReview: "User Reviews",
      brand: "Brand Philosophy",
      ask: "Contact Form",
      recruit: "Partnership / Hiring",
    },
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black text-white border-b border-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* 로고 (alert 없음, 정상 동작) */}
        <div
          className="text-xl font-extrabold tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {TEXT[lang].logo}
        </div>

        {/* 메뉴 */}
        <nav className="hidden md:flex items-center gap-10 text-[15.5px] font-medium">

          <DropdownMenu label={TEXT[lang].company}>
            <MenuItem>{TEXT[lang].about}</MenuItem>
            <MenuItem>{TEXT[lang].vision}</MenuItem>
            <MenuItem>{TEXT[lang].history}</MenuItem>
          </DropdownMenu>

          <DropdownMenu label={TEXT[lang].business}>
            {/* 사업분야는 정상 이동 */}
            <BusinessItem href="#prore" title={TEXT[lang].prore} desc={TEXT[lang].proreDesc} />
            <BusinessItem href="#healingyou" title={TEXT[lang].healing} desc={TEXT[lang].healingDesc} />
            <BusinessItem href="#dutyon" title={TEXT[lang].dutyon} desc={TEXT[lang].dutyonDesc} />
          </DropdownMenu>

          <DropdownMenu label={TEXT[lang].innovation}>
            <MenuItem>{TEXT[lang].ai}</MenuItem>
            <MenuItem>{TEXT[lang].ed3d}</MenuItem>
            <MenuItem>{TEXT[lang].data}</MenuItem>
          </DropdownMenu>

          <DropdownMenu label={TEXT[lang].stories}>
            <MenuItem>{TEXT[lang].teacherStory}</MenuItem>
            <MenuItem>{TEXT[lang].userReview}</MenuItem>
            <MenuItem>{TEXT[lang].brand}</MenuItem>
          </DropdownMenu>

          <DropdownMenu label={TEXT[lang].contact}>
            <MenuItem>{TEXT[lang].ask}</MenuItem>
            <MenuItem>{TEXT[lang].recruit}</MenuItem>
          </DropdownMenu>

          {/* 언어 변경 (alert X) */}
          <DropdownMenu iconMode>
            <LangItem onClick={() => setLang("ko")}>Korea / 한국어</LangItem>
            <LangItem onClick={() => setLang("en")}>Global / English</LangItem>
          </DropdownMenu>

        </nav>

        <div className="md:hidden">
          <button className="text-xl">☰</button>
        </div>

      </div>
    </header>
  );
}

/* 공통 드롭다운 */
function DropdownMenu({ label, children, iconMode = false }) {
  return (
    <div className="relative group">

      {iconMode ? (
        <button className="hover:text-blue-400 transition flex items-center">
          <GlobeAltIcon className="w-5 h-5" />
        </button>
      ) : (
        <button className="hover:text-blue-400 transition">{label}</button>
      )}

      <div
        className="
          absolute left-0 top-full pt-3
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-200
        "
      >
        <div className="bg-white text-slate-800 rounded-xl shadow-lg py-3 w-48 border">
          {children}
        </div>
      </div>
    </div>
  );
}

/* 기본 메뉴 아이템 — 클릭하면 alert 띄우고 드롭다운 유지 */
function MenuItem({ children }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        alert("서비스 준비중입니다 죄송합니다🙇‍♂️");
      }}
      className="block w-full text-left px-4 py-2 text-[15px] hover:bg-slate-100"
    >
      {children}
    </button>
  );
}

/* 언어 변경 아이템 — alert 없음 */
function LangItem({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-4 py-2 text-[15px] hover:bg-slate-100"
    >
      {children}
    </button>
  );
}

/* 사업분야 아이템 — 정상 이동, alert 없음 */
function BusinessItem({ href, title, desc }) {
  return (
    <a href={href} className="block p-2 hover:bg-slate-100 rounded">
      <p className="font-semibold text-[15px]">{title}</p>
      <p className="text-[13px] text-slate-500">{desc}</p>
    </a>
  );
}
