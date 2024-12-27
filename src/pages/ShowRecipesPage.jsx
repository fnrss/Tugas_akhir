import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data/recipes.json")
      .then((response) => response.json())
      .then((data) =>
        setRecipes(
          data.map((recipe) => ({
            ...recipe,
            image: recipe.image || null, // Mendukung gambar kosong
          }))
        )
      );
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CoffeeVerse</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded shadow p-4 hover:shadow-lg transition"
          >
            <div className="w-150 h-150 overflow-hidden flex items-center justify-center bg-gray-100">
              <img
                src={
                  recipe.image instanceof File
                    ? URL.createObjectURL(recipe.image)
                    : recipe.image
                }
                alt={recipe.name}
                className="max-w-full max-h-full object-contain"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <h2 className="text-lg font-bold mt-2">{recipe.name}</h2>
            <p className="text-sm text-gray-600">
              {recipe.ingredients.split(",").slice(0, 2).join(",")}...
            </p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Link
        to="/edit"
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600"
      >
        Add Recipe
      </Link>
    </div>
  );
};

export default ShowRecipesPage;