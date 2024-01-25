import { useTranslation } from "react-i18next";
import "./styles/Interface.css";
import "./styles/global.css";

type SectionProps = {
  children: React.ReactNode;
};

const Section = (props: SectionProps) => {
  const { children } = props;
  return <section className="section">{children}</section>;
};

export default function Interface() {
  const { t } = useTranslation();

  return (
    <div className="container-section">
      <Section>
        <h1 className="h1-pxgrotesk"></h1>
      </Section>
      <Section>
        <div className="landingpage-column">
          <h2>{t("intro-h2")}</h2>
          <p>{t("intro-p")}</p>
        </div>
      </Section>
      <Section>
        <div className="landingpage-column">
          <h2>{t("consuming-media-h2")}</h2>
          <p>{t("consuming-media-p")}</p>
        </div>
      </Section>
      <Section>
        <div className="landingpage-column">
          <h2>{t("information-realm-h2")}</h2>
          <p>{t("information-realm-p")}</p>
        </div>
      </Section>
      <Section>
        <div className="landingpage-column">
          <h4 style={{"color":"#ffffff"}}>"The Magic Maybe," a concept by Robert Sapolsky, reveals the magnetic appeal of incomplete information, like a partially visible message or an incoming notification's "ping," triggering heightened curiosity and driving impulsive smartphone use in the quest for anticipated rewards.</h4>
          {/* <p>{t("hook-model-p")}</p> */}
        </div>
      </Section>
      <Section>
        <div className="landingpage-column">
          <h4 style={{"color":"#ffffff"}}>{t("one-sec-h2")}</h4>
        </div>
      </Section>
    </div>
  );
}
