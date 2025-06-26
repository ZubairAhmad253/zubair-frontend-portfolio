import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      data-aos="fade-up"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
