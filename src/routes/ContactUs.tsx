import { createFileRoute } from '@tanstack/react-router'
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'

export const Route = createFileRoute('/ContactUs')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <Header></Header>
            <Footer></Footer>
        </>
    )
}
