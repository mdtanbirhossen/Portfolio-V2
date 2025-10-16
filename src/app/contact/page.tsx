"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Container from "@/components/Common/Container";
import { FaAddressBook, FaDiscord, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { Check, Copy } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState<string>('');
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
      <Container className="grid grid-cols-1 lg:grid-cols-2 my-10 lg:my-20 h-full ">
        {/* Contacts Info */}
        <div className="">
          {/* social contacts */}
          <div className=" text-5xl p-2 grid grid-cols-3 gap-2 *:h-full *:w-full *:flex *:items-center *:justify-center *:rounded-2xl *:p-5 items-center justify-items-center">
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

          {/* contacts */}
          <div className="flex flex-col gap-2 p-2">
            {/* email */}
            <div
              className="flex items-center justify-between p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full bg-red-300`}><MdEmail className="text-xl" /></div>
                <span className="text-gray-700">mdtanbirhossen.work@gmail.com</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText("mdtanbirhossen.work@gmail.com");
                  toast.success("Email address copied!");
                  setCopied('email')
                }}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {copied === 'email' ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>

            {/* phone */}
            <div
              className="flex items-center justify-between p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full bg-red-300`}><FaPhoneAlt className="text-xl" /></div>
                <span className="text-gray-700">+880 1888 156 886</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText("+880 1888 156 886");
                  toast.success("Phone number copied!");
                  setCopied('phone')
                }}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {copied === 'phone' ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>

            {/* address */}
            <div
              className="flex items-center justify-between p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full bg-red-300`}><FaAddressBook className="text-xl" /></div>
                <span className="text-gray-700">Savar, Dhaka, Bangladesh.</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText("Savar, Dhaka, Bangladesh.");
                  toast.success("Current location copied!");
                  setCopied('address')
                }}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {copied === 'address' ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>


        {/* Email sending functionality */}
        <div className="w-full border-2 border-secondary-light dark:border-secondary-dark rounded-2xl  p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary-dark bg-secondary-light"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary-dark bg-secondary-light"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary-dark bg-secondary-light h-32 resize-none"
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
