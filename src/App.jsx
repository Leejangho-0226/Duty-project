// App.jsx
// -----------------------------------------
// 홈 전체 페이지(HomePage)를 호출하는 메인 파일
// Header, Footer, Section들은 HomePage 내부에서 모두 렌더링됨
// -----------------------------------------

import HomePage from './pages/HomePage.jsx';

export default function App() {
  return (
    <>
      <HomePage />
    </>
  );
}
