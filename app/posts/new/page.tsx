"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// Supabase 연결 파일을 가져옵니다.
import { supabase } from "@/lib/supabase";

export default function NewPostPage() {
  const router = useRouter(); // 제출 후 다른 페이지로 이동할 때 사용합니다.

  // 폼 입력값을 저장하는 상태
  const [formData, setFormData] = useState({
    teamName: "",
    field: "",
    idea: "",
    roles: "",
    contact: "",
  });

  // 제출 중인지 여부 (중복 제출 방지용)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 입력값이 바뀔 때 실행되는 함수
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 제출 버튼을 눌렀을 때 실행되는 함수
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // 버튼 비활성화 시작

    // Supabase DB의 posts 테이블에 데이터를 저장합니다.
    const { error } = await supabase.from("posts").insert([
      {
        team_name: formData.teamName,
        field: formData.field,
        idea: formData.idea,
        roles: formData.roles,
        contact: formData.contact,
      },
    ]);

    if (error) {
      // 저장 실패 시
      alert("저장 중 오류가 발생했습니다. 다시 시도해주세요.");
      console.error(error);
      setIsSubmitting(false);
      return;
    }

    // 저장 성공 시 구인글 목록 페이지로 이동
    alert("구인글이 등록되었습니다!");
    router.push("/posts");
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ─── 상단 네비게이션 바 ─── */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white border-b border-gray-100">
        <a href="/" className="text-xl font-bold text-indigo-600">
          창창한 청년들
        </a>
        <a
          href="/posts"
          className="text-sm text-gray-500 hover:text-indigo-600 transition"
        >
          구인글 목록으로
        </a>
      </nav>

      {/* ─── 폼 영역 ─── */}
      <section className="max-w-2xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">구인글 올리기</h1>
        <p className="text-gray-500 mb-10">함께할 팀원을 찾고 있다면 아래 내용을 작성해주세요.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* 팀 이름 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              팀 이름 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              placeholder="예: 헬스케어 스타트업 팀"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* 창업 분야 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              창업 분야 <span className="text-red-400">*</span>
            </label>
            <select
              name="field"
              value={formData.field}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
            >
              <option value="">분야를 선택해주세요</option>
              <option value="헬스테크">헬스테크</option>
              <option value="에듀테크">에듀테크</option>
              <option value="푸드테크">푸드테크</option>
              <option value="소셜임팩트">소셜임팩트</option>
              <option value="핀테크">핀테크</option>
              <option value="커머스">커머스</option>
              <option value="기타">기타</option>
            </select>
          </div>

          {/* 아이디어 설명 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              아이디어 설명 <span className="text-red-400">*</span>
            </label>
            <textarea
              name="idea"
              value={formData.idea}
              onChange={handleChange}
              placeholder="어떤 문제를 해결하려고 하는지, 어떤 서비스를 만들고 싶은지 간략히 설명해주세요."
              required
              rows={4}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
          </div>

          {/* 모집 역할 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              모집 역할 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="roles"
              value={formData.roles}
              onChange={handleChange}
              placeholder="예: 웹 개발자, UI 디자이너, 마케터"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <p className="text-xs text-gray-400 mt-1">여러 역할은 쉼표(,)로 구분해주세요.</p>
          </div>

          {/* 연락처 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              연락처 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="예: 이메일 또는 오픈카톡 링크"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "등록 중..." : "구인글 올리기"}
          </button>

        </form>
      </section>

    </main>
  );
}