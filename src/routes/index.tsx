import { createFileRoute,Link } from '@tanstack/react-router'
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
                <h2 className="pointer-events-none col-start-13 self-end whitespace-nowrap text-2xl text-white mb-10"> THE COAST OF DENMARK AND <br/>
                GO FURTHER INTO THE SEA</h2>
            </header> 
            <article className="grid-cols-[repeat(12,90px_20px)] grid w-full bg-white pt-7">
                <h1 className="pointer-events-none col-start-7 whitespace-nowrap text-7xl">SERVICES</h1>
                <p className="pointer-events-none col-start-7 whitespace-nowrap mt-15 mb-15 text-xl text-black">We provide services for sailing trainings,<br />
                    organize short excursions in open sea, <br />
                also, anyone can rent a boat for a party.</p>
                <Link to="/Excursions" className="underline col-start-7 self-end mb-3 zoomin text-black">READ MORE</Link>
                <img src="../../../public/yacht2.png" alt="yacht" className="col-start-17 w-full col-span-9 h-auto -mt-35"></img>
            </article>
            <article className="grid-cols-[repeat(12,90px_20px)] grid w-full bg-dwraGrey text-white pt-7">
                <h1 className="pointer-events-none col-start-17 whitespace-nowrap text-7xl">ABOUT US</h1>
                <h2 className="pointer-events-none col-start-7 whitespace-nowrap text-5xl">6500</h2>
                <p className="pointer-events-none col-start-7 whitespace-nowrap mb-10">Completed trains</p>
                <h2 className="pointer-events-none col-start-7 whitespace-nowrap text-5xl">110</h2>
                <p className="pointer-events-none col-start-7 whitespace-nowrap mb-10">Trainers</p>
                <h2 className="pointer-events-none col-start-7 whitespace-nowrap text-5xl">7%</h2>
                <p className="pointer-events-none col-start-7 whitespace-nowrap mb-10">Increase</p>
                <h2 className="pointer-events-none col-start-7 whitespace-nowrap text-5xl">&lt;28K</h2>
                <p className="pointer-events-none col-start-7 whitespace-nowrap mb-10">Satisfied customers</p>
                <h2 className="pointer-events-none col-start-7 whitespace-nowrap text-5xl">40</h2>
                <p className="pointer-events-none col-start-7 whitespace-nowrap mb-10">Ships</p>
                <p className="pointer-events-none col-start-19 whitespace-nowrap mb-7 text-xl">
                    In 2015 Ivar Mö, as a professional kayak roader,<br />
                    opened his own small boat rental business. <br />
                    Half a year later he became a world champion <br />
                in his sport, what helped to find sponsors.
                </p>
                <p className="pointer-events-none col-start-19 whitespace-nowrap mb-7 text-xl">
                    He patented several drawings for future ships.<br />
                    One year later danish engineers designed<br />
                    the first kayaks and yachts for Ivar<br />
                    and we started to train people.
                </p>
                <p className="pointer-events-none col-start-19 whitespace-nowrap mb-7 text-xl">
                    We became the first company in the Denmark<br />
                    maritime market to offer excursions<br />
                    teach with threetypes of rowing<br />
                    in boats and kayaks.
                </p>
            </article>
            <article className="grid-cols-[repeat(12,90px_20px)] grid w-full bg-white pt-7">
                <h1 className="pointer-events-none col-start-7 whitespace-nowrap text-7xl">Gallery</h1>
                <p className="pointer-events-none col-start-19 whitespace-nowrap mb-7 mt-22 text-xl text-black">
                    All cabins in our shipsare furnished<br />
                    to the highest quality standard.<br />
                Finished only with natural materials.</p>
                <div className="col-span-full grid grid-cols-3 w-screen col-start-1 mb-5 mt-5">
                    <img src="../../../public/gal1.png" className="w-full object-cover aspect-square"></img>
                    <img src="../../../public/gal2.png" className="w-full object-cover aspect-square"></img>
                    <img src="../../../public/gal3.png" className="w-full object-cover aspect-square"></img>
                    <img src="../../../public/gal4.png" className="w-full object-cover aspect-square"></img>
                    <img src="../../../public/gal5.png" className="w-full object-cover aspect-square"></img>
                    <img src="../../../public/gal7.png" className="w-full object-cover aspect-square"></img>
                    <img src="../../../public/gal6.png" className="col-span-3 w-full object-cover object-center h-150"></img>
                </div>
                <p className="pointer-events-none col-start-7 whitespace-nowrap text-xl text-black mb-7">
                    Discover more photos<br />
                on our Instagram page.
                </p>
                <p className="pointer-events-none col-start-19 whitespace-nowrap text-xl text-black mb-7">
                    Each room has conditions<br />
                for chilling and working</p>
            </article>
        </>
    )
}
