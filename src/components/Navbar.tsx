"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Inicio", to: "inicio" },
    { name: "Sobre nosotros", to: "sobre-nosotros" },
    { name: "Funciones", to: "funciones" },
    { name: "Preguntas", to: "faq" },
    { name: "Contacto", to: "contacto" },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="inicio" className="navbar-logo" smooth={true} duration={500}>
          <span className="gradient-text">RustaSV</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link
                to={item.to}
                className="nav-link"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <a
              href="https://app.rustasv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Descargar ahora
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
