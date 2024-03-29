import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { firstLinesOfArticle, formattingDate } from "utils/article";
import { Helmet } from "react-helmet-async";

export default function Article() {
  let location = useLocation();
  const currentURL = "https://stylotendu.herokuapp.com" + location.pathname;

  const { articleId } = useParams();

  const [article, setArticle] = useState({
    title: "",
    date: "",
    author: "",
    image: "",
    textOfArticle: "",
  });

  useEffect(() => {
    axios
      .get(
        `https://stylo-tendu-backend.herokuapp.com/api/articles/${articleId}`
      )
      .then((res) => {
        setArticle({
          title: res.data.title,
          date: formattingDate(res.data.createdAt),
          author: res.data.author,
          image: res.data.image,
          textOfArticle: res.data.text,
        });
      });
  }, []);

  const width = 100;

  return (
    <>
      <Helmet>
        <title>{article.title}</title>
        <meta
          name="description"
          content={firstLinesOfArticle(article.textOfArticle)}
        />
        <link rel="canonical" href={`${articleId}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={article.title} />
        <meta property="og:image" content={article.image} />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={currentURL} />
        <meta
          property="og:description"
          content={firstLinesOfArticle(article.textOfArticle)}
        />
        <meta name="twitter:card" content={article.image} />
      </Helmet>
      <>
        <Navbar />
        <div className="article-container">
          <div className="article-mx-3">
            <div className="article-container article-title">
              {article.title}
            </div>
            <div className="article-container date-and-author">
             <h5></h5> 
             <h5></h5>
            </div>
            <img
              src={article.image}
              alt="Livres"
              width={width + "%"}
              height={width * 1.5 + "%"}
              className="article-image"
            />
            <div
              style={{
                whiteSpace: "pre-wrap",
                fontSize: "14pt",
                margin: "2.5rem 0 4.5rem 0",
                lineHeight: "1.6",
              }}
            >{`${article.textOfArticle}`}</div>
            {/* <div className="share-article">
              <h5>Partager l'article sur vos réseaux : </h5>
              <ul className="ul-share-on-social-media">
                <li>
                  <FacebookShareButton url={currentURL} title={article.title}>
                    <BsFacebook color="#1877f2" className="share-button" />
                  </FacebookShareButton>
                </li>
                <li>
                  <TwitterShareButton url={currentURL} title={article.title}>
                    <BsTwitter color="#1d9bf0" className="share-button" />
                  </TwitterShareButton>
                </li>
                <li>
                  <LinkedinShareButton url={currentURL} title={article.title}>
                    <BsLinkedin color="#0a66c2" className="share-button" />
                  </LinkedinShareButton>
                </li>
                <li>
                  <button
                    onClick={() => navigator.clipboard.writeText(currentURL)}
                  >
                    <BiCopy color="gray" className="share-button" />
                  </button>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </>
    </>
  );
}
