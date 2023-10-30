import { useState } from "react";
import "./header.css";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import logoImg from "../../assets/pngwing.com (3).png";
import { Link } from "react-router-dom";
const Header = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div>
      <header className={scroll ? "active" : ""}>
        <a className="logo" href="/">
          <img src={logoImg} alt="" />
        </a>
        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/">TV Shows</a>
          <a href="/">Movies</a>
          <a href="/">My List</a>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" spellCheck={false} />
          <AiOutlineSearch className="searchIcon" size={30} />
        </div>

        <Link to='/login' className="user" style={{ textDecoration: "none" }}>
          <AiOutlineUser size={18} />
          Login
        </Link>
      </header>
    </div>
  );
};
export default Header;
