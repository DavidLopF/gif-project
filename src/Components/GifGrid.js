import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'


const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category)    


    return (
        <>
            <li className='box'>

                <h3 className='subtitle is-1'>{category}</h3>
                {loading && <p className='title is-4'>Loading...</p>}   
                <div className='card-grid' >

                    {
                        images.map(img => (
                            <GifGridItem key={img.id} {...img} />
                        ))

                    }

                </div>
            </li>

        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid