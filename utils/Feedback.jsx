import React, { useContext, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { PortfolioContext } from "@/contextApi/PortfolioContext";

const Feedback = () => {
  const [formData, setFormData] = useState({});
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false); // Fix hydration issue
  const { showModal, setShowModal } = useContext(PortfolioContext);

  // Ensure component is only rendered on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [SERVICE_ID, setServiceId] = useState("");
  const [TEMPLATE_ID, setTemplateId] = useState("");
  const [PUBLIC_KEY, setPublicKey] = useState("");

  // Load environment variables on client side
  useEffect(() => {
    setServiceId(process.env.NEXT_PUBLIC_SERVICE_ID);
    setTemplateId(process.env.NEXT_PUBLIC_TEMPLATE_ID2);
    setPublicKey(process.env.NEXT_PUBLIC_PUBLIC_KEY);
  }, []);

  const collectData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    setSubmit(true);
    setError("");

    if (!formData.name || !formData.rating) {
      setError("Name and rating are required fields.");
      setSubmit(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email || "Not provided",
      rating: formData.rating,
      good: formData.good || "",
      bad: formData.bad || "",
      suggestion: formData.suggestion || "",
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setError("Feedback submitted successfully!");
        setFormData({});
        setSubmit(false);
        setShowModal(false);
      })
      .catch(() => {
        setError("Failed to send feedback. Please try again.");
        setSubmit(false);
      });
  };

  if (!isClient) return null; // Prevents SSR rendering issues

  return (
    <>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-30 top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center"
        >
          <motion.form
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="backdrop-blur-md bg-white/10 dark:bg-black/30 border border-white/20 dark:border-gray-700 z-40 p-6 rounded-xl w-[90%] md:w-[500px] flex flex-col gap-4 shadow-2xl"
            onSubmit={submitFeedback}
          >
            <h3 className="text-center text-2xl font-bold text-white">Feedback</h3>
            <p className="text-sm text-gray-300 text-center">Your feedback helps us improve!</p>

            {error && <p className="text-center text-red-400">{error}</p>}

            <input className="bg-transparent border border-gray-400 p-2 rounded placeholder-gray-300 text-white" name="name" onChange={collectData} placeholder="*Your Name" value={formData.name || ""} />
            <input className="bg-transparent border border-gray-400 p-2 rounded placeholder-gray-300 text-white" name="email" onChange={collectData} placeholder="Your Email Address" value={formData.email || ""} />
            <input className="bg-transparent border border-gray-400 p-2 rounded placeholder-gray-300 text-white" name="rating" onChange={collectData} placeholder="*Rating out of 5" type="number" value={formData.rating || ""} />
            <textarea className="bg-transparent border border-gray-400 p-2 rounded placeholder-gray-300 text-white" name="good" onChange={collectData} placeholder="What is good about this Project?" rows="2" value={formData.good || ""} />
            <textarea className="bg-transparent border border-gray-400 p-2 rounded placeholder-gray-300 text-white" name="bad" onChange={collectData} placeholder="What is bad about this Project?" rows="2" value={formData.bad || ""} />
            <textarea className="bg-transparent border border-gray-400 p-2 rounded placeholder-gray-300 text-white" name="suggestion" onChange={collectData} placeholder="Your Suggestions" rows="3" value={formData.suggestion || ""} />

            <div className="flex justify-between mt-4">
              <button className="font-bold px-4 text-white bg-gray-500 p-2 rounded hover:bg-gray-600" onClick={(e) => { e.preventDefault(); setShowModal(false); setFormData({}); }} type="button">Cancel</button>
              <button className="font-bold px-4 text-white bg-blue-500 p-2 rounded hover:bg-blue-600" disabled={submit} type="submit">{submit ? "Submitting..." : "Submit"}</button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </>
  );
};

export default Feedback;
