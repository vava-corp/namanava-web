import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from '@/components/site-footer';
import { LogoMark } from '@/components/logo-mark';

const contactEmail = "corporation.vava@gmail.com";
const policyDate = "2026년 10월 15일";

export const metadata: Metadata = {
  title: "나만바 아동 안전 표준 정책",
  description: "나만바의 아동 안전 원칙, 금지 행위, 신고 방법 및 대응 절차를 안내합니다.",
};

const sections = [
  {
    title: "1. 목적 및 기본 원칙",
    blocks: [
      "나만바는 질문과 답변을 통해 서로의 생각과 가치관을 나누고 관계를 깊게 알아가는 서비스입니다.",
      "나만바는 아동의 안전과 권리를 중요하게 생각하며, 아동 성적 학대 및 착취(Child Sexual Abuse and Exploitation, CSAE)를 엄격히 금지합니다. 서비스 내에서 아동을 성적으로 착취하거나 학대하거나 위험에 빠뜨리는 행위 및 콘텐츠를 허용하지 않습니다.",
      "본 정책은 나만바 이용자와 서비스 운영에 적용되며, 관련 법령과 Google Play 정책을 준수하는 것을 원칙으로 합니다.",
    ],
  },
  {
    title: "2. 금지 행위 및 콘텐츠",
    blocks: [
      "나만바에서는 다음 행위를 금지합니다.",
      [
        "아동 성적 학대물(Child Sexual Abuse Material, CSAM)의 제작, 업로드, 저장, 공유, 유통 또는 이를 알선하는 행위",
        "아동을 성적 대상으로 묘사하거나 성적 착취를 조장하는 콘텐츠를 게시하거나 공유하는 행위",
        "성적 목적의 접근, 그루밍, 유인 또는 아동에게 성적인 대화나 행위를 강요하는 행위",
        "아동에게 성적인 이미지나 영상을 요구하거나 전송하도록 유도하는 행위",
        "성적인 이미지나 개인정보를 이용해 아동을 협박하거나 금전·성적 행위를 요구하는 행위",
        "아동 성매매, 인신매매 또는 그 밖의 아동 성적 착취를 조장하거나 알선하는 행위",
        "위 행위를 지원하거나 조장하거나 은폐하는 행위",
      ],
      "위 항목은 예시에 한정되지 않으며, 아동의 안전을 침해하거나 성적 학대 및 착취를 조장하는 기타 행위에도 적용됩니다.",
    ],
  },
  {
    title: "3. 신고 및 문의 방법",
    blocks: [
      <>이용자는 나만바 이용 중 아동 안전과 관련된 우려사항이나 의심되는 위반 행위를 발견한 경우 앱 내 <strong>문의하기</strong> 기능을 통해 운영자에게 신고할 수 있습니다.</>,
      "신고 시 가능한 범위에서 다음 내용을 전달해 주세요.",
      [
        "신고 사유 및 발생 상황",
        "문제가 발생한 화면이나 콘텐츠를 식별할 수 있는 정보",
        "관련 이용자 또는 그룹을 식별할 수 있는 정보",
        "운영자가 사실관계를 확인하는 데 필요한 추가 설명",
      ],
      "신고를 위해 아동 성착취물로 의심되는 이미지나 영상을 내려받거나 재전송하지 마세요. 불필요하게 민감한 개인정보를 제출하지 말고, 콘텐츠를 식별할 수 있는 정보와 상황 설명을 우선 제공해 주세요.",
      "앱 내 문의하기 기능을 이용할 수 없는 경우에는 다음 이메일로 문의할 수 있습니다.",
      <><strong>아동 안전 담당 연락처:</strong> <a href={`mailto:${contactEmail}`} className="break-all underline underline-offset-4">{contactEmail}</a></>,
    ],
  },
  {
    title: "4. 신고 검토 및 조치",
    blocks: [
      "운영자는 접수된 신고의 내용과 관련 정보를 검토하고, 위반 여부와 위험 수준에 따라 적절한 조치를 검토합니다.",
      "위반이 확인되거나 긴급한 아동 안전 위험이 있다고 판단되는 경우 다음 조치를 취할 수 있습니다.",
      [
        "관련 콘텐츠의 삭제 또는 접근 제한",
        "관련 계정의 이용 제한 또는 정지",
        "관련 법령 및 절차에 따른 관계 기관 신고 또는 협조",
        "추가 피해를 방지하기 위해 필요한 조치",
      ],
      "아동 성적 학대물 또는 아동 성적 착취와 관련된 신고는 우선적으로 검토할 수 있습니다. 신고 내용과 위험 수준에 따라 조치 방식과 처리 기간은 달라질 수 있습니다.",
      "허위 신고나 악의적인 신고 역시 서비스 운영에 지장을 주거나 다른 이용자에게 피해를 주는 경우 관련 정책에 따라 조치할 수 있습니다.",
    ],
  },
  {
    title: "5. 관련 법규 준수 및 관계 기관 협조",
    blocks: [
      "나만바는 아동 성적 학대 및 착취와 관련된 법령과 적용 가능한 규정을 준수하기 위해 노력합니다.",
      "아동 성적 학대물 또는 아동에 대한 성적 착취가 확인된 경우, 관련 법령에 따라 필요한 신고 및 관계 기관 협조 절차를 진행합니다. 법령상 신고 의무가 발생하거나 아동이 위험에 처해 있다고 판단되는 경우에는 해당 의무와 절차에 따라 대응합니다.",
    ],
  },
  {
    title: "6. 아동 안전 담당자 및 연락처",
    blocks: [
      "나만바의 아동 안전 관련 신고와 정책 준수에 관한 문의는 다음 연락처로 접수할 수 있습니다.",
      [
        <><strong>서비스명:</strong> 나만바</>,
        <><strong>아동 안전 담당 연락처:</strong> <a href={`mailto:${contactEmail}`} className="break-all underline underline-offset-4 text-base">{contactEmail}</a></>,
      ],
      "해당 연락처는 아동 안전 관련 신고 및 정책 문의를 접수하기 위한 창구입니다.",
    ],
  },
  {
    title: "7. 정책의 적용 및 변경",
    blocks: [
      "나만바는 관련 법령, Google Play 정책 또는 서비스 운영 방식의 변경에 따라 본 정책을 수정할 수 있습니다.",
      "정책이 변경되는 경우 본 페이지를 통해 변경 내용을 공개합니다.",
      <><strong>최종 수정일:</strong> <time dateTime="2026-10-15">{policyDate}</time></>,
    ],
  },
];

