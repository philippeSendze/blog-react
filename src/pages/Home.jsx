import Navbar from "../components/Navbar";
import CompactArticle from "../components/CompactArticle";
import { ReactComponent as StyloTenduLogo } from "../assets/logos/stylo_tendu.svg";
import { BiSearch } from "react-icons/bi";
import Footer from "../components/Footer";
import React from "react";

export default function Home() {
  const articles = [1, 2, 3, 4]
  const renderArticles = articles.map((index, article) => {
    return <CompactArticle />
  })
  return (
    <>
      <Navbar isHomePage={true}/>
      <div className="mx-3">
        <div className="title-page">
          <StyloTenduLogo height="130" width="130" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Recherchez un article..." />
          <div className="search-icon">
            <BiSearch />
          </div>
        </div>
        <div className="my-1">
        {renderArticles}
        </div>
      </div>
      <Footer/>
    </>
  );
}
