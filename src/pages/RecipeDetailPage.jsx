import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    ingredients: "",
    steps: "",
  });

  useEffect(() => {
    fetch("/src/data/recipes.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        if (selectedRecipe) {
          setRecipe(selectedRecipe);
          setFormData(selectedRecipe);
        }
      });
  }, [id]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Updated Recipe:", formData);
    setRecipe(formData);
    setIsEditing(false);
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
          {isEditing ? "Edit Recipe" : recipe.name}
        </h1>
        <div className="flex justify-center mb-6">
          <img
            src={
              formData.image instanceof File
                ? URL.createObjectURL(formData.image)
                : recipe.image
            }
            alt={recipe.name}
            className="w-full max-w-md h-64 object-contain rounded shadow-md"
          />
        </div>

        {isEditing ? (
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.files[0] })
                }
                className="w-full"
              />
            </div>
            <div>
              <label
                htmlFor="ingredients"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Ingredients
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label
                htmlFor="steps"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Steps
              </label>
              <textarea
                id="steps"
                name="steps"
                value={formData.steps}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleEditToggle}
                className="bg-gray-500 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <h2 className="text-lg font-bold text-gray-800">Ingredients</h2>
            <p className="mb-4 text-gray-700">{recipe.ingredients}</p>
            <h2 className="text-lg font-bold text-gray-800">Steps</h2>
            <p className="mb-6 text-gray-700">{recipe.steps}</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleEditToggle}
                className="bg-yellow-500 text-white px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <Link
                to="/recipes"
                className="bg-gray-500 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600 transition"
              >
                Back to Recipe
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeDetailPage;
