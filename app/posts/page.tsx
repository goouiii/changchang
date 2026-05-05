// 이 페이지는 빌드 시 미리 만들지 말고, 접속할 때마다 새로 만들도록 설정합니다.
export const dynamic = 'force-dynamic';

// 이 파일은 구인글 목록 페이지입니다.
// 이제 가짜 데이터 대신 Supabase DB에서 실제 데이터를 불러옵니다.

// Supabase 연결 파일을 가져옵니다.
import { supabase } from "@/lib/supabase";

// DB에서 가져올 구인글의 데이터 형태를 정의합니다.
type Post = {
  id: number;
  team_name: string;
  field: string;
  idea: string;
  roles: string;
  contact: string;
  created_at: string;
};

// DB에서 구인글 목록을 가져오는 함수입니다.
// async/await: DB 조회가 완료될 때까지 기다린다는 뜻입니다.
async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")         // posts 테이블에서
    .select("*")           // 모든 컬럼을
    .order("created_at", { ascending: false }); // 최신순으로 정렬

  // 오류가 생기면 빈 배열을 반환합니다.
  if (error) {
    console.error("구인글 불러오기 실패:", error);
    return [];
  }

  return data || [];
}

export default async function PostsPage() {
  // 페이지가 열릴 때 DB에서 구인글을 가져옵니다.
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ─── 상단 네비게이션 바 ─── */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white border-b border-gray-100">
        <a href="/" className="text-xl font-bold text-indigo-600">
          창창한 청년들
        </a>
        <a
          href="/posts/new"
          className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
        >
          구인글 올리기
        </a>
      </nav>

      {/* ─── 페이지 헤더 ─── */}
      <section className="bg-white px-8 py-12 text-center border-b border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">팀원 구인글</h1>
        <p className="text-gray-500">함께할 팀원을 찾고 있는 창업팀들을 만나보세요.</p>
      </section>

      {/* ─── 구인글 카드 목록 ─── */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        {/* 구인글이 없을 때 보여줄 화면 */}
        {posts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">아직 구인글이 없습니다.</p>
            <p className="text-sm mt-2">첫 번째 구인글을 올려보세요!</p>
          </div>
        ) : (
          <>
            {/* 총 게시글 수 */}
            <p className="text-sm text-gray-400 mb-6">{posts.length}개의 구인글</p>

            {/* 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  {/* 분야 태그 */}
                  <span className="bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full">
                    {post.field}
                  </span>

                  {/* 팀 이름 */}
                  <h2 className="text-lg font-bold text-gray-900 mt-4 mb-2">
                    {post.team_name}
                  </h2>

                  {/* 아이디어 설명 */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {post.idea}
                  </p>

                  {/* 모집 역할 태그들: 쉼표로 구분된 텍스트를 나눠서 태그로 표시 */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {post.roles.split(",").map((role) => (
                      <span
                        key={role}
                        className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                      >
                        {role.trim()} 모집
                      </span>
                    ))}
                  </div>

                  {/* 연락처 */}
                  <p className="text-xs text-gray-400">연락처: {post.contact}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

    </main>
  );
}