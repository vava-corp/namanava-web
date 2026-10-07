import { LogoMark } from "@/components/logo-mark";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  CircleCheck,
  Heart,
  MessageCircle,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "관계를 선택합니다",
    text: "커플 또는 그룹으로 시작해요.",
    icon: Heart,
  },
  {
    number: "02",
    title: "함께할 사람을 연결합니다",
    text: "그룹은 초대코드로 안전하게 참여해요.",
    icon: Users,
  },
  {
    number: "03",
    title: "질문에 답합니다",
    text: "각자의 생각을 먼저 솔직하게 적어요.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "서로의 답변을 확인합니다",
    text: "모두 답하면 답변이 함께 공개돼요.",
    icon: CircleCheck,
  },
];

const answers = [
  { name: "민지", color: "bg-coral", answer: "새로운 곳에서 함께 걷는 시간" },
  { name: "준호", color: "bg-blue", answer: "맛있는 걸 먹으며 나누는 대화" },
  { name: "서연", color: "bg-yellow", answer: "계획 없이 떠나는 작은 모험" },
];

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#f7fbff] pb-[112px] pt-[88px] text-[#272321]">
      <nav
        className="fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between bg-[#f7fbff]/90 px-6 py-3 backdrop-blur lg:px-10"
        aria-label="주요 메뉴"
      >
        <a
          href="#top"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <LogoMark />
        </a>
        <div className="hidden items-center gap-12 text-md text-[#736b66] md:flex">
          <a
            href="#experience"
            className="transition-colors hover:text-[#272321]"
          >
            서비스 이야기
          </a>
          <a href="#ways" className="transition-colors hover:text-[#272321]">
            커플과 그룹
          </a>
          <a href="#how" className="transition-colors hover:text-[#272321]">
            시작하는 방법
          </a>
        </div>
        <a
          href="#download"
          className="rounded-full bg-[#272321] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          시작하기
        </a>
      </nav>

      <section
        id="top"
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:pb-32 lg:pt-20"
      >
        <div className="relative z-10">
          <p className="mb-7 flex items-center gap-2 text-sm font-medium text-[#74A8D5]">
            <span className="size-2 rounded-full bg-[#74A8D5]" /> 질문 하나로
            시작하는 관계의 시간
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-4xl lg:text-[76px]">
            우리는 서로를
            <br />
            <span className="text-[#74A8D5] sm:text-4xl lg:text-[76px]">
              얼마나
            </span>{" "}
            알고 있을까요?
          </h1>
          <p className="mt-8 max-w-md text-lg leading-8 text-[#736b66]">
            하나의 질문에 답하고,
            <br />
            서로의 생각을 발견해보세요.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="group flex items-center gap-3 rounded-full bg-[#74A8D5] px-6 py-3.5 font-medium text-white shadow-[0_12px_30px_rgba(226,99,80,.2)] transition-all hover:-translate-y-1 hover:bg-[#d95846]"
            >
              같이 시작하기{" "}
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#experience"
              className="flex items-center gap-2 px-3 py-3.5 text-sm font-medium text-[#736b66] hover:text-[#272321]"
            >
              더 알아보기 <ArrowDown size={15} />
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] lg:mr-0">
          <div className="absolute -left-6 top-10 size-24 rounded-full bg-[#ffd8ce] blur-2xl" />
          <div className="absolute -right-5 bottom-7 size-32 rounded-full bg-[#ffe8a8] blur-2xl" />
          <div className="relative rounded-[38px] bg-[#f5eee7] p-5 shadow-[0_25px_70px_rgba(100,75,55,.12)] sm:p-8">
            <div className="mb-5 flex items-center justify-between text-xs text-[#978a81]">
              <span>오늘의 질문</span>
              <span>01 / 05</span>
            </div>
            <div className="rounded-[26px] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-medium text-[#74A8D5]">
                서로를 알아가는 질문
              </p>
              <h2 className="mt-5 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                함께하는 시간 중<br />
                가장 좋아하는 순간은?
              </h2>
              <div className="mt-8 rounded-2xl border border-dashed border-[#e8ded5] p-4 text-sm text-[#a79c94]">
                내 생각을 먼저 적어보세요
              </div>
              <div className="mt-7 flex items-center justify-between">
                <span className="text-xs text-[#b4aaa4]">
                  모두 답변하면 공개돼요
                </span>
                <span className="flex size-10 items-center justify-center rounded-full bg-[#272321] text-white">
                  <ArrowRight size={17} />
                </span>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between px-2 text-xs text-[#978a81]">
              <span className="flex items-center gap-1.5 text-md">
                <span className="size-2 rounded-full bg-[#79b99d] " /> 서로의
                답변을 기다리는 중
              </span>
              <span>같이</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-[#eee5dd] bg-[#eaf6fd] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-medium text-[#74A8D5]">
              가까운 사람일수록
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              묻지 못한 이야기가
              <br />
              아직 있습니다.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#736b66]">
              연인에게도, 가족에게도, 친구에게도
              <br className="sm:hidden" /> 오랫동안 함께한 사람에게도요.
            </p>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-[#e7f0e8] p-7 md:translate-y-8">
              <span className="text-3xl">"</span>
              <p className="mt-5 text-xl font-medium leading-8">
                나는 이 사람과
                <br />
                얼마나 비슷할까?
              </p>
            </div>
            <div className="rounded-3xl bg-[#ffe9b1] p-7">
              <span className="text-3xl">"</span>
              <p className="mt-5 text-xl font-medium leading-8">
                내가 당연하다고 생각한 걸<br />
                상대도 같게 생각할까?
              </p>
            </div>
            <div className="rounded-3xl bg-[#ffd9d0] p-7 md:translate-y-8">
              <span className="text-3xl">"</span>
              <p className="mt-5 text-xl font-medium leading-8">
                가까운 사이지만
                <br />
                아직 모르는 생각은 뭘까?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-sm font-medium text-[#74A8D5]">핵심 경험</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              질문 하나가,
              <br />
              서로를 알아가는
              <br />
              <span className="text-[#74A8D5] text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl ">
                시작
              </span>
              이 됩니다.
            </h2>
            <p className="mt-7 max-w-sm leading-7 text-[#736b66]">
              서로의 답변을 먼저 보지 않고, 각자의 생각을 충분히 표현한 다음
              함께 발견해요.
            </p>
          </div>
          <div className="relative grid gap-4 sm:grid-cols-3">
            <div className="absolute left-10 right-10 top-1/2 hidden border-t border-dashed border-[#d9cbc1] sm:block" />
            {["질문", "생각", "답변", "공개", "발견", "이해"].map(
              (item, index) => (
                <div
                  key={item}
                  className="relative z-10 flex items-center gap-4 rounded-2xl border border-[#eee5dd] bg-white p-4 shadow-[0_8px_25px_rgba(60,40,20,.04)] sm:block sm:text-center"
                >
                  <span
                    className={`mb-0 flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold sm:mx-auto sm:mb-3 ${index % 2 === 0 ? "bg-[#ffd9d0] text-[#c65443]" : "bg-[#e5f0e6] text-[#52886d]"}`}
                  >
                    0{index + 1}
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="ways"
        className="bg-[#272321] px-6 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm font-medium text-[#ff9787]">
                관계에 맞게 시작해요
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                둘이라서 더 깊게,
                <br />
                함께라서 더 많이.
              </h2>
            </div>
            <p className="max-w-xs leading-7 text-[#b9ada7] text-md">
              같이하는 사람의 수만큼 서로를 알아가는 방법도 달라지니까요.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <div className="group rounded-[30px] bg-[#e98270] p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white/20">
                  <Heart size={23} fill="currentColor" />
                </span>
                <ArrowUpRight />
              </div>
              <h3 className="mt-16 text-3xl font-semibold">둘이라서 더 깊게</h3>
              <p className="mt-4 max-w-sm leading-7 text-white/80 text-lg">
                연인과 서로의 생각, 가치관, 평소에는 묻기 어려웠던 이야기를
                자연스럽게 알아가요.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 text-sm text-white/90">
                <span className="rounded-full bg-white/15 px-3 py-1.5">
                  이해
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1.5">
                  공감
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1.5">
                  깊은 대화
                </span>
              </div>
            </div>
            <div className="group rounded-[30px] bg-[#edf1dc] p-8 text-[#272321] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[#272321]/10">
                  <Users size={23} />
                </span>
                <ArrowUpRight />
              </div>
              <h3 className="mt-16 text-3xl font-semibold">함께라서 더 많이</h3>
              <p className="mt-4 max-w-sm leading-7 text-[#736b66] text-lg">
                가족, 친구, 동료와 같은 질문에 답하며 서로의 공통점과 차이점을
                발견해요.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 text-sm text-[#5d6652]">
                <span className="rounded-full bg-[#272321]/10 px-3 py-1.5">
                  공통점
                </span>
                <span className="rounded-full bg-[#272321]/10 px-3 py-1.5">
                  차이점
                </span>
                <span className="rounded-full bg-[#272321]/10 px-3 py-1.5">
                  발견
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-md font-medium text-[#74A8D5]">
              공통점과 차이점
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              같은 답도 있고,
              <br />
              <span className="text-[#74A8D5] text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                다른 답
              </span>
              도 있습니다.
            </h2>
            <p className="mt-7 max-w-sm leading-7 text-[#736b66] text-lg">
              서로의 답변을 보며 몰랐던 가치관과 새로운 관점을 발견해보세요.
            </p>
          </div>
          <div className="rounded-[30px] bg-[#eaf6fd] p-5 sm:p-8">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-md text-[#74A8D5]">우리의 질문</p>
                <h3 className="mt-2 text-xl font-semibold">
                  함께하는 시간 중 가장 좋아하는 순간은?
                </h3>
              </div>
              <Sparkles className="text-[#74A8D5]" />
            </div>
            <div className="flex flex-col gap-3">
              {answers.map((answer) => (
                <div
                  key={answer.name}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4"
                >
                  <span
                    className={`flex size-10 items-center justify-center rounded-full text-md text-[#272321] ${answer.color}`}
                  >
                    {answer.name[0]}
                  </span>
                  <div className="flex-1">
                    <p className="text-md text-[#978a81]">{answer.name}</p>
                    <p className="mt-1 font-medium">{answer.answer}</p>
                  </div>
                  <Check size={18} className="text-[#6ba27e]" />
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-[#978a81]">
              서로 다른 답변 속에서, 서로를 더 알아가요.
            </p>
          </div>
        </div>
      </section>

      <section
        id="how"
        className="border-y border-[#eee5dd] bg-[#eaf6fd] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-5 text-lg font-medium text-[#74A8D5]">
              시작하는 방법
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              시작은 간단합니다.
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {steps.map(({ number, title, text, icon: Icon }) => (
              <div key={number} className="relative">
                <span className="text-sm font-semibold text-[#74A8D5]">
                  {number}
                </span>
                <Icon className="mt-6 text-[#74A8D5]" size={28} />
                <h3 className="mt-5 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#736b66]">{text}</p>
                {number !== "04" && (
                  <ChevronRight className="absolute right-0 top-16 hidden text-[#d9cbc1] md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#A0D4F8] text-white shadow-lg">
            <Heart size={24} fill="currentColor" />
          </span>
          <h2 className="mt-8 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
            아직 모르는 서로의 이야기가
            <br />
            <span className="text-[#74A8D5] text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
              있습니다.
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-md text-lg leading-8 text-[#736b66]">
            질문 하나로, 오늘 함께하는 사람과
            <br />
            새로운 이야기를 시작해보세요.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#272321] px-6 py-4 font-medium text-white transition-transform hover:-translate-y-1 sm:w-auto"
            >
              <Smartphone size={18} /> iOS용 다운로드 <ArrowRight size={17} />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#272321] px-6 py-4 font-medium text-[#272321] transition-transform hover:-translate-y-1 sm:w-auto"
            >
              <Smartphone size={18} /> Android용 다운로드{" "}
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function ArrowUpRight() {
  return <ArrowRight className="-rotate-45" size={20} />;
}

// keep the component file self-contained while preserving lucide's tree-shaking
void ArrowUpRight;
