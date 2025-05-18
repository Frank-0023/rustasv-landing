"use client";

import { useState, useEffect, type FC } from "react";
import "./About.css";

interface Developer {
  name: string;
  role: string;
  avatar: string;
}

const About: FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Marcar como cargado después de un breve tiempo para asegurar renderizado
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const developers: Developer[] = [
    {
      name: "Carlos Mendoza",
      role: "Frontend Developer",
      avatar: "/avatar1.jpg",
    },
    { name: "Ana Martínez", role: "UX/UI Designer", avatar: "/avatar2.jpg" },
    {
      name: "Roberto Sánchez",
      role: "Backend Developer",
      avatar: "/avatar3.jpg",
    },
    {
      name: "Elena Gutiérrez",
      role: "Mobile Developer",
      avatar: "/avatar4.jpg",
    },
    { name: "Juan Pérez", role: "Data Scientist", avatar: "/avatar5.jpg" },
    { name: "María López", role: "Project Manager", avatar: "/avatar6.jpg" },
  ];

  return (
    <section id="sobre-nosotros" className="about-section section">
      <div className="container">
        <h2 className="section-title">Sobre nosotros</h2>

        <div className={`about-container ${imagesLoaded ? "loaded" : ""}`}>
          <div className="about-what fade-in">
            <h3>¿Qué es RutaSV?</h3>
            <div className="about-content">
              <div className="about-text">
                <p>
                  RutaSV es una aplicación móvil diseñada para facilitar la
                  navegación en el transporte público de El Salvador. Nuestra
                  plataforma proporciona información en tiempo real sobre rutas,
                  paradas, horarios y costos de los diferentes medios de
                  transporte público disponibles en el país.
                </p>
                <p>
                  Con una interfaz intuitiva y fácil de usar, RutaSV permite a
                  los usuarios planificar sus viajes de manera eficiente,
                  ahorrando tiempo y reduciendo la incertidumbre asociada con el
                  transporte público.
                </p>
              </div>
              <div className="about-image">
                <img
                  src="/mockup.png"
                  alt="RutaSV App Mockup"
                  loading="lazy"
                  width={400}
                  height={300}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          <div className="about-why fade-in">
            <h3>¿Por qué se creó?</h3>
            <div className="about-content reverse">
              <div className="about-image">
                <img
                  src="/users-bus.jpg"
                  alt="Usuarios en bus"
                  loading="lazy"
                  width={400}
                  height={300}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="about-text">
                <p>
                  RutaSV nació de la necesidad de mejorar la experiencia de
                  millones de salvadoreños que utilizan el transporte público
                  diariamente. La falta de información centralizada y
                  actualizada sobre rutas, horarios y paradas ha sido un desafío
                  constante para los usuarios.
                </p>
                <p>
                  Nuestro objetivo es democratizar el acceso a la información
                  del transporte público, permitiendo a los usuarios tomar
                  decisiones informadas sobre sus desplazamientos, reducir los
                  tiempos de espera y mejorar su calidad de vida.
                </p>
              </div>
            </div>
          </div>

          <div className="developers-section fade-in">
            <h3>Desarrolladores</h3>
            <div className="developers-grid">
              {developers.map((dev, index) => (
                <div key={index} className="developer-card">
                  <div className="developer-avatar">
                    <img
                      src={dev.avatar || "/placeholder.svg"}
                      alt={dev.name}
                      loading="lazy"
                      width={80}
                      height={80}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4>{dev.name}</h4>
                  <p>{dev.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
