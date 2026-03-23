import '../css/Containers.css'
interface CarouselItemProps {
    id: number,
    image: string,
    itemName: string,
    description: string
}
function CarouselItem({image, itemName, description}: CarouselItemProps) {

    return (
        <div className="w-64 bg-white text-black flex-shrink-0">
            <img src={image} alt={itemName} className="aspect-square"></img>
            <h1 className="text-xl text-center">{itemName}</h1>
            <p className="text-center">{description}</p>
        </div>
    )
}

export default CarouselItem