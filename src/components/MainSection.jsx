import React from "react";
import Article from "./Article";

const MainSection = () => {
  return (
    <main className="box main-section">
      <span className="html-tag">&lt;section&gt;</span>

      <div className="articles-container">
        <Article
          category="HARDWARE"
          title="Análisis: El nuevo procesador cuántico"
          date="Hace 2 horas"
        />
        <Article
          category="SEGURIDAD"
          title="Cómo proteger tu red doméstica de ataques"
          date="Hace 5 horas"
        />
      </div>
    </main>
  );
};

export default MainSection;
