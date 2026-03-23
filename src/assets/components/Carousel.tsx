import CarouselItem from './CarouselItem.tsx'

function Carousel({ items }: { items: CarouselItem[] }) {

    return (
        <div className="relative md:w-full col-span-full xs:col-start-1 xs:w-200 md:col-start-5">
            <div className="flex overflow-x-auto gap-6 p-4 no-scrollbar snap-x snap-mandatory">
                {items.map((item) => (<div key={item.id}>
                    <CarouselItem id={item.id}
                        image={item.image}
                        itemName={item.itemName}
                        description={item.description}>
                    </CarouselItem>
                </div>))}
            </div>
        </div>
        
    )
}

export default Carousel
