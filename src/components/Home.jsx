import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/style/style.css";

// Import images
import traditionalSweetsImg from "../assets/images/traditional sweets.jpg";
import ladduImg from "../assets/images/laddu.png";
import kajuKatliImg from "../assets/images/kajj katli.png";
import gulabJamunImg from "../assets/images/gulab jamun.jpg";
import mysorePakImg from "../assets/images/mysore pak.jpg";
import diwaliOfferImg from "../assets/images/diwali spl snacks.webp";
import mixtureImg from "../assets/images/indian mixture.webp";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className="mjv-home">

      {/* HERO SECTION */}
      <section className="mjv-hero" id="home">

        <div className="hero-overlay"></div>

        <div className="hero-content container">
          <div className="row align-items-center">

            <div className="col-lg-7">

              <span className="hero-label" data-aos="fade-down">
                🪔 THE FESTIVAL OF LIGHTS
              </span>

              <h1 data-aos="fade-up" data-aos-delay="200">
                Celebrate Diwali
                <br />
                With <span>Sweet Moments</span>
              </h1>

              <p data-aos="fade-up" data-aos-delay="400">
                Make every celebration sweeter with MJV Sweets.
                Enjoy authentic traditional Indian sweets and
                delicious festive treats made with love.
              </p>

              <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">

                <a href="#sweets" className="hero-btn">
                  Explore Sweets <i className="bi bi-arrow-right"></i>
                </a>

                <a href="#offers" className="hero-outline-btn">
                  View Offers
                </a>

              </div>

              <div className="hero-stats" data-aos="fade-up" data-aos-delay="800">
                <div>
                  <h3>25+</h3>
                  <span>Sweet Varieties</span>
                </div>

                <div>
                  <h3>100%</h3>
                  <span>Fresh & Tasty</span>
                </div>

                <div>
                  <h3>10K+</h3>
                  <span>Happy Customers</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="hero-bottom-text">
          HAPPY DIWALI • SWEETNESS EVERYWHERE • MJV SWEETS
        </div>

      </section>


      {/* WELCOME SECTION */}
      <section className="welcome-section" id="about">

        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6" data-aos="fade-right">

              <div className="welcome-image">
                <img
                  src={traditionalSweetsImg}
                  alt="Traditional Indian sweets"
                />

                <div className="image-badge">
                  <span>❤️</span>
                  <h5>Made With Love</h5>
                  <small>Tradition in every bite</small>
                </div>
              </div>

            </div>

            <div className="col-lg-6 welcome-content" data-aos="fade-left">

              <span className="section-label">
                WELCOME TO MJV SWEETS
              </span>

              <h2>
                A Little Sweetness
                <br />
                Goes A <span>Long Way</span>
              </h2>

              <p>
                At MJV Sweets, every sweet tells a story of tradition,
                happiness and togetherness. We bring you the delicious
                taste of authentic Indian sweets prepared for every
                special occasion.
              </p>

              <p>
                Celebrate festivals, family gatherings and special
                moments with our delightful collection of sweets
                and savoury snacks.
              </p>

              <a href="#sweets" className="dark-btn">
                Discover More <i className="bi bi-arrow-right"></i>
              </a>

            </div>

          </div>
        </div>

      </section>


      {/* SWEETS COLLECTION */}
      <section className="sweets-section" id="sweets">

        <div className="container">

          <div className="section-heading" data-aos="fade-up">

            <span className="section-label">OUR SPECIAL COLLECTION</span>

            <h2>
              Taste The <span>Happiness</span>
            </h2>

            <p>
              Delicious traditional sweets made for your sweetest moments.
            </p>

          </div>

          <div className="row g-4">

            <div className="col-lg-3 col-md-6" data-aos="zoom-in">
              <div className="sweet-card">
                <div className="sweet-image">
                  <img src={ladduImg} alt="Motichoor Laddu" />
                  <span className="sweet-tag">BEST SELLER</span>
                </div>
                <div className="sweet-info">
                  <h4>Motichoor Laddu</h4>
                  <p>Soft, delicious and traditional sweetness.</p>
                  <div className="sweet-bottom">
                    <span>₹250 / kg</span>
                    <a href="#contact"><i className="bi bi-arrow-up-right"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="150">
              <div className="sweet-card">
                <div className="sweet-image">
                  <img src={kajuKatliImg} alt="Kaju Katli" />
                  <span className="sweet-tag">POPULAR</span>
                </div>
                <div className="sweet-info">
                  <h4>Kaju Katli</h4>
                  <p>Rich cashew flavour with a royal taste.</p>
                  <div className="sweet-bottom">
                    <span>₹800 / kg</span>
                    <a href="#contact"><i className="bi bi-arrow-up-right"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="sweet-card">
                <div className="sweet-image">
                  <img src={gulabJamunImg} alt="Gulab Jamun" />
                  <span className="sweet-tag">SPECIAL</span>
                </div>
                <div className="sweet-info">
                  <h4>Gulab Jamun</h4>
                  <p>Juicy and soft bites of pure happiness.</p>
                  <div className="sweet-bottom">
                    <span>₹300 / kg</span>
                    <a href="#contact"><i className="bi bi-arrow-up-right"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="450">
              <div className="sweet-card">
                <div className="sweet-image">
                  <img src={mysorePakImg} alt="Mysore Pak" />
                  <span className="sweet-tag">TRADITIONAL</span>
                </div>
                <div className="sweet-info">
                  <h4>Mysore Pak</h4>
                  <p>Authentic melt-in-mouth traditional delight.</p>
                  <div className="sweet-bottom">
                    <span>₹450 / kg</span>
                    <a href="#contact"><i className="bi bi-arrow-up-right"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <a href="#contact" className="dark-btn">
              Explore All Sweets <i className="bi bi-arrow-right"></i>
            </a>
          </div>

        </div>

      </section>


      {/* DIWALI OFFER SECTION */}
      <section className="offer-section" id="offers">

        <div className="container">

          <div className="offer-box" data-aos="zoom-in">

            <div className="row align-items-center">

              <div className="col-lg-6 offer-content">

                <span className="offer-label">
                  🪔 DIWALI MEGA OFFER
                </span>

                <h2>
                  Make Your Diwali
                  <br />
                  Extra <span>Sweet!</span>
                </h2>

                <p>
                  Bring home happiness with our special Diwali
                  sweet boxes and festive gift collections.
                </p>

                <div className="offer-discount">
                  <strong>20% OFF</strong>
                  <small>ON SELECTED SWEET BOXES</small>
                </div>

                <a href="#contact" className="offer-btn">
                  Grab Your Offer <i className="bi bi-arrow-right"></i>
                </a>

              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <img
                  className="offer-image"
                  src={diwaliOfferImg}
                  alt="Diwali special sweets gift box"
                />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SNACKS SECTION */}
      <section className="snacks-section" id="snacks">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6" data-aos="fade-right">
              <img
                className="snacks-image"
                src={mixtureImg}
                alt="Indian mixture snacks"
              />
            </div>

            <div className="col-lg-6 snacks-content" data-aos="fade-left">

              <span className="section-label">CRUNCHY & DELICIOUS</span>

              <h2>
                Not Just Sweets,
                <br />
                We Have <span>Snacks Too!</span>
              </h2>

              <p>
                Add extra flavour to your celebrations with our
                crispy mixture, traditional murukku and tasty
                savoury snacks.
              </p>

              <ul>
                <li><i className="bi bi-check-circle-fill"></i> Traditional Mixture</li>
                <li><i className="bi bi-check-circle-fill"></i> Crispy Murukku</li>
                <li><i className="bi bi-check-circle-fill"></i> Delicious Kara Sev</li>
                <li><i className="bi bi-check-circle-fill"></i> Fresh Festival Snacks</li>
              </ul>

              <a href="#contact" className="dark-btn">
                Order Your Snacks <i className="bi bi-arrow-right"></i>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL BANNER */}
      <section className="final-banner" data-aos="fade-up">

        <div className="container text-center">

          <span>🪔 HAPPY DIWALI 🪔</span>

          <h2>
            Share The Love.
            <br />
            Share The Sweetness.
          </h2>

          <p>Every celebration deserves a little sweetness from MJV Sweets.</p>

          <a href="#contact" className="hero-btn">
            Order Your Sweet Box <i className="bi bi-arrow-right"></i>
          </a>

        </div>

      </section>


      {/* CONTACT */}
      <section className="contact-strip" id="contact">
        <div className="container text-center">
          <h3>Celebrate With MJV Sweets ❤️</h3>
          <p>For orders and enquiries, get in touch with us.</p>
          <a href="tel:+910000000000" className="dark-btn">
            <i className="bi bi-telephone-fill"></i> Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}
