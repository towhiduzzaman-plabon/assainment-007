import React from "react";
import { FaXTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Left description (2 columns width) */}
        <div className="md:col-span-2">
          <h4 className="text-white text-xl font-bold mb-3">CS — Ticket System</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Right side 3 columns */}
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h5 className="text-white font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Contact Saled</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-semibold mb-3">Services</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#">Products & Services</a></li>
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Download Apps</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h5 className="text-white font-semibold mb-3">Information</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Join Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h5 className="text-white font-semibold mb-3">Social Links</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><FaXTwitter /> @CS — Ticket System</li>
              <li className="flex items-center gap-2"><FaLinkedin /> @CS — Ticket System</li>
              <li className="flex items-center gap-2"><FaFacebook /> @CS — Ticket System</li>
              <li className="flex items-center gap-2"><FaEnvelope /> support@cst.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-400">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
