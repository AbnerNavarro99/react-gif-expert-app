import React from 'react'

export default function GifGridItem({ id, title, url }) {
    // console.log(img);
    return (
        <li
            className='card animate__animated animate__fadeIn'
        >
            <img
                src={url}
                alt={title}
                width='250'
            />

            <p>{title}</p>
        </li>
    )
}
