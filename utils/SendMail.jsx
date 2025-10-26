import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const SendMail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { name, email, message, subject } = formData;

    if (!validateEmail(email)) {
      return setError("Please enter a valid email address");
    } else if (!name) {
      return setError("Please enter your name");
    } else if (!message) {
      return setError("Please enter your message");
    } else if (!subject) {
      return setError("Please enter your subject");
    }

    setSending(true);
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Manoj",
      subject,
      message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSuccess("Message sent successfully");
        setSending(false);
        handleCancel();
      })
      .catch(() => {
        setError("Failed to send email");
        setSending(false);
      });
  };

  const handleCancel = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setError("");
    setSuccess("");
  };

  return (
    <section
      className="bg-gray-900 text-white p-10 rounded-xl shadow-lg max-w-lg mx-auto mt-10"
      id="getInTouch"
    >
      <h3 className="text-3xl font-bold text-center mb-6 flex justify-center items-center gap-3">
        <FiMessageCircle className="text-cyan-400 text-4xl" /> Drop A Message
      </h3>

      {error && (
        <motion.p
          animate={{ opacity: 1 }}
          className="text-red-400 text-center mb-4"
          initial={{ opacity: 0 }}
        >
          {error}
        </motion.p>
      )}
      {success && (
        <motion.p
          animate={{ opacity: 1 }}
          className="text-green-400 text-center mb-4"
          initial={{ opacity: 0 }}
        >
          {success}
        </motion.p>
      )}

      <form className="space-y-4" onSubmit={sendMessage}>
        <input
          className="w-full p-3 bg-gray-800 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-cyan-300"
          name="name"
          onChange={collectData}
          placeholder="Your Good Name"
          value={formData.name}
        />
        <input
          className="w-full p-3 bg-gray-800 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-cyan-300"
          name="email"
          onChange={collectData}
          placeholder="Your Email Address"
          value={formData.email}
        />
        <input
          className="w-full p-3 bg-gray-800 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-cyan-300"
          name="subject"
          onChange={collectData}
          placeholder="Subject for mail"
          value={formData.subject}
        />
        <textarea
          className="w-full p-3 bg-gray-800 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-cyan-300"
          name="message"
          onChange={collectData}
          placeholder="Write Your Message"
          rows="4"
          value={formData.message}
        />

        <div className="flex gap-3 justify-center">
          <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded disabled:bg-gray-500"
            disabled={sending}
            type="submit"
          >
            {sending ? "Sending..." : "Send"}
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded"
            onClick={handleCancel}
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default SendMail;
