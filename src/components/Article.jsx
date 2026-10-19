import React from "react";

const Article = ({ title, category, date }) => {
  return (
    <article className="box article">
      <span className="html-tag">&lt;article&gt;</span>
      <div className="article-content">
        <span className="category">{category}</span>
        <h2>{title}</h2>
        <p className="date">{date}</p>
      </div>
    </article>
  );
};

export default Article;
