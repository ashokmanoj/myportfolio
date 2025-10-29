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

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendMessage = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { name, email, subject, message } = formData;

    if (!validateEmail(email)) return setError("Please enter a valid email address");
    if (!name) return setError("Please enter your name");
    if (!subject) return setError("Please enter your subject");
    if (!message) return setError("Please enter your message");

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
        setSuccess("Message sent successfully!");
        setSending(false);
        handleCancel();
      })
      .catch(() => {
        setError("Failed to send message. Please try again later.");
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
      className="
        max-w-2xl mx-auto my-10 md:my-20
        px-4 sm:px-6 lg:px-8
        py-10
        bg-gray-100 dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        rounded-xl shadow-md mb-20
      "
      id="getInTouch"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 flex justify-center items-center gap-3">
        <FiMessageCircle className="text-[#07d0e5] text-4xl" /> Drop A Message
      </h3>

      {error && (
        <motion.p
          animate={{ opacity: 1 }}
          className="text-red-500 text-center mb-4"
          initial={{ opacity: 0 }}
        >
          {error}
        </motion.p>
      )}
      {success && (
        <motion.p
          animate={{ opacity: 1 }}
          className="text-green-500 text-center mb-4"
          initial={{ opacity: 0 }}
        >
          {success}
        </motion.p>
      )}

      <form className="space-y-4" onSubmit={sendMessage}>
        {["name", "email", "subject"].map((field) => (
          <input
            className="
              w-full p-3 sm:p-4 rounded-lg border
              bg-white dark:bg-gray-800
              border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-gray-200
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-[#07d0e5]/60
              transition-all duration-300
            "
            key={field}
            name={field}
            onChange={collectData}
            placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
            value={formData[field]}
          />
        ))}

        <textarea
          className="
            w-full p-3 sm:p-4 rounded-lg border
            bg-white dark:bg-gray-800
            border-gray-300 dark:border-gray-700
            text-gray-900 dark:text-gray-200
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-[#07d0e5]/60
            transition-all duration-300
          "
          name="message"
          onChange={collectData}
          placeholder="Write your message..."
          rows="5"
          value={formData.message}
        />

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
          <button
            className="
              w-full sm:w-auto px-6 py-2.5 font-semibold rounded-lg
              bg-[#07d0e5] hover:bg-[#05b5c9]
              transition-all duration-300
              text-white
              disabled:opacity-60
            "
            disabled={sending}
            type="submit"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          <button
            className="
              w-full sm:w-auto px-6 py-2.5 font-semibold rounded-lg
              bg-gray-300 dark:bg-gray-700
              text-gray-800 dark:text-gray-200
              hover:bg-gray-400 dark:hover:bg-gray-600
              transition-all duration-300
            "
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
