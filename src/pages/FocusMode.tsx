import focusMode1 from "@/assets/focusModeGIF1.gif";
import { motion } from "framer-motion";
import "../components/styles/FocusMode.css";
import "../components/styles/global.scss";
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

import focusMode from "@/assets/focusMode.gif";
import focusMode2 from "@/assets/focusModeGIF2.gif";
import { t } from "i18next";

export default function FocusMode() {
  return (
    <>
      <motion.div className="hero-container">
        <aside className="left-col" style={{ gridRow: "2" }}>
          <h3>{t("focusModeChapter")}</h3>
        </aside>
        <div className="hero-header">
          <h1>{t("focusModeH1_1")}</h1>
        </div>
        <div className="hero-text">
          <p>{t("focusModep1")}</p>
        </div>
        <a className="scroll-down-cta" href="#scroll-to">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 51 50"
            fill="none"
          >
            <path
              d="M1 0.999998L50 49M50 49H8M50 49V5.8"
              stroke="#E7E7E7"
              stroke-width="2"
            />
          </svg>
          <div className="scroll-down-cta-text">
            <p>{t("focusModeCta1")}</p>
          </div>
        </a>
        <div className="hero-visual">
          <img style={{ maxHeight: "80%" }} src={focusMode} />
        </div>
      </motion.div>
      <motion.div className="container" id="scroll-to">
        <aside className="left-col" style={{ gridRow: "2" }}>
          <h3>{t("step-1")}</h3>
        </aside>
        <div className="hero-header">
          <h1>{t("instruction-01")}</h1>
        </div>
        <div className="hero-text">
          <p>
            1 -{" "}
            <a
              className="link"
              href="https://support.apple.com/de-de/guide/iphone/aside/iph7c412b4db/17.0/ios/17.0"
              target="_blank"
            >
              {t("insturct-text1")}
            </a>
            {t("instruct-text2")}
            <br />
            <br />
            {t("instruct-text3")}
          </p>
        </div>
        <div className="hero-visual-img">
          <img style={{ maxHeight: "80%" }} src={focusMode1} />
        </div>
      </motion.div>
      <motion.div className="container">
        <aside className="left-col" style={{ gridRow: "2" }}>
          <h3>{t("step-2")}</h3>
        </aside>
        <div className="hero-header">
          <h1>{t("instruction-02")}</h1>
        </div>
        <div className="hero-text">
          <p>
            {t("instruct2-text1")} <br />
            <br />
            <br />
            <br />
            {t("instruct2-text2")}
            <br />
            <br />
            {t("instruct2-text3")}
            <br />
            <br />
            {t("instruct2-text4")}
            <br />
            <br />
            {t("instruct2-text5")}
            <br />
            <br />
            {t("instruct2-text6")}
          </p>
        </div>
        <div className="hero-visual-img">
          <img style={{ maxHeight: "80%" }} src={focusMode2} />
        </div>
      </motion.div>
    </>
  );
}
