import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import { SiteFooter } from '@/components/site-footer';

const sections = [
  {
    title: "1. 총칙",
    body: "나만바(이하 “서비스”)는 이용자의 개인정보를 중요하게 생각하며, 개인정보 보호법 등 관련 법령을 준수합니다. 본 방침은 서비스가 어떤 개인정보를 수집·이용·보관하는지 안내합니다.",
  },
  {
    title: "2. 운영자 및 문의처",
    body: "서비스명: 나만바\n운영 형태: 개인 운영\n개인정보 보호책임자: 서비스 운영자 본인\n개인정보 관련 문의: corporation.vava@gmail.com\n사업자등록번호 및 사업장 주소: 없음",
  },
  {
    title: "3. 수집하는 개인정보",
    body: "회원가입 시 필수적으로 이메일, 비밀번호, 닉네임, 생년월일을 수집합니다. 선택적으로 프로필 이미지와 성별을 등록할 수 있습니다. 만 14세 미만의 회원가입은 허용하지 않으며, 생년월일은 가입 가능 연령 확인에 이용합니다.",
  },
  {
    title: "4. 서비스 이용 중 처리하는 정보",
    body: "커플 기능 이용 시 커플 ID, 구성원 사용자 ID, 기념일, 질문 난이도, 커플 프로필 이미지를 처리합니다. 그룹 기능 이용 시 그룹명, 그룹 이미지, 초대코드, 방장 및 멤버 정보를 처리합니다. 그룹 최대 인원은 8명입니다. 서비스 제공을 위해 이용자가 작성한 질문 답변을 데이터베이스에 저장합니다.",
  },
  {
    title: "5. 개인정보의 이용 목적",
    body: "수집한 정보는 회원가입·로그인·계정관리, 사용자 프로필 제공, 커플·그룹 기능 제공, 질문과 답변의 저장 및 제공, 질문·답변 공개 기능, AI 질문 생성, 서비스 데이터와 이미지의 저장·관리 및 정상적인 서비스 운영을 위해 이용합니다.",
  },
  {
    title: "6. AI 질문 생성 및 외부 서비스",
    body: "AI 질문 생성 시 사용자의 모임 유형과 질문 난이도만 나만바의 Spring Boot 서버를 통해 OpenAI API에 전달합니다. 이메일, 비밀번호, 닉네임, 생년월일, 프로필 이미지, 성별, 커플·그룹 식별정보 및 답변 내용은 AI 질문 생성 목적으로 OpenAI에 전달하지 않습니다. 애플리케이션 서버는 Fly.io, 데이터베이스는 Supabase, 이미지는 ImageKit을 이용합니다.",
  },
  {
    title: "7. 이미지 처리",
    body: "사용자 프로필 이미지, 커플 프로필 이미지 및 그룹 이미지는 ImageKit에 저장합니다. 서비스는 이미지 이용을 위해 이미지 URL 등 필요한 정보를 데이터베이스에 저장합니다.",
  },
  {
    title: "8. 보유 및 파기",
    body: "개인정보의 보유기간과 파기 시점은 서비스의 실제 운영 및 관련 법령에 따라 정합니다. 현재 회원 탈퇴 기능은 개발 예정이며, 구현 시 계정과 개인 식별정보는 삭제하거나 식별할 수 없도록 처리합니다. 기존 답변은 질문·답변 기록 유지를 위해 보존될 수 있으며, 작성자는 “탈퇴한 사용자”로 표시하고 개인 식별정보와 연결되지 않도록 처리합니다.",
  },
  {
    title: "9. 이용자의 권리",
    body: "이용자는 자신의 개인정보에 대해 열람, 정정, 삭제 및 처리정지를 요청할 수 있습니다. 관련 요청이나 개인정보 보호에 관한 문의는 corporation.vava@gmail.com으로 접수해 주세요. 서비스는 관련 법령과 확인 절차에 따라 지체 없이 처리합니다.",
  },
  {
    title: "10. 처리방침의 변경",
    body: "서비스의 기능이나 개인정보 처리 현황이 변경되면 본 방침을 업데이트합니다. 변경된 내용은 이 페이지를 통해 안내합니다. 본 방침은 2026년 10월 6일부터 적용됩니다.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#173047]">
      <header className="border-b border-[#d7ebf8] bg-white/90">
        <nav
          className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 lg:px-10"
          aria-label="페이지 메뉴"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#A0D4F8] text-[#173047]">
              <Heart size={17} fill="currentColor" />
            </span>
            나만바
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-[#547087] hover:text-[#173047]"
          >
            <ArrowLeft size={16} />
            메인으로
          </Link>
        </nav>
      </header>
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-16 font-[Pretendard] lg:px-10 lg:pt-24">
        <p className="text-sm font-semibold text-[#74A8D5]">POLICY</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          개인정보 처리방침
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#547087]">
          나만바는 서로를 알아가는 안전한 시간을 만들기 위해 이용자의 개인정보를
          신중하게 처리합니다.
        </p>
      </section>
      <div className="mx-auto grid max-w-5xl gap-6 px-6 pb-24 font-[Pretendard] lg:grid-cols-[220px_1fr] lg:px-10">
        <aside className="h-fit rounded-3xl bg-[#e5f4fd] p-5 lg:sticky lg:top-6">
          <p className="text-xs font-semibold text-[#74A8D5]">CONTENTS</p>
          <ol className="mt-4 flex flex-col gap-3 text-sm text-[#547087]">
            {sections.map((section) => (
              <li key={section.title} className='text-sm'>{section.title}</li>
            ))}
          </ol>
        </aside>
        <article className="rounded-3xl border border-[#d7ebf8] bg-white p-6 shadow-[0_18px_50px_rgba(52,126,170,.08)] sm:p-10">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-b border-[#e6f2f9] py-7 first:pt-0 last:border-0 last:pb-0"
            >
              <h2 className="text-xl font-semibold text-[#173047]">
                {section.title}
              </h2>
              <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-[#547087]">
                {section.body}
              </p>
            </section>
          ))}
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
