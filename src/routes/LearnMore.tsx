import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/LearnMore')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/LearnMore"!</div>
}
