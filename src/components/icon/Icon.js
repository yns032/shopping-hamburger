import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./icon.css";
import {
  FaSourcetree,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Icon() {
  return (
    <div>
      <div className="text-center">
        <div className="row align-items-center bg-dark">
          <div className="col">
            <div className="lower_left">
              <h1 className="text-white pt-0">Contact Us</h1>
              <div className="text-white">
                <FaSourcetree />
                <p className="text-white">Location</p>
              </div>
              <div className="text-white">
                <FaPhoneAlt />
                <p className="text-white">Call +1 342 353 3212</p>
              </div>
              <div className="text-white">
                <FaEnvelope />
                <p className="text-white py-2 ">demo@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col text-white">
            <h1>Feane</h1>
            <p className="text-white">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="px-2">
              <a href="#">
                <i className="px-2 fs-4">
                  <FaInstagram />
                </i>
              </a>
              <a href="#">
                <i className="px-2 fs-4 rounded-circle">
                  <FaFacebookSquare />
                </i>
              </a>
              <a href="#">
                <i className="px-2 fs-4 rounded-circle">
                  <FaTwitter />
                </i>
              </a>
              <a href="#">
                <i className="px-2 fs-4 ">
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </div>
          <div className="col">
            <h1 className="text-white">Opening Hours</h1>
            <p className="text-white">Everyday</p>
            <p className="text-white">10.00 Am -10.00 Pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icon;
