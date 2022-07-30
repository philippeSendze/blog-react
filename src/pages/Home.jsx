import Navbar from "../components/Navbar";
import { ReactComponent as StyloTenduLogo } from "../assets/logos/stylo_tendu.svg";
import { BiSearch } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-3">
        <div className="title-page">
          <StyloTenduLogo height="130" width="130" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Recherchez un article..." />
          <div className="search-icon">
            <BiSearch />
          </div>
        </div>
      </div>
    </>
  );
}
