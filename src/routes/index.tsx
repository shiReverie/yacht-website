import { createFileRoute, Link } from '@tanstack/react-router';
import Header from '../assets/components/Header';
import Carousel from '../assets/components/Carousel';
import Footer from '../assets/components/Footer';
import "../assets/css/Containers.css";

const teamMembers = [
    {
        id: 1,
        image: "/tm1.png",
        itemName: "Ivar Mö",
        description: "Founder of the company"
    },
    {
        id: 2,
        image: "/tm2.png",
        itemName: "Martin Andersen",
        description: "Marketing and SEO director"
    },
    {
        id: 3,
        image: "/tm3.png",
        itemName: "Inge Storm",
        description: "Business developer"
    },
    {
        id: 4,
        image: "/tm4.png",
        itemName: "Jan Storm",
        description: "Managment"
    }
];

export const Route = createFileRoute('/')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>

            <header className="headerContainer grid w-full text-white
        xs:grid-cols-[repeat(2,140px_20px)]
        sm:grid-cols-[repeat(2,140px_20px)]
        md:grid-cols-[repeat(6,100px_20px)]
        lg:grid-cols-[repeat(12,90px_20px)]">
                <Header />
                <h3 className="pointer-events-none xs:col-start-2 xs:text-sm xs:row-start-2 lg:col-start-7 mb-2 self-end whitespace-nowrap">
                    WE MAKE PEOPLE HAPPIER AND MORE <br />
                    HEALTHY WITH WATER'S HELP
                </h3>
                <h1 className="pointer-events-none xs:col-start-2 xs:text-5xl xs:row-start-3 lg:col-start-7 mt-9 self-end whitespace-nowrap lg:text-8xl">
                    WE SHOW
                </h1>
                <hr className="w-3xl mt-18 xs:col-start-2 xs:row-start-4 lg:row-start-3 lg:col-start-15 pointer-events-none h-[2px] justify-self-start bg-white text-xl" />
                <h2 className="pointer-events-none xs:col-start-2 xs:row-start-5 xs:text-md lg:col-start-13 self-end whitespace-nowrap lg:text-2xl mb-10">
                    THE COAST OF DENMARK AND <br />
                    GO FURTHER INTO THE SEA
                </h2>
            </header>

            <article className="grid w-full bg-white pt-10
                xs:grid-cols-[repeat(2,140px_20px)]
                sm:grid-cols-[repeat(2,140px_20px)]
                md:grid-cols-[repeat(6,100px_20px)]
                lg:grid-cols-[repeat(12,90px_20px)]">
                <h1 className="pointer-events-none xs:col-start-2 lg:col-start-7 whitespace-nowrap xs:text-4xl md:text-6xl lg:text-7xl">
                    SERVICES
                </h1>
                <p className="pointer-events-none xs:col-start-2 lg:col-start-7 whitespace-nowrap mt-8 mb-8 xs:text-base md:text-lg lg:text-xl text-black">
                    We provide services for sailing trainings,<br />
                    organize short excursions in open sea, <br />
                    also, anyone can rent a boat for a party.
                </p>
                <Link to="/Excursions" className="underline xs:col-start-2 lg:col-start-7 self-end mb-3 zoomin text-black xs:text-sm lg:text-base">
                    READ MORE
                </Link>
                <img
                    src="/yacht2.png"
                    alt="yacht"
                    className="xs:col-start-2 xs:col-span-7 xs:mt-5 lg:col-start-17 lg:col-span-9 w-full h-auto lg:-mt-35"
                />
            </article>

            <article className="grid w-[200%] bg-dwraGrey text-white pt-7
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

            <article className="grid w-full bg-white pt-7
        xs:grid-cols-[repeat(2,140px_20px)]
        sm:grid-cols-[repeat(2,140px_20px)]
        md:grid-cols-[repeat(6,100px_20px)]
        lg:grid-cols-[repeat(12,90px_20px)]">
                <h1 className="pointer-events-none xs:col-start-2 lg:col-start-7 whitespace-nowrap xs:text-4xl md:text-6xl lg:text-7xl">
                    GALLERY
                </h1>
                <p className="pointer-events-none xs:col-start-2 md:col-start-10 xl:col-start-19 whitespace-nowrap mb-7 mt-22 text-xl text-black">
                    All cabins in our shipsare furnished<br />
                    to the highest quality standard.<br />
                    Finished only with natural materials.
                </p>
                <div className="md:col-span-full md:grid md:grid-cols-3 lg:w-screen md:col-start-4 lg:col-start-1 mb-5 mt-5 
