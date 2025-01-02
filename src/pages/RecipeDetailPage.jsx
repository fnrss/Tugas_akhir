import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import supabase from "../Config/SupabaseClient";

const RecipeDetailPage = () => {
  console.log(supabase);
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [relatedRecipes, setRelatedRecipes] = useState([]);

  useEffect(() => {
    fetchRecipe();
    fetchRelatedRecipes();
  }, [id]);

  // Fetch data dari Supabase untuk resep saat ini
  const fetchRecipe = async () => {
    const { data, error } = await supabase
      .from("items")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching recipe:", error);
      return;
    }

    setRecipe(data);
  };

  // Fetch data dari Supabase untuk resep terkait
  const fetchRelatedRecipes = async () => {
    const { data, error } = await supabase
      .from("items")
      .select("id, name, image")
      .neq("id", id) // Exclude current recipe
      .limit(3); // Batasi 3 resep terkait

    if (error) {
      console.error("Error fetching related recipes:", error);
      return;
    }

    setRelatedRecipes(data);
  };

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-extrabold text-yellow-700 mb-6 text-center">
          {recipe.name}
        </h1>
        <div className="flex justify-center mb-6">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full max-w-md h-64 object-contain rounded shadow-md"
          />
        </div>

        <h2 className="text-lg font-bold text-gray-800">Ingredients</h2>
        <p className="mb-4 text-gray-700">{recipe.ingredients}</p>
        <h2 className="text-lg font-bold text-gray-800">Steps</h2>
        <p className="mb-6 text-gray-700">{recipe.steps}</p>
        <div className="flex justify-end space-x-4">
          {/* Redirect to the edit page when clicking the "Edit" button */}
          <button
            onClick={() => navigate(`/edit/${id}`)} // Navigate to the edit page
            className="bg-yellow-500 text-white px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
          >
            Edit
          </button>
          <Link
            to="/recipes"
            className="bg-gray-500 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600 transition"
          >
            Back to Recipes
          </Link>
        </div>
      </div>

      {/* Related recipes section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-yellow-700 mb-4">More Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedRecipes.map((related) => (
            <div
              key={related.id}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="w-full h-48 bg-gray-100 flex justify-center items-center">
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{related.name}</h3>
                <Link
                  to={`/recipe/${related.id}`}
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
