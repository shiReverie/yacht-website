import "../../assets/css/Containers.css"

function Footer() {

    return (
        <div className="grid
        xs:grid-cols-[repeat(2,140px_20px)]
        sm:grid-cols-[repeat(2,140px_20px)]
        md:grid-cols-[repeat(6,100px_20px)]
        lg:grid-cols-[repeat(12,90px_20px)] md:w-full xs:w-200 bg-dwraGrey text-white">
            <h1 className="pointer-events-none xs:col-start-2 lg:col-start-7 whitespace-nowrap xs:text-4xl md:text-6xl lg:text-7xl">CONTACT US</h1>
            <p className="pointer-events-none xs:col-start-2 lg:col-start-16 row-start-2 whitespace-nowrap mt-10 text-xl">swra@info.com</p>
            <p className="pointer-events-none xs:col-start-2 lg:col-start-16 row-start-3 whitespace-nowrap mt-10 text-xl">+1 (999) 999-9999</p>
            <h2 className="pointer-events-none xs:col-start-2 lg:col-start-16 row-start-4 whitespace-nowrap mt-10 xs:text-xl md:text-2xl">Contact us if you want to discuss a trip <br />
            or offer cooperation</h2>
            <a className="xs:col-start-2 lg:col-start-16 row-start-5 whitespace-nowrap mt-10 text-2xl zoomin">Instagram</a>
            <a className="xs:col-start-2 lg:col-start-16 row-start-6 whitespace-nowrap mt-10 text-2xl zoomin">Facebook</a>
            <a className="xs:col-start-2 lg:col-start-16 row-start-7 whitespace-nowrap mt-10 text-2xl zoomin">Twitter</a>
        </div>

    )
}

export default Footer