import "../scss/PageLayout.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-column">
        <a href="/impressum">{t("imprint")}</a>
      </div>
      <div className="footer-column">
        <a href="/datapolicy">{t("data-privacy")}</a>
      </div>
      <div className="footer-column">
        <a>© 2024</a>
      </div>
    </footer>
  );
}
