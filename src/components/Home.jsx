import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../assets/style/style.css";


import rasagula from "../assets/images/rasagula.jpg";
import kajukatli from "../assets/images/kaju katli.jpg";
import gulabjamun from "../assets/images/gulab jamun.webp";
import ladoo from "../assets/images/ladoo.webp";
import pistaroll from "../assets/images/pista roll.webp";
import milkcake from "../assets/images/milk cake.webp";
import car1 from "../assets/images/car1.png";
import catering from "../assets/images/catering.jpg";
import hamper from "../assets/images/hamper.jpg";
import hall from "../assets/images/hall.webp";



/* ================= DATA ================= */
const NAV = ["Home", "Sweets", "Namkeen & Snacks", "Catering", "Hampers", "About Us", "Contact"];

const TRUST = [
  { icon: "jar", a: "100% Pure", b: "Ingredients" },
  { icon: "badge", a: "Made Fresh", b: "Everyday" },
  { icon: "shield", a: "Hygienic & Safe", b: "Packing" },
  { icon: "award", a: "Trusted Since", b: "Years" },
];

/* put photos in /public/sweets/ (crop them from your reference image) */
const SWEETS = [
  { n: "Kaju Katli", p: 720, img: kajukatli },
  { n: "Rasgulla", p: 280, img: rasagula },
  { n: "Gulab Jamun", p: 260, img: gulabjamun },
  { n: "Ladoo", p: 280, img: ladoo },
  { n: "Pista Roll", p: 850, img: pistaroll },
  { n: "Milk Cake", p: 260, img: milkcake },
];

const WHY = [
  { icon: "leaf", a: "Pure Ingredients", b: "We use the finest & pure ingredients" },
  { icon: "bowl", a: "Made Fresh Daily", b: "Prepared fresh every single day" },
  { icon: "shield", a: "Hygienic Preparation", b: "Maintained highest hygiene standards" },
  { icon: "people", a: "Trusted by Thousands", b: "Your trust is our biggest strength" },
];

const EVENTS = ["Weddings & Receptions", "Religious Functions", "Corporate Events", "Get-togethers & More"];
const WA = "https://wa.me/8904303697";

/* ================= ICONS (line style, gold) ================= */
const P = {
  jar: <><path d="M7 3h10M8 3v3M16 3v3M6 8c0-1 1-2 2-2h8c1 0 2 1 2 2v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z" /><path d="M9 13c1.5-2 4.5-2 6 0" /></>,
  badge: <><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></>,
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" /><path d="M9 12l2 2 4-4" /></>,
  award: <><circle cx="12" cy="9" r="5" /><path d="M9 13l-2 8 5-3 5 3-2-8" /></>,
  leaf: <><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" /><path d="M5 19l8-8" /></>,
  bowl: <><path d="M4 11h16a8 8 0 0 1-16 0Z" /><path d="M9 7c0-1.5 1-1.5 1-3M14 7c0-1.5 1-1.5 1-3" /></>,
  people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14c3 0 5 2 5 5" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  pin: <><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21Z" /><circle cx="12" cy="9.500" r="2.500" /></>,
  bag: <><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
  check: <path d="M5 12.500l4.500 4.500L19 7.500" />,
};
const Icon = ({ name, size = 28, stroke = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {P[name]}
  </svg>
);
const WhatsApp = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.600 15.100L2 22l5-1.300A10 10 0 1 0 12 2Zm5.800 14.200c-.2.700-1.400 1.300-2 1.400-.5.100-1.200.100-1.900-.1-.4-.1-1-.3-1.700-.7-3-1.300-4.900-4.300-5-4.500-.2-.2-1.200-1.600-1.200-3s.8-2.100 1-2.400c.3-.3.6-.3.8-.3h.5c.2 0 .4 0 .6.5l.9 2.100c.1.200.1.400 0 .6l-.4.600-.4.400c-.1.200-.3.400-.1.700.2.300.7 1.200 1.600 2 1.100 1 2 1.300 2.300 1.400.3.100.4.100.6-.1l.8-1c.2-.3.4-.2.6-.1l2 1c.3.100.5.200.5.300.1.100.1.600-.1 1.300Z" />
  </svg>
);
const Chevron = ({ dir = "right" }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.200" strokeLinecap="round" strokeLinejoin="round">
    <path d={dir === "right" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"} />
  </svg>
);

/* ================= MOTION VARIANTS ================= */
const container = { hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } } };
const rise = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.8 } } };
const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.25 } };

