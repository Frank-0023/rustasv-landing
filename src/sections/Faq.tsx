"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import "./Faq.css";

const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "¿En qué ciudades está disponible RutaSV?",
      answer:
        "Actualmente, RutaSV está disponible en San Salvador, Santa Ana y San Miguel. Estamos trabajando para expandirnos a más ciudades de El Salvador en los próximos meses.",
    },
    {
      question:
        "¿Con qué frecuencia se actualizan los datos de rutas y horarios?",
      answer:
        "Nuestros datos se actualizan diariamente. Trabajamos en colaboración con las autoridades de transporte y recibimos retroalimentación de los usuarios para mantener la información lo más precisa posible.",
    },
    {
      question: "¿Puedo usar RutaSV sin conexión a internet?",
      answer:
        "Sí, RutaSV tiene un modo offline que te permite descargar mapas y rutas para usarlos sin conexión. Sin embargo, las alertas en tiempo real y algunas funciones avanzadas requieren conexión a internet.",
    },
    {
      question: "¿Existe una versión para escritorio de RutaSV?",
      answer:
        "Actualmente, RutaSV está optimizada para dispositivos móviles (iOS y Android). Sin embargo, estamos desarrollando una versión web que estará disponible próximamente.",
    },
    {
      question: "¿Cómo puedo reportar información incorrecta o desactualizada?",
      answer:
        "Dentro de la aplicación, puedes usar la función 'Reportar problema' que encontrarás en el menú de opciones. También puedes contactarnos directamente a través de nuestro formulario de contacto en el sitio web.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="faq" className="faq-section section">
      <div className="container">
        <h2 className="section-title">Preguntas frecuentes</h2>

        <motion.div
          className="faq-container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              variants={itemVariants}
            >
              <div
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className={`faq-answer ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
