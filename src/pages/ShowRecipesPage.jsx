import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import supabase from "../Config/SupabaseClient";

const ShowRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const { data, error } = await supabase.from("items").select("*");

    if (error) {
      console.error("Error fetching recipes:", error);
      return;
    }

    setRecipes(
      data.map((recipe) => ({
        ...recipe,
        image: recipe.image || null,
      }))
    );
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("items").delete().eq("id", id);

    if (error) {
      console.error("Error deleting recipe:", error);
      return;
    }

    fetchRecipes();
  };

  return (
    <div className="p-6 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-5xl font-extrabold text-yellow-600 mb-8 text-center">
          Explore <span className="text-yellow-700">Coffee Recipes</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-yellow-50 rounded-lg shadow-md p-6 hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-gray-100 rounded-lg">
                {recipe.image ? (
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">No Image</span>
                )}
              </div>
              <h2 className="text-2xl font-bold text-yellow-700 mt-4">
                {recipe.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                {recipe.ingredients.split(",").slice(0, 3).join(", ")}...
              </p>
              <div className="mt-6 flex justify-between items-center">
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="text-yellow-700 font-medium hover:underline"
                >
                  View
                </Link>
                <Link
                  to={`/edit/${recipe.id}`}
                  className="text-blue-500 font-medium hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(recipe.id)}
                  className="text-red-500 font-medium hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            to="/add"
            className="bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-700 transition-all duration-300"
          >
            Add New Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowRecipesPage;
