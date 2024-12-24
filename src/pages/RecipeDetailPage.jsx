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
    // Simpan perubahan ke file JSON (mocked di sini)
    console.log("Updated Recipe:", formData);
    setRecipe(formData);
    setIsEditing(false);
  };

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {isEditing ? "Edit Recipe" : recipe.name}
      </h1>
      <div className="flex flex-col items-center mb-4">
        <img
          src={
            formData.image instanceof File
              ? URL.createObjectURL(formData.image)
              : recipe.image
          }
          alt={recipe.name}
          className="w-full max-w-md h-64 object-contain rounded"
        />
      </div>

      {isEditing ? (
        <form onSubmit={handleSave} className="bg-white p-4 rounded shadow">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-bold mb-2">
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
          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-sm font-bold mb-2">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="steps" className="block text-sm font-bold mb-2">
              Steps
            </label>
            <textarea
              id="steps"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleEditToggle}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h2 className="text-lg font-bold">Ingredients</h2>
          <p className="mb-4">{recipe.ingredients}</p>
          <h2 className="text-lg font-bold">Steps</h2>
          <p className="mb-4">{recipe.steps}</p>
          <button
            onClick={handleEditToggle}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Edit
          </button>
          <Link
            to="/"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back to Home
          </Link>
        </>
      )}
    </div>
  );
};

export default RecipeDetailPage;
