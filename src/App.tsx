import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
