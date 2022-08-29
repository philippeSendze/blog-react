import React from "react";
import { Link } from "react-router-dom";
import { firstLinesOfArticle } from "utils/article";

export default function CompactArticle(props) {
  const { id, title, author, text, date, image } = props;

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
            <h5 style={{ lineHeight: "1.6" }}>{firstLinesOfArticle(text)}</h5>
            <div className="date-and-author">
              <h5></h5>
              <h5></h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
