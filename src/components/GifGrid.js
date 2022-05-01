import React from 'react'
import { useFecthGifs } from '../hooks/useFecthGifs'
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }) {

    const {data:images, loading} = useFecthGifs(category);
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p>Loading</p>}
            <div className='card-grid animate__animated animate__flash'>
                <ul>
                    {
                        images.map(img => {
                            return <GifGridItem key={img.id} {...img} />
                        })
                    }
                </ul>
            </div>
        </>
    )
}
