import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Header />
        <Navbar />
        <div className="middle-container">
          <MainSection />
          <Aside />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
