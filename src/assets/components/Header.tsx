import { Link } from '@tanstack/react-router'
import React from 'react'
import '../../index.css'
import '../../routes/Excursions'
import '../../routes/ContactUs.tsx'
import '../../routes/LearnMore.tsx'

function Header() {

    return (
        <div className="mb-4 me-8 ms-8 mt-4 flex w-full flex-col gap-3 text-white">
            <h1 className="text-3xl">DWRA</h1>
            <nav className="flex flex-col whitespace-nowrap text-xl">
                <Link to="/Excursions" className="underlined">Excursions</Link>
                <Link to="/Awards" className="underlined">Awards</Link>
                <Link to="/ContactUs" className="underlined">Contact Us</Link>
                <Link to="/RentnChill" className="underlined">Rent&Chill</Link>
                <Link to="/LearnMore" className="underlined">Learn More</Link>
            </nav>
        </div>
        
    )
}

export default Header