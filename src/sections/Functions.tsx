"use client";

import type React from "react";

import { useRef, type FC } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaRoute,
  FaExclamationTriangle,
  FaClock,
} from "react-icons/fa";
import "./Functions.css";

interface FunctionItem {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

interface VariantProps {
  hidden: {
    opacity: number;
    y?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    transition: {
      duration?: number;
      delayChildren?: number;
      staggerChildren?: number;
    };
  };
}

const Functions: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: VariantProps = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: VariantProps = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const functionsList: FunctionItem[] = [
    {
      title: "Mapa interactivo",
      description:
        "Visualiza todas las rutas de transporte público en un mapa interactivo y fácil de usar.",
      icon: <FaMapMarkedAlt size={28} />,
      color: "var(--color-green)",
    },
    {
      title: "Información de paradas y costos",
      description:
        "Conoce las paradas exactas de cada ruta y los costos asociados a tu viaje.",
      icon: <FaMoneyBillWave size={28} />,
      color: "var(--color-fuchsia)",
    },
    {
      title: "Planificación de viajes largos",
      description:
        "Planifica viajes largos con múltiples conexiones de manera eficiente.",
      icon: <FaRoute size={28} />,
      color: "var(--color-purple)",
    },
    {
      title: "Rutas alternas y alertas",
      description:
        "Recibe alertas sobre problemas en tu ruta habitual y descubre alternativas.",
      icon: <FaExclamationTriangle size={28} />,
      color: "var(--color-orange)",
    },
    {
      title: "Horarios pico y frecuencia",
      description:
        "Información sobre horarios de mayor afluencia y frecuencia de paso de las unidades.",
      icon: <FaClock size={28} />,
      color: "var(--color-green)",
    },
  ];

  return (
    <section id="funciones" className="functions-section section">
      <div className="container">
        <h2 className="section-title">Funciones</h2>

        <motion.div
          className="functions-container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="functions-cards">
            {functionsList.map((func, index) => (
              <motion.div
                key={index}
                className="function-card"
                variants={itemVariants}
                style={{ "--accent-color": func.color } as React.CSSProperties}
              >
                <div className="function-icon" style={{ color: func.color }}>
                  {func.icon}
                </div>
                <h3>{func.title}</h3>
                <p>{func.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="how-it-works" variants={itemVariants}>
            <h3>¿Cómo funciona?</h3>
            <div className="how-content">
              <div className="how-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Descarga la aplicación</h4>
                    <p>Disponible para iOS y Android de forma gratuita.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Ingresa tu ubicación y destino</h4>
                    <p>Usa el buscador o selecciona directamente en el mapa.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Explora las opciones de ruta</h4>
                    <p>
                      Compara tiempos, costos y conexiones entre diferentes
                      opciones.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>¡Comienza tu viaje!</h4>
                    <p>
                      Sigue las indicaciones paso a paso y recibe alertas en
                      tiempo real.
                    </p>
                  </div>
                </div>
              </div>
              <div className="how-image">
                <img src="/route-vector.png" alt="Ruta en móvil" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Functions;
