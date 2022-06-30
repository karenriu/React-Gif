import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp =() =>{
    
    
    const [categories, setCategories] = useState (['Rick and morty'])

    //const handleAdd = () =>{
      //  setCategories([...categories, 'Demon Slayer']);
   // }

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>

        
        <ol>
            {
                categories.map(category => (
                    <GifGrid 
                    key={category}
                    category={category}/>
                ))
            }
        </ol>
        

        </>
        

    )
    
}

