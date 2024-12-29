import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../Config/SupabaseClient"; // Import Supabase client

const AddEditItemPage = () => {
  console.log(supabase);
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image: null, // Untuk file gambar
    ingredients: "",
    steps: "",
  });
  const [preview, setPreview] = useState(null); // Untuk pratinjau gambar

  useEffect(() => {
    if (id) {
      fetchItem(id);
    }
  }, [id]);

  // Fetch data item dari Supabase
  const fetchItem = async (id) => {
    const { data, error } = await supabase
      .from("items")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching item:", error);
      return;
    }

    setFormData({
      name: data.name,
      image: null, // Reset input file jika edit
      ingredients: data.ingredients,
      steps: data.steps,
    });
    setPreview(data.image); // Menyimpan URL gambar untuk pratinjau
  };

  // Mengubah data dalam form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Mengubah gambar yang diunggah
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file)); // Menampilkan pratinjau gambar
    }
  };

  // Fungsi untuk mengunggah gambar ke Supabase Storage
  const uploadImage = async (file) => {
    const fileName = `${Date.now()}-${file.name}`; // Nama file unik
    const { data, error } = await supabase.storage
      .from("images") // Nama bucket
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading image:", error.message);
      return null;
    }

    // Ambil URL publik dari file yang diunggah
    const { data: publicData, error: publicError } = supabase.storage
      .from("images")
      .getPublicUrl(data.path);

    if (publicError) {
      console.error("Error getting public URL:", publicError.message);
      return null;
    }

    return publicData.publicUrl;
  };

  // Fungsi submit data (tambah atau edit)
  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = preview; // Gunakan gambar pratinjau jika tidak ada file baru

    if (formData.image) {
      imageUrl = await uploadImage(formData.image); // Upload gambar jika ada file baru
      if (!imageUrl) {
        alert("Error uploading image");
        return;
      }
    }

    const itemData = {
      name: formData.name,
      ingredients: formData.ingredients,
      steps: formData.steps,
      image: imageUrl,
    };

    if (id) {
      // Update data jika ada id
      const { error } = await supabase.from("items").update(itemData).eq("id", id);

      if (error) {
        console.error("Error updating item:", error);
        return;
      }
    } else {
      // Tambah data baru jika tidak ada id
      const { error } = await supabase.from("items").insert(itemData);

      if (error) {
        console.error("Error adding item:", error);
        return;
      }
    }

    navigate("/"); // Arahkan kembali setelah berhasil
  };

  // Fungsi untuk menghapus item
  const handleDelete = async () => {
    const { error } = await supabase.from("items").delete().eq("id", id);
    if (error) {
      console.error("Error deleting item:", error);
      return;
    }
    navigate("/"); // Arahkan kembali setelah menghapus item
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
          {id ? "Edit Item" : "Add Item"}
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
        {id && (
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
          >
            Delete
          </button>
        )}
      </form>
    </div>
  );
};

export default AddEditItemPage;
