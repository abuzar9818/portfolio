import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // ✅ Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Working Submit Handler with EmailJS
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // ✅ 1. Send email to Admin (You)
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // ✅ 2. Send auto-reply to User
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSubmitStatus("success");

    setFormData({
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.log("EmailJS Error:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="section">
      <div className="container">
        {/* ✅ Title */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          {/* ✅ Left Info Section */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always open to new opportunities and exciting projects. Feel
              free to reach out!
            </p>

            <div className="contact-details">
              {/* Email */}
              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <h4>Location</h4>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links-contact">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* ✅ Right Form Section */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="contact-form card">
              {/* Name */}
              <div className="form-group">
               <input
  type="text"
  name="user_name"
  placeholder="Your Name"
  value={formData.user_name}
  onChange={handleChange}
  required
/>
              </div>

              {/* Email */}
              <div className="form-group">
               <input
  type="email"
  name="user_email"
  placeholder="Your Email"
  value={formData.user_email}
  onChange={handleChange}
  required
/>
              </div>

              {/* Subject */}
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {/* ✅ Status Messages */}
              {submitStatus === "success" && (
                <p className="form-status success">
                  ✅ Message sent successfully!
                </p>
              )}

              {submitStatus === "error" && (
                <p className="form-status error">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
