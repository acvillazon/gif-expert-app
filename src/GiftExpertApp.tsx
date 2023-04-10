import { useState } from "react";
import { AddCategories, GifGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const addCategory = (category: string) => {
    if(categories.includes(category)) return;
    setCategories([category,...categories]);
  };

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold">Gift Expert App</h1>
      
      <AddCategories
        onNewCategories={ addCategory }
      />
      
      {categories.map((category) => (
        <GifGrid 
          key={`${category}`} 
          category={category}
        />
      ))}

    </div>
  );
};
