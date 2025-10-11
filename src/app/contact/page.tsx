"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Container from "@/components/Common/Container";
import { FaDiscord, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
    )
      .then(
        (result) => {
          setStatus("✅ Email sent successfully!");
          console.log(result)
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("❌ Failed to send email. Try again later.");
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <>
      <Container className="grid grid-cols-1 md:grid-cols-2 my-20">
        {/* Contacts Info */}
        <div className="text-5xl p-2 grid grid-cols-3 gap-2 *:h-full *:w-full *:flex *:items-center *:justify-center *:rounded-2xl items-center justify-items-center">
          {/* Email */}
          <Link
            href="mailto:mdtanbirhossen912@gmail.com"
            className="bg-primary-dark border-2 border-primary-dark text-primary-light duration-300 cursor-pointer hover:bg-primary-light hover:text-primary-dark dark:bg-primary-light dark:border-primary-light dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light"
          >
            <IoMailOpenOutline />
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/8801888156886"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark border-2 border-primary-dark text-primary-light duration-300 cursor-pointer hover:bg-primary-light hover:text-primary-dark dark:bg-primary-light dark:border-primary-light dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light"
          >
            <FaWhatsapp />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/md-tanbir-hossen/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark border-2 border-primary-dark text-primary-light duration-300 cursor-pointer hover:bg-primary-light hover:text-primary-dark dark:bg-primary-light dark:border-primary-light dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light"
          >
            <FiLinkedin />
          </Link>

          {/* Twitter (X) */}
          <Link
            href="https://x.com/Mdtanbirhosen81"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark border-2 border-primary-dark text-primary-light duration-300 cursor-pointer hover:bg-primary-light hover:text-primary-dark dark:bg-primary-light dark:border-primary-light dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light"
          >
            <FaTwitter />
          </Link>

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/danger.ahaed.sstanbir.001/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark border-2 border-primary-dark text-primary-light duration-300 cursor-pointer hover:bg-primary-light hover:text-primary-dark dark:bg-primary-light dark:border-primary-light dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light"
          >
            <FaFacebook />
          </Link>

          {/* Discord (tooltip only) */}
          <div
            onClick={() => {
              navigator.clipboard.writeText("mdtanbirhossen912");
              toast.success("Discord username copied!");
            }}
            title="Click to copy Discord username"
            className="bg-primary-dark border-2 border-primary-dark text-primary-light duration-300 cursor-pointer hover:bg-primary-light hover:text-primary-dark dark:bg-primary-light dark:border-primary-light dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light flex items-center justify-center rounded-2xl"
          >
            <FaDiscord />
          </div>


        </div>


        {/* Email Form */}
        <div className="w-full mx-auto bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 h-32 resize-none"
            />

            <Button
              type="submit"
              disabled={isSending}
              className="w-full bg-primary-dark border-2 border-primary-dark text-primary-light duration-300 cursor-pointer hover:bg-primary-light hover:text-primary-dark dark:bg-primary-light dark:border-primary-light dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light"
            >
              {isSending ? "Sending..." : "Send Message"}
            </Button>

            {status && (
              <p
                className={`text-center mt-3 ${status.startsWith("✅") ? "text-green-500" : "text-red-500"
                  }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </Container >
    </>
  );
}
