import clearityMinimal from "@/assets/klarheit.png";
import creativityMinimal from "@/assets/kreativität.png";
import spotlight from "@/assets/spotlight.png";
import spotlightMinimal from "@/assets/spotlightMinimal.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Spot from "../components/3D-Storytelling/Spot";
import SpotLightScene from "../components/SpotLightScene";
import "../components/styles/MediaCompetence.css";
import "../components/styles/global.css";

import aufmerksamkeitImage from "@/assets/aufmerksamkeit.png";
import selbstManagementImage from "@/assets/selbstManagement.png";

export default function MediaCompetence() {
  const { t } = useTranslation();
  const [selectedButton1, setSelectedButton1] = useState("aufmerksamkeit");
  const [selectedButton2, setSelectedButton2] = useState("konzentration");

  const handleButtonClick1 = (
    buttonType1: "aufmerksamkeit" | "selbstmanagement"
  ) => {
    setSelectedButton1(buttonType1);
  };

  const handleButtonClick2 = (
    buttonType2: "konzentration" | "kreativität" | "klarheit"
  ) => {
    setSelectedButton2(buttonType2);
  };

  return (
    <div>
      <div className="scroll-container" dir="ltr">
        <div className="hero-section">
          <div className="hero-section-headline">
            <h2>{t("mediaCompetenceH1")}</h2>
          </div>
          <div className="hero-section-visual">
            <Spot />
          </div>
          <div className="hero-section-content">
            <p>{t("mediaCompetenceContent1")}</p>
            <br />
            <br />
            <p>{t("mediaCompetenceContent2")}</p>
          </div>
          <div className="scroll-down-cta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
            >
              <path
                d="M1 0.999998L50 49M50 49H8M50 49V5.8"
                stroke="#E7E7E7"
                strokeWidth="2"
              />
            </svg>
            <div style={{ width: "250px;" }} className="scroll-down-cta-text">
              <p>{t("cta1")}</p>
            </div>
          </div>
        </div>
        <div className="section-2-center">
          <div className="quote">
            <h3>{t("quoteText")}</h3>
            <p>{t("quoteAuthor")}</p>
          </div>
          <h4>{t("mediaLiteracy")}</h4>
          <div className="cta-sec-1">
            <div
              className={`button ${
                selectedButton1 === "aufmerksamkeit" ? "active-button" : ""
              }`}
              onClick={() => handleButtonClick1("aufmerksamkeit")}
            >
              {t("column1Title")}
            </div>
            <div
              className={`button ${
                selectedButton1 === "selbstmanagement" ? "active-button" : ""
              }`}
              onClick={() => handleButtonClick1("selbstmanagement")}
            >
              {t("column2Title")}
            </div>
          </div>
          {selectedButton1 === "aufmerksamkeit" && (
            <div className="text-column-section">
              <div className="tab-content-column">
                <h4>{t("column1Title")}</h4>
                <p className="text">{t("column1Text")}</p>
              </div>
              <img src={aufmerksamkeitImage} style={{ width: "200px" }} />
            </div>
          )}
          {selectedButton1 === "selbstmanagement" && (
            <div className="text-column-section">
              <div className="tab-content-column">
                <h4>{t("column2Title")}</h4>
                <p className="text">{t("column2Text")}</p>
              </div>
              <img src={selbstManagementImage} style={{ width: "200px" }} />
            </div>
          )}
        </div>
        <div className="section-3">
          <div className="content-block">
            <h4>{t("section3Headline")}</h4>
            <div className="thin">
              <p className="text">{t("section3Text")}</p>
            </div>
          </div>
          <div className="spotlight-section">
            <div className="image-column-section">
              <img width={"280px"} src={spotlight} />
              <div className="small">
                <p className="text">{t("imageColumnSectionText")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-3">
          <SpotLightScene />
        </div>
        <div className="section-3">
          <div className="cta-sec-2">
            <div
              className={`button ${
                selectedButton2 === "konzentration" ? "active-button" : ""
              }`}
              onClick={() => handleButtonClick2("konzentration")}
            >
              {t("tab1Title")}
            </div>
            <div
              className={`button ${
                selectedButton2 === "kreativität" ? "active-button" : ""
              }`}
              onClick={() => handleButtonClick2("kreativität")}
            >
              {t("tab2Title")}
            </div>
            <div
              className={`button ${
                selectedButton2 === "klarheit" ? "active-button" : ""
              }`}
              onClick={() => handleButtonClick2("klarheit")}
            >
              {t("tab3Title")}
            </div>
          </div>
          {selectedButton2 === "konzentration" && (
            <div className="column-block-2">
              <div className="content-block-2">
                <h4>{t("tab1Title")}</h4>
                <p className="text">
                  {t("tab1Content1")}
                  <br />
                  {t("tab1Content2")}
                </p>
              </div>
              <img width={"350px"} src={spotlightMinimal} />
            </div>
          )}
          {selectedButton2 === "kreativität" && (
            <div className="column-block-2">
              <div className="content-block-2">
                <h4>{t("tab2Title")}</h4>
                <p className="text">
                  {t("tab2Content")}
                  <br />
                  {t("tab2Content")}
                </p>
              </div>
              <img width={"500px"} src={creativityMinimal} />
            </div>
          )}
          {selectedButton2 === "klarheit" && (
            <div className="column-block-2">
              <div className="content-block-2">
                <h4>{t("tab3Title")}</h4>
                <p className="text">
                  {t("tab3Content")}
                  <br />
                  {t("tab3Content")}
                </p>
              </div>
              <img width={"500px"} src={clearityMinimal} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
