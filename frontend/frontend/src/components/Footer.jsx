import React from "react";
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <a href="/" className="text-lg font-bold text-white">
              J
            </a>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="mr-5">
              <a href="mailto:info@mywebsite.com" className="flex items-center">
                <Mail className="w-5 h-5 mr-2" /> josevflores911@gmail.com
              </a>
            </div>
            <div className="mr-5">
              <a href="tel:+1234567890" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" /> +21974501832
              </a>
            </div>
            <div className="flex items-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mr-4">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-4">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 md:mt-10 text-sm">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;