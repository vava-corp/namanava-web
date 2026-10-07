export function SiteFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#eee5dd] bg-[#f7fbff]/90 px-6 py-6 backdrop-blur lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-[#978a81] sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-semibold text-[#272321]">같이</span>
        <span className="text-xs">
          질문 하나로 시작하는, 서로를 알아가는 시간
        </span>
        <span className="text-xs">© 2026 나만바</span>
        <a
          href="/privacy"
          className="text-xs transition-colors hover:text-[#173047]"
        >
          개인정보 처리방침
        </a>
      </div>
    </footer>
  );
}
