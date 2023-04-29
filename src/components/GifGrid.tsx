import { Images } from '../interfaces/images'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import PropTypes from 'prop-types';

export const GifGrid = ({ category }: any) => {
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h2 className="font-bold text-xl mt-2 mb-2">{category}</h2>
            {
              isLoading && (<h1>Cargando!!</h1>)
            }
            <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((img: Images) => (
                    <GifItem key={img.id} {...img} />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes ={
    category: PropTypes.string.isRequired
}
