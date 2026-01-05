import React from "react";
import { FiHome } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-900 text-base-content p-10">
      <aside>
        <div className="flex items-center">
            <FiHome className="text-2xl text-blue-500" />
            <span className="pl-1">HomeMarket</span>
        </div>
        <p>
          Find your perfect home with the best
          <br />
          marketplace in town.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
      </nav>
      <nav>
        <h6 className="footer-title">Resources</h6>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Guides</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Cookie Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
