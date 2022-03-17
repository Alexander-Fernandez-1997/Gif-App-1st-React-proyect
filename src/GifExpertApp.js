import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  // const cagetegories = ["One punch", "Samurai X", "Dragon Ball"];
  // const [categories, setCategories] = useState(["One punch"]);
  const [categories, setCategories] = useState(defaultCategories);

  // const handleAdd = () => {
  //   let serie = "HunterXHunter";

  //   // setCategories([serie, ...categories]);

  //   setCategories((categories) => [...categories, serie]);
  // };

  return (
    <>
      <h2>Top 10 gifs</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
