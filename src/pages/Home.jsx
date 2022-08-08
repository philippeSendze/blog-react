import Navbar from "../components/Navbar";
import CompactArticle from "../components/CompactArticle";
import { ReactComponent as StyloTenduLogo } from "../assets/logos/stylo_tendu.svg";
import { BiSearch } from "react-icons/bi";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { formattingDate } from "utils/article";

export default function Home() {
  const [articles, setArticles] = useState([]);

  const renderArticles = articles.map((article) => {
    return (
      <CompactArticle
        key={article}
        id={article.id}
        title={article.title}
        author={article.author}
        image={article.image}
        text={article.text}
        date={formattingDate(article.updatedAt)}
      />
    );
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/api/articles`).then((res) => {
      const reversedArticles = res.data.reverse();
      setArticles(reversedArticles);
    });
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar isHomePage={true} />
      <div className="mx-3" style={{ minHeight: "91vh" }}>
        <div className="title-page">
          <StyloTenduLogo height="130" width="130" />
        </div>
        <div className="border-top-article"></div>
        {/* <div className="search-container">
            <input type="text" placeholder="Recherchez un article..." />
            <div className="search-icon">
              <BiSearch />
            </div>
          </div> */}

        <div className="list-articles-container my-1">{renderArticles}</div>
      </div>
      <Footer />
    </div>
  );
}
