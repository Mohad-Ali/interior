import React, { useState } from "react";
import emailjs from "emailjs-com";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
 

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = "Enter valid 10-digit mobile number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_u7fcn7v",
          "template_b1jiwpn",
          formData,
          "cjZXEF46Wd_FUz630" 
        )
        .then(() => {
          setSuccessMsg("Message sent successfully!");
          setFormData({ fullName: "", mobile: "", email: "", message: "" });
        })
        .catch((error) => {
          setSuccessMsg("Failed to send message. Try again later.");
          console.error(error);
        });
    }
  };

  return (
    <div className="bg-[#f8f1e5] p-6 rounded-xl shadow-lg max-w-3xl mx-auto mt-10 relative">
       
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name and Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm md:text-lg font-serif mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full p-3 rounded-lg text-sm md:text-lg shadow focus:outline-none"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-sm md:text-lg  font-serif mb-1">Mobile number</label>
            <input
              type="text"
              placeholder="Mobile number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="w-full p-3 text-sm md:text-lg rounded-lg shadow focus:outline-none"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm md:text-lg font-serif mb-1">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 text-sm md:text-lgrounded-lg shadow focus:outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm md:text-lg font-serif mb-1">Message</label>
          <textarea
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 text-sm md:text-lg rounded-lg shadow focus:outline-none"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#5C2E00] hover:bg-[#7a3e00] text-white font-serif px-6 py-2 rounded-full shadow"
          >
            Submit
          </button>
          {successMsg && <p className="mt-4 text-green-600">{successMsg}</p>}
        </div>
      </form>
    </div>
  );
}