export default function ChildSafetyPage() {
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
            <LogoMark />
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
          나만바 아동 안전 표준 정책
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#547087]">
          나만바는 아동의 안전과 권리를 중요하게 생각하며, 아동 성적 학대 및
          착취를 엄격히 금지합니다.
        </p>
        <dl className="mt-6 space-y-2 text-base leading-7 text-[#547087]">
          <div><dt className="inline font-semibold">시행일: </dt><dd className="inline"><time dateTime="2026-10-15">{policyDate}</time></dd></div>
          <div><dt className="inline font-semibold">서비스명: </dt><dd className="inline">나만바</dd></div>
          <div><dt className="inline font-semibold">아동 안전 관련 문의: </dt><dd className="inline"><a href={`mailto:${contactEmail}`} className="break-all underline underline-offset-4 text-base">{contactEmail}</a></dd></div>
        </dl>
      </section>
      <div className="mx-auto grid max-w-5xl gap-6 px-6 pb-64 sm:pb-32 font-[Pretendard] lg:grid-cols-[220px_1fr] lg:px-10">
        <aside className="h-fit rounded-3xl bg-[#e5f4fd] p-5 lg:sticky lg:top-6">
          <p className="text-xs font-semibold text-[#74A8D5]">CONTENTS</p>
          <ol className="mt-4 flex flex-col gap-3 text-sm text-[#547087]">
            {sections.map((section, index) => (
              <li key={section.title} className="text-sm"><a href={`#section-${index + 1}`} className="transition-colors hover:text-[#173047]">{section.title}</a></li>
            ))}
          </ol>
        </aside>
        <article className="rounded-3xl border border-[#d7ebf8] bg-white p-6 shadow-[0_18px_50px_rgba(52,126,170,.08)] sm:p-10">
          {sections.map((section, index) => (
            <section
              key={section.title}
              id={`section-${index + 1}`}
              className="scroll-mt-6 border-b border-[#e6f2f9] py-7 first:pt-0 last:border-0 last:pb-0"
            >
              <h2 className="text-base font-semibold text-[#173047]">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-[12px] leading-8 text-[#547087]">
                {section.blocks.map((block, blockIndex) =>
                  Array.isArray(block) ? (
                    <ul key={blockIndex} className="list-disc space-y-2 pl-5">
                      {block.map((item, itemIndex) => <li className='text-base' key={itemIndex}>{item}</li>)}
                    </ul>
                  ) : (
                    <p className='text-base' key={blockIndex}>{block}</p>
                  )
                )}
              </div>
            </section>
          ))}
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
