"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactReusableForm({ sitedata }) {
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hcaptchaToken, setHcaptchaToken] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hcaptchaToken) {
      alert("Please complete the captcha verification.");
      return;
    }

    setLoading(true);

    const emailContent = "We’re excited to help you reach your financial goals.";
    const emailData = {
      to: formData.email,
      subject: "Thank You for Your Enquiry!",
      text: `Dear ${formData.username},\n\nWe sincerely appreciate your interest and the time you took to fill out our enquiry form. We have received your details, and our team will be in touch with you soon.\n\n${emailContent}`,
    };

    const senderData = {
      to: sitedata?.email,
      subject: "New Enquiry Received",
      text: `New Enquiry:\n\nName: ${formData.username}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nService: ${formData.service}\nMessage: ${formData.message}`,
    };

    try {
      const res = await axios.post("/api/leads", formData);
      if (res.status === 201) {
        await axios.post("/api/email", emailData);
        await axios.post("/api/email", senderData);
        setSubmitted(true);
        setFormData({
          username: "",
          mobile: "",
          email: "",
          service: "",
          message: "",
        });
        setHcaptchaToken("");
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <p className="text-green-600 font-semibold">
        Thank you! Your message has been sent.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Name"
          className='rvInput'
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className='rvInput'
          required
        />
      </div>

      {/* Service Dropdown */}
      <div className={styles.inputGroup}>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className='rvInput'
          required
        >
          <option value="" className="text-gray-200">Select Service</option>
          <option value="Mutual Funds">Mutual Funds</option>
          <option value="SIP">SIP</option>
          <option value="Tax Planning">Tax Planning</option>
          <option value="Wealth Management">Wealth Management</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Phone"
          className='rvInput'
          required
        />
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className='rvTextarea'
        required
      ></textarea>

      <div className="my-3">
        <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onVerify={setHcaptchaToken}
        />
      </div>
    <div className="mt-7">
      <button
        type="submit"
        className={`btn btn-secondary`}
        disabled={loading}
      >
        <span>Send Message</span>
      </button>
      </div>
    </form>
  );
}
