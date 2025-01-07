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
      className="relative flex flex-col min-h-screen"
      style={{
        backgroundImage: `url('/images/kopi3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bottom-16 bg-black bg-opacity-50"></div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to <span className="text-yellow-300">CoffeeVerse</span>
        </h1>
        <p className="text-lg text-gray-200 max-w-3xl mb-8">
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
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">Best Recipes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recipes.slice(0, 3).map((recipe) => (
              <div
                key={recipe.id}
                className="bg-yellow-50 rounded-lg shadow-md p-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="w-full h-40 overflow-hidden flex items-center justify-center bg-gray-100 rounded-lg transition-all duration-300 ease-in-out">
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
                <h3 className="text-xl font-bold text-yellow-700 mt-2">
                  {recipe.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {recipe.ingredients.split(",").slice(0, 3).join(", ")}...
                </p>
                <div className="mt-4">
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="text-yellow-700 text-sm font-medium hover:underline"
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
