import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

function GifExpertApp() {

    const [categories, setCategories] = useState(['rick and morty']);

    return (
        <div>

            <h1 className='title'>Gif Expert App</h1>
            <hr />


            <AddCategory setCategories={setCategories} />


            <ol >
                {
                    categories.map(category => (
                        
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp

