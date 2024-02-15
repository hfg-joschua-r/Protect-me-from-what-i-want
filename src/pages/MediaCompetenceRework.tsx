import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Spot from "../components/3D-Storytelling/Spot";
import SpotLightScene from "../components/SpotLightSceneNew";
import animation from "../components/animations/divAnim";
import "../scss/MediaCompetenceRework.scss";
import "../scss/PageLayout.scss";

// Function to map one range of numbers to another range
const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export default function MediaCompetenceRework() {
  const [intensity, setIntensity] = useState(50);
  const [angle, setAngle] = useState(Math.PI / 8);
  const [penumbra, setPenumbra] = useState(0.1);
  const [distance, setDistance] = useState(7);
  const [rot, setRot] = useState(1);

  const { t } = useTranslation();

  return (
    <>
      <motion.div className="hero-container" {...animation}>
        <aside className="left-col">
          <h3>{t("m-title")}</h3>
        </aside>
        <div className="hero-header">
          <h1>{t("m-hero-text")}</h1>
        </div>
        <div className="hero-text text-big" style={{ gridRow: "span 3" }}>
          <p>{t("m-hero-text1")}</p>
          <p>{t("m-hero-text2")}</p>
        </div>
        <div className="hero-visual">
          <Spot />
        </div>
      </motion.div>
      <motion.div
        className="container"
        {...animation}
        style={{ minHeight: "20vh" }}
      >
        <aside className="left-col" style={{ gridRow: "1" }}>
          <h3>{t("chapter-worddef")}</h3>
        </aside>
        <div className="text-content">
          <h3>{t("title-attention")}</h3>
          <p>{t("attention-text")}</p>
        </div>
        <div className="text-content-2">
          <h3>{t("chapter-sebstwirksamkeit-title")}</h3>
          <p>{t("selbstwirksamkeit-text")}</p>
        </div>
        <div className="text-quote">
          <span>{t("quote-busch")}</span>
          <p style={{ paddingBlockStart: "2vh" }}>Volker Busch, 2021</p>
        </div>
      </motion.div>
      <div className="container-long">
        <aside className="left-col-withContent" style={{ gridRow: "1" }}>
          <h3>Spotlight</h3>
          <p>{t("spotlight-text")}</p>
        </aside>
        <div className="spotlight-visual">
          <p className="spotlight-controls-title">{t("spotlight-demo")}</p>
          <SpotLightScene
            rot={rot}
            intensity={intensity}
            angle={angle}
            distance={distance}
            penumbra={penumbra}
          />
        </div>

        <div className="spotlight-controls" style={{ justifyContent: "start" }}>
          <p className="spotlight-controls-title">Begriffe</p>
          <h3>{t("focus-title")}</h3>
          <p>{t("focus-text")}</p>
          <input
            type="range"
            min="0.10"
            max={Math.PI / 2 - 0.1}
            step="0.01"
            value={Math.PI / 2 - angle}
            onChange={(e) => {
              setAngle(Math.PI / 2 - Number(e.target.value));
              setIntensity(
                mapRange(
                  Number(e.target.value),
                  0.1,
                  Math.PI / 2 - 0.1,
                  30,
                  500
                )
              );
            }}
          />
        </div>
        <div className="spotlight-controls">
          <h3>{t("penumbra-title")}</h3>
          <p>{t("penumbra-text")}</p>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={penumbra}
            onChange={(e) => setPenumbra(Number(e.target.value))}
          />
        </div>

        <div className="spotlight-controls">
          <h3>{t("clearness-title")}</h3>
          <p>{t("clearness-text")}</p>
          <input
            type="range"
            min="6"
            max="7"
            step="0.1"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </div>
        <div className="spotlight-controls">
          <h3>{t("mehrwert-title")}</h3>
          <p>{t("mehrwert-text")}</p>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={rot}
            onChange={(e) => {
              setRot(Number(e.target.value));
            }}
          />
        </div>

        <div
          className="spotlight-controls"
          style={{ zIndex: 2, paddingBlockEnd: "20vh" }}
        >
          <div className="slider-block">
            <input
              type="range"
              min="0.10"
              max={Math.PI / 2 - 0.1}
              step="0.01"
              value={Math.PI / 2 - angle}
              onChange={(e) => {
                setAngle(Math.PI / 2 - Number(e.target.value));
                setIntensity(
                  mapRange(
                    Number(e.target.value),
                    0.1,
                    Math.PI / 2 - 0.1,
                    30,
                    500
                  )
                );
              }}
            />
            <label>
              {t("Fokus")}{" "}
              <p style={{ color: "#C6B7FF" }}>{t("Konzentration")}</p>
            </label>
            {/* <div className="label-improvement">self-management</div> */}
          </div>
          <div className="slider-block">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={penumbra}
              onChange={(e) => setPenumbra(Number(e.target.value))}
            />
            <label>
              {t("Streulicht")}
              <p style={{ color: "#C6B7FF" }}>{t("Selbstmanagement")}</p>
            </label>
            {/* <div className="label-improvement">self-management</div> */}
          </div>
          <div className="slider-block">
            <input
              type="range"
              min="6"
              max="7"
              step="0.1"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
            />
            <label>
              {t("Funktion")}{" "}
              <p style={{ color: "#C6B7FF" }}>{t("Klarheit")}</p>
            </label>
            {/* <div className="label-improvement">attention</div> */}
          </div>
          <div className="slider-block">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={rot}
              onChange={(e) => {
                setRot(Number(e.target.value));
              }}
            />
            <label>
              {t("Mehrwert")}{" "}
              <p style={{ color: "#C6B7FF" }}>{t("Kreativität")}</p>
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-container">
        <aside className="left-col-withContent">
          <h4>{t("Ziel")}</h4>
          <h3>{t("Klarheit")}</h3>
          <p>{t("clearness-text2")}</p>
        </aside>
        <div className="section-textblock section-sticky">
          <p>Problem</p>
          <h2>{t("Informationsdichte")}</h2>
          <p>{t("Informationsdichte-text")}</p>
        </div>
        <div className="section-textblock scrollable">
          <p>{t("Wissenswert")}</p>
          <h2>{t("Wahrnehmung")}</h2>
          <p>{t("Wahrnehmung-text")}</p>
          <br />
          <h5>{t("quicktipp")}</h5>
          <p>{t("action-01")}</p>
        </div>
        <div className="section-textblock scrollable">
          <h2>{t("Gedächtnisfaulheit")}</h2>
          <p>{t("Gedächtnisfaulheit-text")}</p>
          <br />
          <h5>{t("quicktipp")}</h5>
          <p>
            {t("action-02")}
            <br />
            {t("action-03")}
          </p>
        </div>
        <div className="section-textblock scrollable">
          <h2>{t("Arbeitsgedächtnis")}</h2>
          <p>{t("Arbeitsgedächtnis-text")}</p>
          <br />
          <h5>{t("quicktipp")}</h5>
          <p>
            {t("action-04")} <br />
            {t("action-05")}
          </p>
        </div>
      </div>
      <hr />
      <div className="text-container">
        <aside className="left-col-withContent">
          <h4>{t("Ziel")}</h4>
          <h3>{t("Konzentration")}</h3>
          <p>{t("Konzentration-text")}</p>
        </aside>
        <div className="section-textblock section-sticky">
          <p>Problem</p>
          <h2>{t("Ablenkungsdichte")}</h2>
          <p>{t("Ablenkungsdichte-text")}</p>
        </div>
        <div className="section-textblock scrollable">
          <p>{t("Wissenswert")}</p>
          <h2>{t("aufmerksamkeits-wechsel")}</h2>
          <p>{t("Aufmerksamkeitwechsel-text")}</p>
          <br />
          <h5>{t("Quicktipp")}</h5>
          <p>{t("action-07")}</p>
        </div>
        <div className="section-textblock scrollable">
          <h2>{t("ungeduld")}</h2>
          <p>{t("Ungeduld-text")}</p>
          <br />
          <h5>{t("Quicktipp")}</h5>
          <p>{t("action-08")}</p>
        </div>
        <div className="section-textblock scrollable">
          <h2>{t("Stoerreize")}</h2>
          <p>{t("Stoerreize-text")}</p>
          <br />
          <h5>{t("Quicktipp")}</h5>
          <p>{t("action-09")}</p>
        </div>
        <div className="section-textblock scrollable">
          <h2>{t("stoerreizeEmo")}</h2>
          <p>{t("stoerreizeEmo-text")}</p>
          <br />
          <h5>
            {t("Quicktipp")} <br />
          </h5>
          <p>
            {t("action-10")}
            <br /> {t("action-11")}
          </p>
        </div>
      </div>
      <hr />
      <div className="text-container">
        <aside className="left-col-withContent">
          <h4>{t("Ziel")}</h4>
          <h3>{t("Kreativität")}</h3>
          <p>{t("Krativität-text")}</p>
        </aside>
        <div className="section-textblock section-sticky">
          <p>Problem </p>
          <h2>{t("dauerkonsum")}</h2>
          <p>{t("dauerkonsum-text")}</p>
        </div>
        <div className="section-textblock scrollable">
          <p>{t("Wissenswert")} </p>
          <h2>{t("Assoziation")}</h2>
          <p>{t("Assoziation-text")}</p>
        </div>
        <div className="section-textblock scrollable">
          <h2>{t("mental")}</h2>
          <p>{t("mental-text")}</p>
        </div>
        <div className="section-textblock scrollable">
          <h2>{t("Innehalten")}</h2>
          <p>{t("Innehalten-text")}</p>
        </div>
        <div className="section-textblock scrollable">
          <h2>{t("Zerstreuung")}</h2>
          <p>{t("Zerstreuung-text")}</p>
        </div>
        <div className="section-textblock scrollable">
          <h2>{t("netzwerk")}</h2>
          <p>{t("netzwerk-text")}</p>
        </div>
      </div>
    </>
  );
}
