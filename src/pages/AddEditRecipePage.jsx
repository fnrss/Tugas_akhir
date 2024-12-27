import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AddEditRecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image: null, // Diubah menjadi null untuk file
    ingredients: "",
    steps: "",
  });
  const [preview, setPreview] = useState(null); // Untuk pratinjau gambar

  useEffect(() => {
    if (id) {
      fetch("/src/data/recipes.json")
        .then((response) => response.json())
        .then((data) => {
          const foundRecipe = data.find((item) => item.id === parseInt(id));
          if (foundRecipe) {
            setFormData({
              ...foundRecipe,
              image: null, // Reset file input
            });
            setPreview(foundRecipe.image); // Tampilkan URL gambar lama di pratinjau
          }
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file)); // Tampilkan pratinjau gambar
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please upload an image!");
      return;
    }

    // Simpan data ke file JSON di backend (mocked di sini)
    console.log("Form data submitted:", formData);
    navigate("/");
  };

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 hover:underline"
      >
        Back
      </button>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-4 mt-4">
        <h1 className="text-2xl font-bold mb-4">
          {id ? "Edit Recipe" : "Add Recipe"}
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-3 py-2 border rounded"
          />
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="ingredients"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="steps">
            Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddEditRecipePage;