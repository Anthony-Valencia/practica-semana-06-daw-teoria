import React from "react";

const Aside = () => {
  return (
    <aside className="box aside">
      <span className="html-tag">&lt;aside&gt;</span>

      <div className="aside-content">
        <h3>🔥 Tendencias</h3>
        <ul>
          <li>El fin de las contraseñas</li>
          <li>Review: Teclado mecánico RGB</li>
          <li>Top 10 lenguajes 2024</li>
        </ul>

        <div className="ad-space">
          <p>Espacio Publicitario</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
