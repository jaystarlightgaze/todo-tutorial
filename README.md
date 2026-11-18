# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의에서 작은 할 일 앱을 직접 만들어 보며 Claude Code 쓰는 법을 배우는 연습용 저장소입니다.

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- 패키지 매니저: bun 1.3.6

## 시작하기

### 준비물

- [Git](https://git-scm.com)
- [Bun](https://bun.sh) 1.3.6 이상 (패키지 매니저 겸 스크립트 실행기)
- [Node.js](https://nodejs.org) 20.9 이상 (Next.js 16 실행에 필요)

설치 여부는 아래 명령으로 확인합니다.

```bash
git --version
bun --version
node --version
```

### 설치와 실행

```bash
git clone https://github.com/jaystarlightgaze/todo-tutorial.git
cd todo-tutorial
bun install
bun dev
```

`bun dev`를 실행하면 개발 서버가 뜨고, 브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속할 수 있습니다. 서버를 끄려면 터미널에서 `Ctrl+C`를 누르세요. 3000번 포트를 이미 쓰고 있으면 Next.js가 다음 빈 포트(예: 3001)로 띄우니, 터미널에 출력된 `Local:` 주소를 확인하세요.

### 잘 설치됐는지 확인

```bash
bun run typecheck  # 타입 검사
bun run lint       # ESLint
bun run test       # 테스트 (Vitest)
```

세 명령이 모두 오류 없이 끝나면 준비가 끝난 것입니다.

### 자주 쓰는 스크립트

```bash
bun dev            # 개발 서버
bun run build      # 프로덕션 빌드
bun run start      # 빌드 결과 실행 (먼저 build 필요)
bun run lint       # ESLint
bun run typecheck  # tsc --noEmit
bun run test       # 테스트 한 번 실행
bun run test:watch # 테스트 감시 모드
bun run format     # Prettier 포맷팅
```

## 레슨별 시작 브랜치

레슨마다 시작 시점의 코드를 `lesson/<레슨 이름>` 브랜치로 제공합니다. 레슨 본문이 안내하는 브랜치로 바꾼 뒤 따라가세요.

```shell
git checkout lesson/claude-md
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button";
```
