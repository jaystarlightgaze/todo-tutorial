import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it } from "vitest"

import { TodoApp } from "@/components/todo-app"

const SEED = [
  { id: "1", text: "장보기", completed: true },
  { id: "2", text: "청소하기", completed: false },
]

describe("완료 칭찬 알림", () => {
  beforeEach(() => {
    window.localStorage.setItem("todos", JSON.stringify(SEED))
  })

  it("1. 할 일을 완료하면 '잘했어요' 알림이 보인다", async () => {
    const user = userEvent.setup()
    render(<TodoApp />)

    await user.click(screen.getByRole("checkbox", { name: "청소하기 완료" }))

    expect(screen.getByRole("status")).toHaveTextContent("잘했어요")
  })

  it("2. 완료를 취소할 때는 알림이 보이지 않는다", async () => {
    const user = userEvent.setup()
    render(<TodoApp />)

    await user.click(screen.getByRole("checkbox", { name: "장보기 완료" }))

    expect(screen.getByRole("status")).not.toHaveTextContent("잘했어요")
  })
})
