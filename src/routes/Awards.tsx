import { createFileRoute } from '@tanstack/react-router'
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'

export const Route = createFileRoute('/Awards')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
           <Header></Header>
            <article className="grid w-[200%] pt-7
        xs:grid-cols-[repeat(2,140px_20px)]
        sm:grid-cols-[repeat(2,140px_20px)]
        md:grid-cols-[repeat(6,100px_20px)]
        lg:grid-cols-[repeat(12,90px_20px)]">
                <h1 className="pointer-events-none xs:col-start-2 lg:col-start-7 whitespace-nowrap xs:text-4xl md:text-6xl lg:text-7xl">
                    ABOUT US
                </h1>
                <h2 className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap sm:text-3xl md:text-4xl lg:text-5xl mt-20">
                    6500
                </h2>
                <p className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap sm:text-3xl md:text-4xl lg:text-sm mb-10">
                    Completed trains
                </p>
                <h2 className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap sm:text-3xl md:text-4xl lg:text-5xl">
                    110
                </h2>
                <p className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap sm:text-3xl md:text-4xl lg:text-sm mb-10">
                    Trainers
                </p>
                <h2 className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap sm:text-3xl md:text-4xl lg:text-5xl">
                    7%
                </h2>
                <p className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap sm:text-3xl md:text-4xl lg:text-sm mb-10">
                    Increase
                </p>
                <h2 className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap sm:text-3xl md:text-4xl lg:text-5xl">
                    &lt;28K
                </h2>
                <p className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap sm:text-3xl md:text-4xl lg:text-sm mb-10">
                    Satisfied customers
                </p>
                <h2 className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap sm:text-3xl md:text-4xl lg:text-5xl">
                    40
                </h2>
                <p className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap sm:text-3xl md:text-4xl lg:text-sm mb-10">
                    Ships
                </p>
                <p className="pointer-events-none xs:col-start-2 md:col-start-10 xl:col-start-19 whitespace-nowrap mb-7 xs:text-xs md:text-md lg:text-xl">
                    In 2015 Ivar Mö, as a professional kayak roader,<br />
                    opened his own small boat rental business. <br />
                    Half a year later he became a world champion <br />
                    in his sport, what helped to find sponsors.
                </p>
                <p className="pointer-events-none xs:col-start-2 md:col-start-10 xl:col-start-19 whitespace-nowrap mb-7 xs:text-xs md:text-md lg:text-xl">
                    He patented several drawings for future ships.<br />
                    One year later danish engineers designed<br />
                    the first kayaks and yachts for Ivar<br />
                    and we started to train people.
                </p>
                <p className="pointer-events-none xs:col-start-2 md:col-start-10 xl:col-start-19 whitespace-nowrap mb-7 xs:text-xs md:text-md lg:text-xl">
                    We became the first company in the Denmark<br />
                    maritime market to offer excursions<br />
                    teach with threetypes of rowing<br />
                    in boats and kayaks.
                </p>
            </article>
            <Footer></Footer>
        </>
    )
}
