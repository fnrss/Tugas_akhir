import React from "react";

const AboutPage = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-yellow-600 mb-4 text-center">
          About <span className="text-yellow-700">CoffeeVerse</span>
        </h1>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Welcome to <span className="font-bold text-yellow-600">CoffeeVerse</span>, your ultimate destination for discovering and sharing coffee recipes from around the world. Whether you're a seasoned barista or a coffee enthusiast, our app is designed to inspire your creativity and elevate your coffee experience.
        </p>
        <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          At <span className="font-bold text-yellow-600">CoffeeVerse</span>, we believe that coffee is more than just a beverage—it's an art, a science, and a culture. Our mission is to bring coffee lovers together by sharing unique recipes, tips, and techniques to make every cup extraordinary.
        </p>
        <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
          What You'll Find
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Classic coffee recipes like Espresso, Latte, and Cappuccino.</li>
          <li>Specialty drinks such as Cold Brew, Affogato, and Mocha.</li>
          <li>Innovative and creative coffee recipes to try at home.</li>
          <li>Step-by-step guides to brewing the perfect cup.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-yellow-700 mb-3">Join Us</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We invite you to explore our collection of recipes, contribute your own creations, and become a part of our vibrant coffee-loving community. Let's make every cup count!
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-700 italic text-center">
            "Coffee is a language in itself." – Jackie Chan
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
            Explore Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
