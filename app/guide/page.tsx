import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "사용법 안내",
}

const STEPS: { title: string; description: string }[] = [
  {
    title: "할 일 추가",
    description:
      "상단 입력창에 내용을 적고 Enter를 누르세요. 새 할 일은 목록 맨 아래에 추가됩니다.",
  },
  {
    title: "완료 표시",
    description:
      "항목 왼쪽 체크박스를 누르면 완료로 바뀌고 취소선이 그어집니다. 다시 누르면 진행중으로 돌아갑니다.",
  },
  {
    title: "내용 수정",
    description:
      "항목 글자를 더블클릭하면 수정할 수 있습니다. Enter로 저장하고, Esc로 취소하세요.",
  },
  {
    title: "삭제",
    description:
      "항목 오른쪽 휴지통 버튼으로 하나씩 지울 수 있습니다. 완료한 항목은 아래 '완료한 일 지우기'로 한 번에 지울 수 있습니다.",
  },
  {
    title: "필터로 모아 보기",
    description:
      "'전체', '진행중', '완료' 탭으로 원하는 항목만 골라 볼 수 있습니다.",
  },
  {
    title: "저장",
    description:
      "할 일은 이 브라우저에 자동으로 저장됩니다. 다른 브라우저나 기기에서는 보이지 않습니다.",
  },
]

export default function GuidePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">사용법 안내</h1>
      <ol className="flex flex-col gap-4">
        {STEPS.map(({ title, description }, i) => (
          <li key={title} className="flex gap-3">
            <span
              aria-hidden
              className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground"
            >
              {i + 1}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link
        href="/"
        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
      >
        ← 내 할 일로 돌아가기
      </Link>
    </main>
  )
}
