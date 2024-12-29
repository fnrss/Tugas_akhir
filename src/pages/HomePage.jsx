import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import supabase from "../Config/SupabaseClient";
import Footer from "../components/Footer"; // Import Footer

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
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url('/kopi2.jpg')`, // Ganti dengan path gambar Anda
        backgroundSize: "cover", // Menutup seluruh area
        backgroundPosition: "center", // Fokus pada tengah gambar
        backgroundRepeat: "no-repeat", // Tidak mengulangi gambar
        backgroundAttachment: "fixed", // Membuat gambar tetap saat scroll
      }}
    >
      <div className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-extrabold text-yellow-600 mb-6 text-center">
            Welcome to <span className="text-yellow-700">CoffeeVerse</span>
          </h1>
          <h2
            className="text-3xl font-bold text-yellow-700 mb-4 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Best Recipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.slice(0, 3).map((recipe) => (
              <div
                key={recipe.id}
                className="bg-yellow-50 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
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
                <h2 className="text-xl font-semibold text-yellow-700 mt-4">
                  {recipe.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {recipe.ingredients.split(",").slice(0, 2).join(",")}...
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="text-yellow-600 font-medium hover:underline"
                  >
                    View
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
