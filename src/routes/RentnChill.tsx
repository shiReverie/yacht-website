import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import Header from '../assets/components/Header'
import Carousel from '../assets/components/Carousel'
import Footer from '../assets/components/Footer'

interface rentYachts {
    id: number,
    name: string,
    price: number,
    cover: string,
}

const fetchRent = async () => {
    const response = await fetch('https://dummyjson.com/c/2e9d-b77e-4030-8709');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    return data.rentYachts.map((r: rentYachts) => ({
        id: r.id,
        itemName: r.name,
        description: `Price: $${r.price}`,
        image: r.cover
    }));
};

export const Route = createFileRoute('/RentnChill')({
    component: RouteComponent,
})

function RouteComponent() {

    const { data, isLoading, error } = useQuery({
        queryKey: ['rentYachts'],
        queryFn: fetchRent,
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
