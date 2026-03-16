import { createFileRoute } from '@tanstack/react-router'
import Header from '../assets/components/Header'
import "../assets/css/Containers.css"
import React from 'react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <header className="headerContainer grid-cols-[repeat(12,90px_20px)] grid w-full">
                <Header></Header>
                <h3 className="pointer-events-none col-start-7 mb-2 self-end whitespace-nowrap text-white">WE MAKE PEOPLE HAPPIER AND MORE <br />
                    HEALTHY WITH WATER'S HELP
                </h3>
                <h1 className="pointer-events-none col-start-7 mt-9 self-end whitespace-nowrap text-8xl text-white">WE SHOW</h1>
                <hr className="w-3xl mt-18 col-start-15 pointer-events-none h-[2px] justify-self-start bg-white text-xl text-white"></hr>
                <h2 className="pointer-events-none col-start-13 self-end whitespace-nowrap text-2xl text-white"> THE COAST OF DENMARK AND <br/>
                GO FURTHER INTO THE SEA</h2>
            </header> 
            <article className="grid-cols-[repeat(12,90px_20px)] text-drwa-grey grid w-full bg-white">
                <h1 className="pointer-events-none col-start-7 whitespace-nowrap text-7xl">SERVICES</h1>
                <p></p>
                <a>READ MORE</a>
            </article>
        </>
    )
}
