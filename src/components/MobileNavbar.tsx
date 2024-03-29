import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Pivot as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
// import Footer from "./Footer";
import "./styles/MobileNavbar.scss"; // Make sure to use SCSS

export default function MobileNavbar() {
  // ... your existing code ...
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "de" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  const [isOpen, toggleOpen] = useCycle(false, true);

  const sideVariants = {
    open: {
      // Using scaleX for better performance
      transform: "scaleX(1)",
      transformOrigin: "left",
      transition: {
        duration: 0.5,
        staggerChildren: 0.07,
        when: "beforeChildren",
      },
    },
    closed: {
      // Using scaleX for better performance
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.02, // reduced stagger time
        staggerDirection: -1,
        duration: 0.1, // reduced duration to match child duration
      },
    },
  };

  const linkVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 12 },
      },
    },
    closed: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 0.1, // ensure this duration matches the parent's duration
      },
    },
  };

  // Function to toggle the menu open state
  const toggleMenu = () => {
    toggleOpen();
  };

  return (
    <motion.nav className="mobile-navbar" style={{}}>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="mobile-hamburger-menu"
      >
        {/* Hamburger Icon */}
        <Hamburger
          color="#E7E7E7"
          rounded
          toggled={isOpen}
          size={36}
          onToggle={toggleMenu}
          direction="right"
          label="Show menu"
        />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            variants={sideVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="mobile-aside"
          >
            <motion.div variants={linkVariants}>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "mobile-tab active" : "mobile-tab"
                }
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <NavLink
                to="/digital-reflection"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "mobile-tab active" : "mobile-tab"
                }
              >
                {t("navTab1")}
              </NavLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <NavLink
                to="/media-competence"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "mobile-tab active" : "mobile-tab"
                }
              >
                {t("navTab2")}
              </NavLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <NavLink
                to="/act-now"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "mobile-tab active" : "mobile-tab"
                }
              >
                {t("navTab3")}
              </NavLink>
            </motion.div>

            <motion.div className="mobile-tab language" variants={linkVariants}>
              <button onClick={changeLanguage} style={{ color: "#e87686" }}>
                {i18n.language === "en" ? "EN" : "DE"}
              </button>
            </motion.div>
            {/* <motion.div>
              <Footer />
            </motion.div> */}
          </motion.aside>
        )}
      </AnimatePresence>
      {/* Add Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mobile-logo"
      >
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </motion.div>
    </motion.nav>
  );
}
