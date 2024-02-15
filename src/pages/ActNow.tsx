import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../components/styles/ActNow.scss";
import "../components/styles/global.scss";

import focusMode from "@/assets/focusMode.gif";
import LegoBricks from "../components/3D-Storytelling/LegoBricks";
// import forestApp from "@/assets/forestAppPreview.png";
// import gehirnGehoert from "@/assets/gehirnGehoert.png";
import Prozent from "@/assets/Prozent.gif";
import kreativität from "@/assets/kreativitaet.gif";
import nixxen from "@/assets/nixxen.gif";
import OneSec from "@/assets/oneSec.gif";

import InnehaltenBlack from "@/assets/InnehaltenBlack.gif";
import appLimitsGIF from "@/assets/appLimits.gif";
import arrow from "@/assets/arrowStraight.svg";
import grauStufenGIF from "@/assets/grauStufen.gif";
import handyFrei from "@/assets/handyFrei.gif";

import { motion } from "framer-motion";
import animation from "../components/animations/divAnim";

export default function ActNow() {
  const { t } = useTranslation();
  // const [selectedTip, setSelectedTip] = useState("shortterm");
  //   const [selectedTab, setSelectedTab] = useState("apps");

  // const handleTipButtonClick = (tipType: "longterm" | "shortterm") => {
  //   setSelectedTip(tipType);
  //   // setSelectedTab(tipType === "shortterm" ? "apps" : "pauses");
  // };

  //   const handleTabButtonClick = (
  //     tabType:
  //       | "apps"
  //       | "books"
  //       | "podcasts"
  //       | "theories"
  //       | "pauses"
  //       | "mindfulness"
  //       | "stimuli"
  //   ) => {
  //     setSelectedTab(tabType);
  //   };

  // const [currentCard, setCurrentCard] = useState(1); // Initialisiere mit der ersten Karte
  const [currentCard2, setCurrentCard2] = useState(1); // Initialisiere mit der ersten Karte
  // const [isShaking, setIsShaking] = useState(false);

  // const handleArrowClick = (direction) => {
  //   // Überprüfe, ob die nächste Karte existiert
  //   if (direction === "next" && currentCard < totalCards) {
  //     setCurrentCard((currentCard + 1) % totalCards);
  //     setIsShaking(true);
  //     setTimeout(() => {
  //       setIsShaking(false);
  //     }, 500);
  //   } else if (direction === "prev" && currentCard > 0) {
  //     setCurrentCard((currentCard - 1) % totalCards);
  //     setIsShaking(true);
  //     setTimeout(() => {
  //       setIsShaking(false);
  //     }, 500);
  //   }
  // };

  const handleArrowClick2 = (direction) => {
    // Überprüfe, ob die nächste Karte existiert
    if (direction === "next" && currentCard2 < totalCards2) {
      setCurrentCard2((currentCard2 + 1) % totalCards2);
      // setIsShaking(true);
      setTimeout(() => {
        // setIsShaking(false);
      }, 500);
    } else if (direction === "prev" && currentCard2 > 0) {
      setCurrentCard2((currentCard2 - 1) % totalCards2);
      // setIsShaking(true);
      setTimeout(() => {
        // setIsShaking(false);
      }, 500);
    }
  };

  // const totalCards = 4; // Anzahl der Karten insgesamt
  const totalCards2 = 9; // Anzahl der Karten insgesamt

  // const cards = [
  //   {
  //     title: "Stelle dein Handy auf Graustufen",
  //     content:
  //       "Dein Handy besitzt die Funktion, den Bildschirm nur noch in Graustufen darzustellen. Dadurch wird die Benutzung auf Dauer anstrengend für die Augen und somit unattraktiver. Ein gutes Mittel also, um die Handysucht zu bekämpfen.",
  //     content2:
  //       "iPhone: Einstellungen → Allgemein → Bedienungshilfen → Display-Anpassungen → Farbfilter einschalten.",
  //     gif: grauStufenGIF,
  //   },
  //   {
  //     title: "Limits für die App-Nutzung festlegen",
  //     content:
  //       "Du kannst ein Zeitlimit für eine Kategorie von Apps (z. B: „Spiele“ oder „Soziale Netzwerke“) und für einzelne Apps festlegen.",
  //     content2:
  //       "Wähle „Einstellungen“ → „Bildschirmzeit“. Tippe auf → „App-Limits“ und danach auf → „App-Limit“. Wähle eine oder mehrere Apps oder App-Kategorien aus. Tippe oben rechts auf → „Weiter“ und lege die erlaubte Zeitspanne fest. Wenn du mit dem Festlegen von Limits fertig bist, tippst du auf → „Hinzufügen“.",
  //     gif: appLimitsGIF,
  //   },
  //   {
  //     title: "OneSec herunterladen",
  //     content:
  //       "Jedes Mal, wenn du versuchst, deine Lieblingsapp zu öffnen, warte. Atme tief ein und langsam wieder aus. Eine Sekunde gibt dir die Möglichkeit, innezuhalten und zweimal nachzudenken - bevor du in ein endloses Schlupfloch gesogen werden, das dich wieder stundenlang in den Bann zieht.",
  //     gif: OneSec,
  //   },
  //   {
  //     title: "1% Methode",
  //     content:
  //       "Indem wir täglich nur 1% unserer Bildschirmzeit für bewusste Pausen oder produktive Aktivitäten reservieren, können wir langfristig unsere digitale Medienroutine verbessern. Dies könnte bedeuten, dass wir uns 1% der Zeit für informative Podcasts oder Bücher statt endloses Scrollen auf Social Media widmen. Kleine digitale Anpassungen können zu einer nachhaltigeren und bewussteren Nutzung führen.",
  //     gif: Prozent,
  //   },
  //   // ...
  // ];

  const cards2 = [
    {
      title: "Digitale Pausen - Nixxen",
      content:
        'Obwohl digitale Ablenkungen wie lustige Videos oder Telefonate für kurzzeitige Entspannung sorgen können, empfehlen Neurowissenschaftler eine tiefere Form der Erholung. Inmitten des digitalen Trubels ist bewusstes "Nixen" ein Weg zur mentalen Entspannung. Ohne Bildschirm, ohne Ablenkungen – einfach die Gedanken treiben lassen. Ein einfacher, aber effektiver Schlüssel zur inneren Ruhe.',
      content2: "",
      gif: nixxen,
    },
    {
      title: "Innehalten im Alltag",
      content:
        "Im hektischen Alltag hilft bewusstes Innehalten, Stressfaktoren zu erkennen und effektive Lösungsansätze zu finden. Medienkonsum in freien Momenten kann diese wichtige Reflexionszeit beeinträchtigen. Eine Studie zeigt, dass viele lieber zum Smartphone greifen, anstatt sich mit ihren Gedanken auseinanderzusetzen. Zeit für bewusstes Innehalten kann transformative Wirkung haben.",
      content2: "",
      gif: handyFrei,
    },
    {
      title: "Innehalten am Morgen",
      content:
        "Nimm dir morgens bewusst 10 Minuten ohne Handy, bevor du in den digitalen Trubel startest. Nutze diese Zeit, um deine Prioritäten für den Tag zu setzen, statt direkt in den Strudel der Nachrichten und Social-Media-Updates gezogen zu werden. Ein klarer Start kann dir helfen, den Tag fokussierter und stressfreier anzugehen.",
      gif: InnehaltenBlack,
    },
    {
      title: "Handyfreie Zonen",
      content:
        "Erschaffe Räume in deinem Zuhause, in denen das Handy Pause macht. Diese handyfreien Zonen fördern bewusste Auszeiten, stärken echte Verbindungen und schenken dir kostbare Momente der Achtsamkeit.",
      content2:
        "Das könnte zum Beispiel dein Bett, gesamtes Schlafzimmer oder dein Sessel sein.",
      gif: handyFrei,
    },
    {
      title: "Kreativität",
      content:
        "Richte deinen Fokus nicht auf Dinge innerhalb deines Smartphones, sondern auf dein offline Leben. Welche hobbys bringen dir Freude und Eefüllung? Entdecke dein Kreativität wider, um dich so von deinem Smartphone zu lösen. Schaue nicht anderen durch einen Bildschirm beim leben zu, sondern kreie dein eigenes Leben.",
      content2:
        "→ Hol dir unsere App, für Inspiration und kreative Anstöße im Alltag",
      gif: kreativität,
    },

    {
      title: "Stelle dein Handy auf Graustufen",
      content:
        "Dein Handy besitzt die Funktion, den Bildschirm nur noch in Graustufen darzustellen. Dadurch wird die Benutzung auf Dauer anstrengend für die Augen und somit unattraktiver. Ein gutes Mittel also, um die Handysucht zu bekämpfen.",
      content2:
        "iPhone: Einstellungen → Allgemein → Bedienungshilfen → Display-Anpassungen → Farbfilter einschalten.",
      gif: grauStufenGIF,
    },
    {
      title: "Limits für die App-Nutzung festlegen",
      content:
        "Du kannst ein Zeitlimit für eine Kategorie von Apps (z. B: „Spiele“ oder „Soziale Netzwerke“) und für einzelne Apps festlegen.",
      content2:
        "Wähle „Einstellungen“ → „Bildschirmzeit“. Tippe auf → „App-Limits“ und danach auf → „App-Limit“. Wähle eine oder mehrere Apps oder App-Kategorien aus. Tippe oben rechts auf → „Weiter“ und lege die erlaubte Zeitspanne fest. Wenn du mit dem Festlegen von Limits fertig bist, tippst du auf → „Hinzufügen“.",
      gif: appLimitsGIF,
    },
    {
      title: "OneSec herunterladen",
      content:
        "Jedes Mal, wenn du versuchst, deine Lieblingsapp zu öffnen, warte. Atme tief ein und langsam wieder aus. Eine Sekunde gibt dir die Möglichkeit, innezuhalten und zweimal nachzudenken - bevor du in ein endloses Schlupfloch gesogen werden, das dich wieder stundenlang in den Bann zieht.",
      gif: OneSec,
    },
    {
      title: "1% Methode",
      content:
        "Indem wir täglich nur 1% unserer Bildschirmzeit für bewusste Pausen oder produktive Aktivitäten reservieren, können wir langfristig unsere digitale Medienroutine verbessern. Dies könnte bedeuten, dass wir uns 1% der Zeit für informative Podcasts oder Bücher statt endloses Scrollen auf Social Media widmen. Kleine digitale Anpassungen können zu einer nachhaltigeren und bewussteren Nutzung führen.",
      gif: Prozent,
    },
  ];

  return (
    <>
      <motion.div className="hero-container" {...animation}>
        <aside className="left-col">
          <h3>{t("actNowChapter")}</h3>
        </aside>
        <div className="hero-header">
          <h1>{t("actNowH2")}</h1>
        </div>
        <div className="hero-text">
          <p>{t("actNowP1")}</p>
        </div>
        <a
          className="scroll-down-cta"
          style={{ gridRow: "4" }}
          href="#scroll-to"
        >
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
          <div>
            <p className="scroll-down-cta-text">{t("actNowP2")}</p>
          </div>
        </a>
        <div className="hero-visual">
          <LegoBricks />
        </div>
      </motion.div>
      <motion.div className="container" {...animation} id="scroll-to">
        <aside className="left-col">
          <h3>OneSec</h3>
          <p>{t("oneSecChapterText")}</p>
        </aside>

        <div className="hero-header">
          <h1 style={{ color: "rgb(179, 161, 255)" }}>{t("onseSecH1")}</h1>
          <p>{t("onseSecP1")}</p>
        </div>
        {/* <div className="hero-text"></div> */}
        <div className="hero-visual-img">
          <img src={OneSec} />
        </div>
        <div className="scroll-down-cta" style={{ gridRow: "5" }}>
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
          <a href="https://one-sec.app/" style={{ cursor: "pointer" }}>
            <div>
              <p className="scroll-down-cta-text" style={{ maxWidth: "300px" }}>
                {t("oneSecCta")}
              </p>
            </div>
          </a>
        </div>
      </motion.div>
      <motion.div className="container" {...animation}>
        <aside className="left-col">
          <h3>{t("focusModeChapter")}</h3>
          <p>{t("focusModeChapterText")}</p>
        </aside>

        <div className="hero-header">
          <h1 style={{ color: "rgb(179, 161, 255)" }}>{t("focusModeH1")}</h1>
          <p>{t("focusModeP1")}</p>
        </div>
        <div className="hero-visual-img">
          <img src={focusMode} />
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
          <a href="/focus-mode" style={{ cursor: "pointer" }}>
            <div>
              <p className="scroll-down-cta-text" style={{ maxWidth: "300px" }}>
                {t("focusModeCta")}
              </p>
            </div>
          </a>
        </div>
      </motion.div>
      <motion.div className="container" {...animation}>
        <aside className="left-col-withContent">
          <h3>{t("actOptionsChapter")}</h3>
          <p>{t("actOptionsChapterText")}</p>
        </aside>
        {/* <div className="topic-switcher">
          <div
            className={`button ${
              selectedTip === "shortterm" ? "active-button" : ""
            }`}
            onClick={() => handleTipButtonClick("shortterm")}
          >
            {t("shorttermTips")}
          </div>
          <div
            className={`button ${
              selectedTip === "longterm" ? "active-button" : ""
            }`}
            onClick={() => handleTipButtonClick("longterm")}
          >
            {t("longtermTips")}
          </div>
        </div> */}
        <div className="carousel-arrow-left">
          <div className="button" onClick={() => handleArrowClick2("prev")}>
            <img src={arrow} className="arrow-white left" />
          </div>
        </div>
        <div className="carousel-content">
          {/* Neu bauen mit framer motion */}
          <h2 className="">{cards2[currentCard2].title}</h2>
          <p className="">
            {cards2[currentCard2].content + cards2[currentCard2].content2}
          </p>
          <img src={cards2[currentCard2].gif} />
        </div>
        <div className="carousel-arrow-right">
          <div className="button" onClick={() => handleArrowClick2("next")}>
            <img src={arrow} className="arrow-white" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
