export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white/70 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-honey font-bold text-lg mb-4">연락처</h3>
          <p className="mb-2">전화: 010-1234-5678</p>
          <p className="mb-2">이메일: hello@moraejae.kr</p>
          <p>카카오톡: 모래재꿀벌</p>
        </div>

        <div>
          <h3 className="text-honey font-bold text-lg mb-4">양봉장 위치</h3>
          <p className="mb-2">충청북도 괴산군 모래재길 123</p>
          <p>모래재 자연양봉장</p>
        </div>

        <div>
          <h3 className="text-honey font-bold text-lg mb-4">사업자 정보</h3>
          <p className="mb-2">상호명: 모래재꿀벌</p>
          <p className="mb-2">대표자: 홍길동</p>
          <p>사업자번호: 123-45-67890</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
        &copy; 2026 모래재꿀벌. All rights reserved.
      </div>
    </footer>
  );
}
