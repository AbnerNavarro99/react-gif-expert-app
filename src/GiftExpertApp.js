import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function GiftExpertApp() {

  const [categories, setCategories] = useState(['One punch']);



  return (
    <>
      <h2>Gift Expert App</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ol>
        {
          categories.map((category) => {
            return (
              <GifGrid key={category} category={category} />
            );
          })
        }
      </ol>
    </>
  )
}
