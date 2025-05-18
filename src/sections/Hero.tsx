"use client";

import { useState, useEffect, useRef, type FC } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaRoute,
  FaExclamationTriangle,
} from "react-icons/fa";
import "./Hero.css";

interface QuickFeature {
  title: string;
  icon: JSX.Element;
  bgColor: string;
  color: string;
}

const Hero: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides: number = 6; // Total de imágenes en el slider
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Función para avanzar al siguiente slide
  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Función para retroceder al slide anterior
  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Función para ir a un slide específico
  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  // Reiniciar el temporizador cuando se cambia manualmente el slide
  const resetTimeout = (): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Configurar el autoplay
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 4000); // Cambiar cada 4 segundos

    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  // Datos de las características rápidas con sus iconos
  const quickFeatures: QuickFeature[] = [
    {
      title: "Mapa interactivo",
      icon: <FaMapMarkedAlt size={24} />,
      bgColor: "rgba(0, 224, 158, 0.2)",
      color: "var(--color-green)",
    },
    {
      title: "Paradas y costos",
      icon: <FaMoneyBillWave size={24} />,
      bgColor: "rgba(255, 0, 124, 0.2)",
      color: "var(--color-fuchsia)",
    },
    {
      title: "Rutas combinadas",
      icon: <FaRoute size={24} />,
      bgColor: "rgba(122, 43, 255, 0.2)",
      color: "var(--color-purple)",
    },
    {
      title: "Alertas de tráfico",
      icon: <FaExclamationTriangle size={24} />,
      bgColor: "rgba(255, 138, 0, 0.2)",
      color: "var(--color-orange)",
    },
  ];

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">RutaSV</span>
            </h1>
            <p className="hero-subtitle">
              Tu guía confiable del transporte público en El Salvador
            </p>
            <a
              href="https://app.rustasv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero-cta"
            >
              Probar ahora
            </a>
          </div>

          <div className="hero-image glow">
            <img src="/mascota.png" alt="Mascota RutaSV" />
          </div>
        </div>

        <div className="slider-section">
          <h2 className="slider-title">Descubre nuestra aplicación</h2>

          <div className="slider-container" ref={sliderRef}>
            <div className="slider-wrapper">
              <div
                className="slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="slider-slide">
                    <div className="slide-content">
                      <img
                        src={`/screens/screen${num}.png`}
                        alt={`Captura de pantalla ${num}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="slider-nav slider-nav-prev"
              onClick={prevSlide}
              aria-label="Anterior"
            >
              <FaChevronLeft />
            </button>

            <button
              className="slider-nav slider-nav-next"
              onClick={nextSlide}
              aria-label="Siguiente"
            >
              <FaChevronRight />
            </button>

            <div className="slider-pagination">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${
                    currentSlide === index ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="quick-features">
          {quickFeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              <div
                className="feature-icon"
                style={{
                  backgroundColor: feature.bgColor,
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
