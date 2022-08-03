import Footer from "../components/Footer";
import React from "react";
import Navbar from "../components/Navbar";
import books from "../assets/images/books.jpg";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import {BiCopy} from "react-icons/bi"

export default function Article() {
  const title =
    "Comment lire davantage de livres peut te rendre meilleur en classe ?";
  const date = "30 juil. 2022";
  const author = "Philippe";
  const textOfArticle =
    "Le système scolaire n'a cessé de nous donner des oeuvres littéraires à lire, souvent suivies d'une évaluation sur table ou d'une fiche de lecture à rendre. /n hdbzqhfuozbq hdufobqhyubf zqbfuhzqb yzfuqib zqfyubf zyuhbfyuzqçbfyuzq fzyubfyqu fbzqyuifbyz zyfebzyqu fbzubifequbf. fbzhquofb, sdfhusqi dh eyhfbzfzeq bhfuizqb zbhuiab bhfe bhzuefib bhzufab bh auozb bhuaibf hu huabfiuzafb aubfhzafib. uqdsjiohvfqzuiofhuq hsdqbvqou fqhdbuibfq fzqubi fqzbifzguq fbziqbguq. zfbhiufab fbzhqui zfbhuiqb fhzuqoibfuqzoi fhzuqibfg zhfebiqzeifb fbzhuifbg fbzgifguqz bfzeifvg fzbgeiuqvfg.fbzqfzuiofb zfqybhyuzqb zbhfqi. bqfhuoib qvbhuo qhbfvu qvofuibfh bfquib bqvhuerob qvbuobvi. fhuqoihyqureç rzhuqiobf zfbhgiubfguiqz rzbhquibfrgqzui fhbzuig fzbhqyguifbg fgzyquibfgy fzqguyifgbqzu .";
  return (
    <>
      <Navbar />
      <div className="article-container">
        <div className="mx-3">
          <div className="article-container article-title">{title}</div>
          <div className="article-container date-and-author">
            <h5>{date}</h5>
            <h5>{author}</h5>            
          </div>
          <img src={books} alt="Livres" width="100%" height="256"/>
          <div className="my-1">
            {textOfArticle}
          </div>
          <div className="share-article">
            <h5>Partager l'article sur vos réseaux : </h5>
            <ul className="ul-share-on-social-media">
                <li>
                    <a href="#">
                      <BsFacebook color="#1877f2"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                      <BsTwitter color="#1d9bf0"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                      <BiCopy color="gray"/>
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
