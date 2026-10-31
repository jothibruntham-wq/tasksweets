import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/style/style.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <footer className="mjv-footer">
      <div className="container">
        <div className="row gy-5">

          {/* Brand */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <h2 className="footer-logo">
              MJV <span>SWEETS</span>
            </h2>

            <p className="footer-description">
              Bringing sweetness to every celebration!
              Enjoy our delicious traditional Indian sweets
              made with love, quality ingredients and authentic taste.
            </p>

            <div className="footer-social">
              <a href="#facebook"><i className="bi bi-facebook"></i></a>
              <a href="#instagram"><i className="bi bi-instagram"></i></a>
              <a href="#whatsapp"><i className="bi bi-whatsapp"></i></a>
              <a href="#youtube"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6" data-aos="fade-up" data-aos-delay="150">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Our Sweets</a></li>
              <li><a href="/offers">Special Offers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <h4>Our Specialities</h4>
            <ul className="footer-links">
              <li><a href="/products">Traditional Sweets</a></li>
              <li><a href="/products">Milk Sweets</a></li>
              <li><a href="/products">Dry Fruit Sweets</a></li>
              <li><a href="/products">Hot Snacks</a></li>
              <li><a href="/products">Festival Specials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="450">
            <h4>Contact Us</h4>

            <div className="footer-contact">
              <p><i className="bi bi-geo-alt-fill"></i> Your Shop Address, India</p>
              <p><i className="bi bi-telephone-fill"></i> +91 98765 43210</p>
              <p><i className="bi bi-envelope-fill"></i> mjvsweets@gmail.com</p>
              <p><i className="bi bi-clock-fill"></i> Mon - Sun: 9 AM - 10 PM</p>
            </div>
          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom" data-aos="fade-up">
          <p>© 2026 <span>MJV Sweets</span>. All Rights Reserved.</p>
          <p>Made with <i className="bi bi-heart-fill"></i> for Sweet Moments</p>
        </div>
      </div>
    </footer>
  );
}