import { useTranslation } from "react-i18next";
import "../scss/PageLayout.scss";

export default function Impressum() {
  const { t } = useTranslation();
  return (
    <div className="Imprint-Datapolicy">
      <h1>{t("imprint-title")}</h1>
      <p>
        {t("i1")} <br /> {t("i2")} <br />
        {t("i3")}
        <br /> {t("i4")} <br />
        {t("i5")} <br />
        {t("i6")} <br />
        <br />
        <h3>{t("i7")}</h3>
        {t("i8")} <br />
        <br />
        <h3>{t("i9")}</h3>
        {t("i10")}
        <br />
        <br />
        <h3>{t("i11")}</h3> <h3>{t("i12")}</h3> {t("i13")} <br />
        <br />
        <h3>{t("i14")}</h3> {t("i15")} <br />
        <br />
        <h3>{t("i16")}</h3> {t("i17")}
      </p>
    </div>
  );
}