xs:flex xs:flex-col xs:mt-17 xs:w-100 xs:col-start-2">
                    <img src="/gal1.png" className="w-full object-cover aspect-square" />
                    <img src="/gal2.png" className="w-full object-cover aspect-square" />
                    <img src="/gal3.png" className="w-full object-cover aspect-square" />
                    <img src="/gal4.png" className="w-full object-cover aspect-square" />
                    <img src="/gal5.png" className="w-full object-cover aspect-square" />
                    <img src="/gal7.png" className="w-full object-cover aspect-square" />
                    <img src="/gal6.png" className="col-span-3 w-full object-cover object-center h-150" />
                </div>
                <p className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap text-xl text-black mb-7">
                    Discover more photos<br />
                    on our Instagram page.
                </p>
                <p className="pointer-events-none xs:col-start-2 md:col-start-7 xl:col-start-19 whitespace-nowrap text-xl text-black mb-7">
                    Each room has conditions<br />
                    for chilling and working
                </p>
            </article>

            <article className="grid w-full bg-white pt-7
        xs:grid-cols-[repeat(2,140px_20px)]
        sm:grid-cols-[repeat(2,140px_20px)]
        md:grid-cols-[repeat(6,100px_20px)]
        lg:grid-cols-[repeat(12,90px_20px)]">
                <h1 className="pointer-events-none xs:col-start-2 lg:col-start-7 whitespace-nowrap xs:text-4xl md:text-6xl lg:text-7xl">
                    HOW IT WORKS?
                </h1>
                <h2 className="pointer-events-none xs:col-start-2 md:col-start-7 md:row-start-2 whitespace-nowrap sm:text-2xl md:text-3xl lg:text-3xl text-black mt-7">
                    01.<br />
                    APPLICATION
                </h2>
                <p className="pointer-events-none xs:col-start-2 md:col-start-7 sm:text-xl xs:row-start-auto md:row-start-3 whitespace-nowrap text-xl text-black mt-7">
                    You choose the desired option of spending<br />
                    and leave contacts for communication.
                </p>
                <hr className="pointer-events-none xs:col-start-2 xs:hidden md:block md:col-start-7 xs:row-start-auto md:row-start-4 w-md bg-black h-[1px] text-black mt-5" />
                <h2 className="pointer-events-none xs:col-start-2 md:col-start-17 md:row-start-2 whitespace-nowrap sm:text-2xl md:text-3xl lg:text-3xl text-black mt-7">
                    02.<br />
                    CONNECTION
                </h2>
                <p className="pointer-events-none xs:col-start-2 sm:text-xl md:col-start-17 xs:row-start-auto md:row-start-3 whitespace-nowrap text-xl text-black mt-7">
                    Our managers contact you and you make <br />
                    a payment if you are suitable with the conditions.
                </p>
                <hr className="pointer-events-none xs:hidden md:block xs:col-start-2 md:col-start-17 xs:row-start-auto md:row-start-4 w-md bg-black h-[1px] text-black mt-5" />
                <h2 className="pointer-events-none xs:col-start-2 md:col-start-7 whitespace-nowrap sm:text-2xl md:text-3xl lg:text-3xl text-black mt-7">
                    03.<br />
                    PREPARATION
                </h2>
                <p className="pointer-events-none xs:col-start-2 sm:text-xl md:col-start-7 md:row-start-5 xs:row-start-auto md:row-start-6 whitespace-nowrap text-xl text-black mt-7">
                    We issue a standard ticket for the <br />
                    excursion or prepare a yacht for you <br />
                    for rent.
                </p>
                <h2 className="pointer-events-none xs:col-start-2 md:col-start-17 md:row-start-5 whitespace-nowrap sm:text-2xl md:text-3xl lg:text-3xl text-black mt-7">
                    04.<br />
                    PASSAGE
                </h2>
                <p className="pointer-events-none xs:col-start-2 sm:text-xl md:col-start-17 xs:row-start-auto md:row-start-6 mt-7 whitespace-nowrap text-xl text-black">
                    We meet you on the appointed day and time <br />
                    and provide services at the top level.
                </p>
                <img
                    src="/yacht3.png"
                    className="xs:col-start-2 xs:col-span-full xs:h-50 md:col-start-1 md:col-end-30 md:h-150 w-full object-cover mt-7"
                />
            </article>

            <article className="grid w-full bg-white pt-7
        xs:grid-cols-[repeat(2,140px_20px)]
        sm:grid-cols-[repeat(2,140px_20px)]
        md:grid-cols-[repeat(6,100px_20px)]
        lg:grid-cols-[repeat(12,90px_20px)]">
                <h1 className="pointer-events-none xs:col-start-2 lg:col-start-7 whitespace-nowrap xs:text-4xl md:text-6xl lg:text-7xl">
                    MEET OUR FANTASTIC <br />
                    TEAM
                </h1>
                <hr className="xs:col-start- md:col-start-10 w-[1000px] mt-25 pointer-events-none h-[2px] justify-self-start bg-dwraGrey text-xl" />
                <Carousel items={teamMembers} />
            </article>

            <Footer></Footer>
        </>
    );
}
