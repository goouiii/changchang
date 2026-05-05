// 이 파일은 Supabase(DB)와 연결하는 설정 파일입니다.
// 한 번만 만들어두면 다른 파일에서 가져다 쓸 수 있습니다.

import { createClient } from "@supabase/supabase-js";

// .env.local 파일에 저장해둔 비밀 키를 불러옵니다.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Supabase 클라이언트를 생성합니다.
// 이 supabase 객체로 DB에 데이터를 저장하고 불러올 수 있습니다.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);