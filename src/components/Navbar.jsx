import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill, BsFacebook, BsTwitter} from "react-icons/bs";


export default function Navbar() {
  const [navState, setNavState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavState(false));
  // const {isHomePage} = this.props;
  return (
    <nav>
      <div className="container py-3 mx-3">
        <div className="links-container" onClick={(e) => e.stopPropagation()}>
          <div className="toggle">
            {navState ? (
              <MdClose
                className="md-close"
                onClick={() => setNavState(false)}
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
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#">À propos</a>
              </li>
              <li className="li-join-us">
                <span>Rejoignez-nous sur:</span>
                <ul className="ul-social-media">
                  <li>
                    <a href="#"><BsFacebook /></a>
                  </li>
                  <li>
                    <a href="#"><BsTwitter/></a>
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
