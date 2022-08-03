import React from "react";
import books from "../assets/images/books.jpg";

export default function CompactArticle() {
  const title =
    "Comment lire davantage de livres peut te rendre meilleur en classe ?";

  const textOfArticle =
    "Le système scolaire n'a cessé de nous donner des oeuvres littéraires à lire, souvent suivies d'une évaluation sur table ou d'une fiche de lecture à rendre.";

  const firstLinesOfArticle = textOfArticle.slice(0, 119).concat("...");

  const date = "30 juil. 2022";
  const author = "Philippe";

  const articleContainer = document.querySelector(".compact-article-container");

  // articleContainer.addEventListener('click', () => {})
  return (
    <div className="py-1">
      <a href="/article">
      <div className="compact-article-container">
        <img src={books} alt="Livres" width="100%" height="256" />
        <h2 className="article-title">{title}</h2>
        <h5>{firstLinesOfArticle}</h5>
        <div className="date-and-author">
          <h5>{date}</h5>
          <h5>{author}</h5>
        </div>
      </div>
      </a>
    </div>
  );
}