/* ================= PAGE ================= */
export default function Home() {
  const bestRef = useRef(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const plateY = useTransform(scrollYProgress, [0, 1], [0, 80]);


  const slide = (d) => bestRef.current?.scrollBy({ left: d * 230, behavior: "smooth" });

  return (
    <div className="sw">
      <div className="page">
        {/* ---------- NAV ---------- */}
        <motion.nav className="nav" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {NAV.map((n, i) => (
            <motion.a key={n} href={`#${n}`} className={i === 0 ? "on" : ""} whileHover={{ y: -2 }}>
              {n}
              {i === 0 && <motion.i className="ul" layoutId="ul" />}
            </motion.a>
          ))}
          <motion.a href={WA} className="pill pill-nav" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <WhatsApp size={14} /> Order on WhatsApp
          </motion.a>
        </motion.nav>

        {/* ---------- HERO ---------- */}
        <section className="hero" id="Home" ref={heroRef}>
          

          <motion.div className="hero-copy" variants={container} initial="hidden" animate="show">
            <motion.p className="eyebrow" variants={rise}>RAJNANDGAON'S TRUSTED SWEET DESTINATION</motion.p>
            <motion.h1 variants={rise}>
              Fresh Mithai<br /><span className="gold">Crafted Daily</span>
            </motion.h1>
            <motion.p className="sub" variants={rise}>
              Traditional taste, premium ingredients and trusted quality for every celebration.
            </motion.p>
            <motion.div className="cta" variants={rise}>
              <motion.a href={WA} className="pill pill-maroon" whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                <WhatsApp /> Order on WhatsApp
              </motion.a>
              <motion.a href="#Sweets" className="pill pill-dark" whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                Explore Sweets
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="plate-wrap"
            style={{ y: plateY }}
            initial={{ opacity: 0, x: 120, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.100, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* steam */}
            <motion.div className="steam" animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -14, 0], scale: [1, 1.1, 1] }} transition={{ duration: 6, repeat: Infinity }} />
            <motion.img
              src={car1}
              alt="MJV Sweets Hall"
              className="plate"
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              
            />
          </motion.div>

          <motion.button
            className="badge"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.06 }}
          >
            <span className="play"><svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 1l7 4-7 4Z" fill="#fff" /></svg></span>
            <span>Freshly<br />Made Daily</span>
          </motion.button>
        </section>

        {/* ---------- TRUST STRIP ---------- */}
        <motion.section className="trust glass" variants={container} {...inView}>
          {TRUST.map((t) => (
            <motion.div className="trust-i" key={t.a} variants={rise}>
              <span className="gold-ic"><Icon name={t.icon} size={30} /></span>
              <p><b>{t.a}</b><br />{t.b}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* ---------- BEST SELLERS ---------- */}
        <section className="best" id="Sweets">
          <div className="best-top">
            <motion.div variants={rise} {...inView}>
              <p className="eyebrow sm">OUR BEST SELLERS</p>
              <h2>Loved by All, Every Day</h2>
            </motion.div>
            <div className="best-ctrl">
              <a href="#Sweets" className="viewall">View All Sweets <Chevron /></a>
              <motion.button className="circle" onClick={() => slide(-1)} whileTap={{ scale: 0.85 }} aria-label="Previous"><Chevron dir="left" /></motion.button>
              <motion.button className="circle" onClick={() => slide(1)} whileTap={{ scale: 0.85 }} aria-label="Next"><Chevron /></motion.button>
            </div>
          </div>

          <motion.div className="cards" ref={bestRef} variants={container} {...inView}>
            {SWEETS.map((s) => (
              <motion.article
                key={s.n}
                className="card"
                variants={rise}
                whileHover={{ y: -8, boxShadow: "0 18px 34px rgba(0,0,0,.55)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="card-img" style={{ backgroundImage: `url(${s.img})` }} />
                <div className="card-bot">
                  <div>
                    <h3>{s.n}</h3>
                    <p>₹{s.p} <small>/500g</small></p>
                  </div>
                  <motion.button className="bag" whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.8 }} aria-label={`Add ${s.n}`}>
                    <Icon name="bag" size={15} stroke={1.600} />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ---------- FESTIVAL SPECIALS ---------- */}
        <motion.section className="fest" id="Hampers" variants={fade} {...inView}>
          <motion.div className="fest-copy" variants={container} {...inView}>
            <motion.p variants={rise} className="fest-k">Celebrate Happiness with</motion.p>
            <motion.h2 variants={rise}>Our Festival Specials</motion.h2>
            <motion.p variants={rise} className="fest-s">Beautiful Hampers for Every Celebration</motion.p>
            <motion.a variants={rise} href="#Hampers" className="pill pill-gold" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              Explore Hampers
            </motion.a>
          </motion.div>
          <motion.div
            className="fest-img"
            style={{ backgroundImage: `url(${hamper})` }}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          />
        </motion.section>

        {/* ---------- WHY CHOOSE US ---------- */}
        <motion.section className="why cream" variants={container} {...inView}>
          <motion.p className="eyebrow dk sm" variants={rise}>WHY CHOOSE US?</motion.p>
          <motion.h2 className="dk-h" variants={rise}>Quality That You Can Trust</motion.h2>
          <div className="why-row">
            {WHY.map((w) => (
              <motion.div className="why-i" key={w.a} variants={rise} whileHover={{ y: -3 }}>
                <span className="brown-ic"><Icon name={w.icon} size={30} /></span>
                <p><b>{w.a}</b><br />{w.b}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---------- CATERING ---------- */}
        <section className="cater cream" id="Catering">
          <motion.div
            className="cater-img"
            style={{ backgroundImage: `url(${catering})` }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          />
          <motion.div className="cater-copy" variants={container} {...inView}>
            <motion.p className="eyebrow brown sm" variants={rise}>CATERING & BULK ORDERS</motion.p>
            <motion.h2 className="dk-h" variants={rise}>Planning an Event?<br />We've Got You Covered!</motion.h2>
            <motion.p className="cater-p" variants={rise}>
              From small gatherings to grand celebrations, we provide the best quality sweets & snacks.
            </motion.p>
            <motion.ul className="ticks" variants={rise}>
              {EVENTS.map((e) => (
                <li key={e}><i><Icon name="check" size={9} stroke={3} /></i>{e}</li>
              ))}
            </motion.ul>
            <motion.a variants={rise} href={WA} className="pill pill-maroon sm-pill" whileHover={{ x: 4 }} whileTap={{ scale: 0.95 }}>
              Enquire Now <span style={{ marginLeft: 6 }}>→</span>
            </motion.a>
          </motion.div>
        </section>

        {/* ---------- CONTACT BAR ---------- */}
        <motion.footer
          className="bar"
          id="Contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <a href="tel:+918904303697" className="bar-i">
            <span className="ring"><Icon name="phone" size={22} /></span>
            <p><b>+91 8904303697</b><br />Call Us</p>
          </a>
          <div className="bar-i">
            <span className="ring"><Icon name="shield" size={22} /></span>
            <p><b className="sm-b">HYGIENIC & SAFE DELIVERY</b><br />Carefully packed &amp; delivered with hygiene and safety.</p>
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="bar-i">
            <span className="ring"><Icon name="pin" size={22} /></span>
            <p><b className="sm-b">GET DIRECTIONS</b><br />View on Google Maps</p>
          </a>
          <motion.a
            href={WA}
            className="pill pill-green"
            animate={{ boxShadow: ["0 0 0 0 rgba(37,211,102,.55)", "0 0 0 14px rgba(37,211,102,0)"] }}
            transition={{ repeat: Infinity, duration: 1.800 }}
            whileHover={{ scale: 1.05 }}
          >
            <WhatsApp size={20} /> Order on WhatsApp
          </motion.a>
        </motion.footer>
      </div>
    </div>
  );
}