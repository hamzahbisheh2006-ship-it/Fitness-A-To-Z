import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white py-10 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
        
        {/* Contact */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="font-bold text-xl mb-2">Contact Us</h3>
          <p>Mobile: +970 598 123 456 📞</p>
          <p>Landline: +970 9 876 543 🏢</p>
          <p>Email: info@gymfitness.com ✉️</p>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="font-bold text-xl mb-2">Follow Us</h3>
          <div className="flex gap-4 text-2xl justify-center md:justify-start">
            <a className="hover:text-black transition" href="#"><FaFacebookF /></a>
            <a className="hover:text-black transition" href="#"><FaTwitter /></a>
            <a className="hover:text-black transition" href="#"><FaYoutube /></a>
            <a className="hover:text-black transition" href="#"><SiTiktok /></a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-8 opacity-90">
        &copy; 2025 Fitness Gym. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
