import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Expenses from "./components/Expenses";
import Blog from "./components/Blog";
import NewExpense from "./components/NewExpense";
import"./App.css"



function App() {
  return (
    <div className="App">
    <h1>Bay Budget app</h1>
    <NavBar />
  <Routes>
    <Route path="/" element={<Expenses />} />
    <Route path="/newexpense" element={<NewExpense />} />
    <Route path="/blog" element={<Blog />} />
  </Routes>
    
    </div>
  );
}

export default App;
