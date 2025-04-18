import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Blood Converter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
