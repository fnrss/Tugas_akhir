import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import AddEditRecipePage from "./pages/AddEditRecipePage";
import ShowRecipesPage from "./pages/ShowRecipesPage"; 
import AboutPage from "./pages/AboutPage"; 
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<ShowRecipesPage />} /> 
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/add/:id?" element={<AddEditRecipePage />} />
          <Route path="/edit/:id?" element={<AddEditRecipePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;