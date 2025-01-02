import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import supabase from "../Config/SupabaseClient";
import Footer from "../components/Footer";

const Homepage = () => {
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

  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200"
    >
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center bg-yellow-100 py-16 px-6">
        <h1 className="text-5xl font-extrabold text-yellow-600 mb-4">
          Welcome to <span className="text-yellow-700">CoffeeVerse</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          Discover the finest coffee recipes, tips, and tricks to perfect your brewing skills.
        </p>
        <Link
          to="/recipes"
          className="bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-all duration-300"
        >
          Explore Recipes
        </Link>
      </div>

      {/* Featured Recipes Section */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-4xl font-bold text-yellow-700 mb-6">Best Recipes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.slice(0, 3).map((recipe) => (
              <div
                key={recipe.id}
                className="bg-yellow-50 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-gray-100 rounded-lg transition-all duration-300 ease-in-out">
                  {recipe.image ? (
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="object-cover w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-90"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">No Image</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-yellow-700 mt-4">
                  {recipe.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {recipe.ingredients.split(",").slice(0, 3).join(", ")}...
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="text-yellow-700 font-medium hover:underline"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
