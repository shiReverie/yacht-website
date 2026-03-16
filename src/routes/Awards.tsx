import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Awards')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Awards"!</div>
}
