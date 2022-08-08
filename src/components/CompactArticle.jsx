import Article from "pages/Article";
import React from "react";
import { Link } from "react-router-dom";
import books from "../assets/images/books.jpg";

export default function CompactArticle(props) {
  const { id, title, author, text, date, image } = props;

  const firstLinesOfArticle = text.slice(0, 119).concat("...");

  return (
    <div className="py-1">
      <Link to={`/article/${id}`} className="link-article">
        <div className="compact-article-container">
          <img
            src={image}
            alt="Livres"
            width="100%"
            height="256"
            className="compact-img"
          />
          <div className="infos-article">
            <h2 className="article-title">{title}</h2>
            <h5>{firstLinesOfArticle}</h5>
            <div className="date-and-author">
              <h5>{date}</h5>
              <h5>{author}</h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
