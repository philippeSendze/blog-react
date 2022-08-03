import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { ReactComponent as StyloTenduLogo } from "../assets/logos/stylo_tendu.svg";

export default function Navbar(props) {
  const [navState, setNavState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavState(false));
  const isHomePage = props.isHomePage;
  return (
    <nav>
      <div className={isHomePage ? "container py-1" : "container-with-logo py-1"}>
        {!isHomePage && <StyloTenduLogo height="55" width="55" />}
        <div className="links-container" onClick={(e) => e.stopPropagation()}>
          <div className="toggle">
            {navState ? (
              <MdClose
                className="md-close"
                onClick={() => setNavState(false)}
                style={{ position: "fixed" }}
              />
            ) : (
              <GiHamburgerMenu
                className="gi-hamburger"
                onClick={(e) => {
                  e.stopPropagation();
                  setNavState(true);
                }}
              />
            )}
          </div>
          <div className={`links ${navState ? "responsive-toggle" : ""}`}>
            <ul>
              <li>
                <a href="/">Accueil</a>
              </li>
              <li className="li-join-us">
                <span>Rejoignez-nous sur:</span>
                <ul className="ul-social-media">
                  <li>
                    <a href="#">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsTwitter />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
