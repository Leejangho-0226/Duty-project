export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">

        <div className="space-y-2 text-sm leading-relaxed">
          <h3 className="font-bold text-lg mb-4">프로리 솔루션</h3>
          <p>대표자 : 박유경</p>
          <p>서울특별시 동대문구 경희대로 23</p>
          <p>경희대학교삼의원창업센터 307호</p>
          <p>사업자등록번호 : 870-29-01466</p>
          <p>통신판매업 신고번호 : 제 2023-서울성북-1283</p>
        </div>

        <div className="space-y-2 text-sm leading-relaxed">
          <h4 className="font-bold text-lg mb-4">고객센터</h4>
          <p>TEL : 010-8490-1181</p>
          <p>
            Mail :
            <a
              href="mailto:prore0606@gmail.com"
              className="hover:underline text-blue-300 ml-1"
            >
              prore0606@gmail.com
            </a>
          </p>
          <p>평일 am 9:00 ~ pm 18:00</p>
          <p>개인정보관리책임자 : 김여명</p>
        </div>

        <div className="space-y-2 text-sm leading-relaxed">
          <h4 className="font-bold text-lg mb-4">기타 안내</h4>
          <p>아이콘 사용 출처 : Freepik</p>
        </div>
      </div>

      <div className="border-t border-white/20 py-6 text-center text-xs text-gray-300">
        <p>Copyright © 프로리 솔루션 Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
