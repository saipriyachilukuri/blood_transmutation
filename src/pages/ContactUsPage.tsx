// src/pages/ContactUsPage.tsx

import React from "react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Section - Info Box */}
        <div className="bg-red-700 text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 tracking-wide">CONTACT US</h2>
          <br/>
          {/* ✅ New lines */}
          <p className="text-base mb-1">
            We'd love to hear from you. Reach out for any queries or support.
            Our team is available 24/7 to assist you.
            </p>
            <br />
          <div className="space-y-4 text-lg">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:priya.chilukuri1122@gmail.com"
                className="underline text-white hover:text-yellow-300"
              >
                priya.chilukuri1122@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="underline text-white hover:text-green-300"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className="bg-white p-6 flex items-center justify-center">
          <img
            src="http://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?ga=GA1.1.1005822340.1744133018&semt=ais_hybrid&w=740"
            alt="Support Illustration"
            className="w-4/5 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
