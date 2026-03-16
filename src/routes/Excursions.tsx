import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Excursions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Gallery"!</div>
}
