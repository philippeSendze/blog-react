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
import { useParams } from "react-router-dom";
import axios from "axios";
import { formattingDate } from "utils/article";

export default function Article() {
  const { articleId } = useParams();
  console.log(articleId);
  const [article, setArticle] = useState({
    title: "",
    date: "",
    author: "",
    image: "",
    textOfArticle: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/api/articles/${articleId}`).then((res) => {
      setArticle({
        title: res.data.title,
        date: formattingDate(res.data.updatedAt),
        author: res.data.author,
        image: res.data.image,
        textOfArticle: res.data.text,
      });
    });
  }, []);

  const width = 100;

  return (
    <>
      <Navbar />
      <div className="article-container">
        <div className="article-mx-3">
          <div className="article-container article-title">{article.title}</div>
          <div className="article-container date-and-author">
            <h5>{article.date}</h5>
            <h5>{article.author}</h5>
          </div>
          <img
            src={article.image}
            alt="Livres"
            width={width + "%"}
            height={width * 1.5 + "%"}
            className="article-image"
          />
          <div
            className="my-1"
            style={{ whiteSpace: "pre-wrap" }}
          >{`${article.textOfArticle}`}</div>
          <div className="share-article">
            <h5>Partager l'article sur vos réseaux : </h5>
            <ul className="ul-share-on-social-media">
              <li>
                <FacebookShareButton
                  url={`http://localhost:3000/article/${articleId}`}
                  title={article.title}
                >
                  <BsFacebook color="#1877f2" className="share-button" />
                </FacebookShareButton>
              </li>
              <li>
                <TwitterShareButton
                  url={`https://openclassrooms.com/fr/how-does-it-work`}
                  title={article.title}
                >
                  <BsTwitter color="#1d9bf0" className="share-button" />
                </TwitterShareButton>
              </li>
              <li>
                <LinkedinShareButton
                  url={`https://openclassrooms.com/fr/how-does-it-work`}
                  title={article.title}
                >
                  <BsLinkedin color="#0a66c2" className="share-button" />
                </LinkedinShareButton>
              </li>
              <li>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `http://localhost:3000/article/${articleId}`
                    )
                  }
                >
                  <BiCopy color="gray" className="share-button" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
