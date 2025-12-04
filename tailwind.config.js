/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  // ⭐ 여기가 새로 추가된 핵심
  safelist: [
    "right-[7%]",
    "right-[15%]",
    "top-[45%]",
    "top-[50%]",
    "bottom-[12%]",
    "left-[6%]",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
