import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 960);
      if (window.innerWidth > 960) setIsMobileMenuOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      closeAllMenus();
      navigate("/");
    } catch {
      console.error("Logout failed");
    }
  };

  const getUserInitial = () => {
    return currentUser?.username?.[0].toUpperCase()
      || currentUser?.email?.[0].toUpperCase()
      || "U";
  };

  const getUserColor = () => {
    const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#8AC249", "#EA5545"];
    return colors[getUserInitial().charCodeAt(0) % colors.length];
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" id="navbar__logo" onClick={closeAllMenus}>chapamo</Link>

        <div className={`navbar__toggle ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        <ul className={`navbar__menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li><Link to="/" className="navbar__links" onClick={closeAllMenus}>Home</Link></li>
          <li><Link to="/jobs" className="navbar__links" onClick={closeAllMenus}>Jobs</Link></li>
          <li><Link to="/postjob" className="navbar__links" onClick={closeAllMenus}>Post a Job</Link></li>

          <li className={`navbar__item dropdown ${activeDropdown === "portfolios" ? "active" : ""}`}>
            <div className="navbar__links dropdown__trigger" onClick={() => toggleDropdown("portfolios")}>
              Portfolios <i className="dropdown__arrow">▼</i>
            </div>
            <ul className="dropdown__menu">
              <li><Link to="/portfolios" onClick={closeAllMenus}>Browse</Link></li>
              <li><Link to="/create" onClick={closeAllMenus}>Create</Link></li>
            </ul>
          </li>

          <li><Link to="/news" className="navbar__links" onClick={closeAllMenus}>News</Link></li>
          <li><Link to="/about" className="navbar__links" onClick={closeAllMenus}>About</Link></li>
          <li><Link to="/contact" className="navbar__links" onClick={closeAllMenus}>Contact</Link></li>

          {currentUser ? (
  <li className={`navbar__item dropdown ${activeDropdown === "user" ? "active" : ""}`}>
    <div className="navbar__links dropdown__trigger user__trigger" onClick={() => toggleDropdown("user")}>
      {currentUser.avatar ? (
        <img src={currentUser.avatar} alt="User" className="navbar__user-avatar small" />
      ) : (
        <div
          className="user-initial-avatar"
          style={{
            backgroundColor: getUserColor(),
            color: "#fff",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1rem"
          }}
        >
          {getUserInitial()}
        </div>
      )}
      <i className="dropdown__arrow">▼</i>
    </div>
    <ul className="dropdown__menu">
      <li>
        <Link 
          to={currentUser.role === "admin" ? "/admin" : "/user"} 
          onClick={closeAllMenus}
        >
          Dashboard
        </Link>
      </li>
      <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
    </ul>
  </li>
) : (
  <li className="navbar__btn">
    <div className="btn__container">
      <Link to="/login" className="auth__btn login__btn" onClick={closeAllMenus}>Login</Link>
      <Link to="/register" className="auth__btn register__btn" onClick={closeAllMenus}>Register</Link>
    </div>
  </li>
)}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
