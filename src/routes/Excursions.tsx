import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import Header from '../assets/components/Header'
import Carousel from '../assets/components/Carousel'
import Footer from '../assets/components/Footer'

interface excursions {
    id: number,
    name: string,
    price: number,
    cover: string,
}

const fetchExcursions = async () => {
    const response = await fetch('https://dummyjson.com/c/2a34-dcc0-4cba-9f64');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    return data.excursions.map((exc: excursions) => ({
        id: exc.id,
        itemName: exc.name,
        description: `Price: $${exc.price}`,
        image: exc.cover
    }));
};

export const Route = createFileRoute('/Excursions')({
  component: RouteComponent,
})

function RouteComponent() {

    const { data, isLoading, error } = useQuery({
        queryKey: ['excursions'],
        queryFn: fetchExcursions,
    });

    if (isLoading) return <div className="p-10 animate-pulse text-2xl">Loading items...</div>;
    if (error) return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>;

    return (
        <>
            <Header></Header>
            <article>
                {data && <Carousel items={data} />}
            </article>
            <Footer></Footer>
        </>
    )
}
