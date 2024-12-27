import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const bestRecipes = [
    {
      id: 1,
      name: "Espresso",
      image: "https://static.vecteezy.com/system/resources/previews/023/438/448/original/espresso-coffee-cutout-free-png.png",
    },
    {
      id: 2,
      name: "Cappuccino",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    },
    {
      id: 3,
      name: "Latte",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Latte_art.jpg",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556218014-c9233f1ebfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 text-center rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to CoffeeVerse</h1>
        <p className="text-lg mb-6">
          Explore the best coffee recipes from around the world.
        </p>
        <Link
          to="/recipes"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Discover Recipes
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {bestRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{recipe.name}</h3>
              <p className="text-sm text-gray-700">A delightful coffee recipe.</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="block mt-4 text-blue-500 hover:underline"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
