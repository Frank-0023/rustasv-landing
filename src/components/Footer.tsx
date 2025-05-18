"use client";

import type { FC } from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

interface NavItem {
  name: string;
  to: string;
}

const Footer: FC = () => {
  const navItems: NavItem[] = [
    { name: "Inicio", to: "inicio" },
    { name: "Sobre nosotros", to: "sobre-nosotros" },
    { name: "Funciones", to: "funciones" },
    { name: "Preguntas", to: "faq" },
    { name: "Contacto", to: "contacto" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="gradient-text">RustaSV</span>
          <p>© 2025 RustaSV. Desarrollado por NiskoDev27.</p>
        </div>

        <div className="footer-links">
          <ul className="footer-nav">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} smooth={true} duration={500} offset={-70}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="social-icons">
            <a
              href="https://facebook.com/rustasv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
