import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { LoadingComponent } from './shared/LoadingComponent'

export const GifGrid = ({ category }: { category: string }) => {
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {isLoading ? (
                <LoadingComponent />
            ) : (
                <div className="card-grid">
                    {images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))}
                </div>
            )}
        </>
    )
}
