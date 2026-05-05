// 이 파일이 웹사이트의 첫 화면(랜딩 페이지)입니다.
// Next.js에서 app/page.tsx는 자동으로 메인 페이지(/)로 연결됩니다.

export default function Home() {
  return (
    // 전체 페이지를 감싸는 컨테이너
    <main className="min-h-screen bg-white">

      {/* ─── 상단 네비게이션 바 ─── */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-100">
        {/* 서비스 로고/이름 */}
        <span className="text-xl font-bold text-indigo-600">창창한 청년들</span>

        {/* 구인글 보러가기 버튼 */}
        <a
          href="/posts"
          className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
        >
          구인글 보러가기
        </a>
      </nav>

      {/* ─── 히어로 섹션: 서비스의 핵심 메시지를 보여주는 구역 ─── */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        {/* 태그라인 */}
        <span className="bg-indigo-50 text-indigo-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          대학생 창업팀 멤버 매칭 플랫폼
        </span>

        {/* 메인 제목 */}
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          아이디어는 있는데,<br />
          <span className="text-indigo-600">함께할 팀원</span>이 없나요?
        </h1>

        {/* 서비스 설명 */}
        <p className="text-lg text-gray-500 max-w-xl mb-10">
          창창한 청년들은 창업을 꿈꾸는 대학생들이<br />
          맞는 팀원을 찾고, 함께 시작할 수 있도록 돕는 공간입니다.
        </p>

        {/* 행동 유도 버튼 (CTA) */}
        <div className="flex gap-4">
          <a
            href="/posts"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition text-lg"
          >
            팀원 구하러 가기
          </a>
          <a
            href="/posts/new"
            className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition text-lg"
          >
            구인글 올리기
          </a>
        </div>
      </section>

      {/* ─── 가치 소개 섹션: 서비스가 해결하는 문제 3가지 ─── */}
      <section className="bg-gray-50 px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
          왜 창창한 청년들인가요?
        </h2>

        {/* 카드 3개를 가로로 나열 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* 가치 카드 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">아이디어 × 실행</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              좋은 아이디어도 혼자서는 한계가 있습니다.
              다양한 역할의 팀원을 만나 아이디어를 현실로 만드세요.
            </p>
          </div>

          {/* 가치 카드 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">맞는 사람과의 연결</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              개발자, 디자이너, 기획자, 마케터—
              내 팀에 필요한 역할을 가진 사람과 직접 연결되세요.
            </p>
          </div>

          {/* 가치 카드 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">대학생 창업 생태계</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              같은 꿈을 가진 대학생들이 모인 공간.
              함께 도전하는 청년들의 커뮤니티에 합류하세요.
            </p>
          </div>

        </div>
      </section>

      {/* ─── 하단 푸터 ─── */}
      <footer className="text-center py-10 text-gray-400 text-sm">
        © 2026 창창한 청년들. 모든 권리 보유.
      </footer>

    </main>
  );
}