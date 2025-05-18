"use client";

import {
  useState,
  useRef,
  type FC,
  type FormEvent,
  type ChangeEvent,
} from "react";
import { FaEnvelope, FaFacebook } from "react-icons/fa";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "./Contact.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      // Enviar el formulario usando EmailJS
      if (form.current) {
        emailjs
          .sendForm(
            "service_7n14l3u", // Reemplazar con tu Service ID
            "template_clpomkp", // Reemplazar con tu Template ID
            form.current,
            "ztpx9Pmjl4RRRYPTm" // Reemplazar con tu Public Key
          )
          .then((result) => {
            console.log("Email enviado:", result.text);
            setLoading(false);

            // Mostrar SweetAlert2 de éxito
            Swal.fire({
              title: "¡Mensaje enviado!",
              text: "Gracias por contactarnos. Te responderemos pronto.",
              icon: "success",
              confirmButtonText: "Aceptar",
              confirmButtonColor: "#00E09E",
            });

            // Resetear formulario
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          })
          .catch((error) => {
            console.error("Error al enviar email:", error);
            setLoading(false);

            // Mostrar SweetAlert2 de error
            Swal.fire({
              title: "Error",
              text: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
              icon: "error",
              confirmButtonText: "Aceptar",
              confirmButtonColor: "#00E09E",
            });
          });
      }
    }
  };

  return (
    <section id="contacto" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3>¿Tienes dudas o quieres colaborar?</h3>
            <p>¡Escríbenos y te responderemos pronto!</p>

            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>soporte@rustasv.com</span>
              </div>
              <div className="contact-item">
                <FaFacebook className="contact-icon" />
                <span>facebook.com/rustasv</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "error" : ""}
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
