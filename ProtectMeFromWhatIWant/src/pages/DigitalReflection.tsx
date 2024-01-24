import { useState } from "react";
import "../components/styles/DigitalReflection.css";
import { useTranslation } from 'react-i18next';

export default function DigitalReflection() {
  const { t } = useTranslation();

  const [questions] = useState([
    t('question1'),
    t('question2'),
    t('question3'),
    t('question4'),
    t('question5'),
    t('question6'),
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(
    t('question1')
  );

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    setCurrentQuestion(randomQuestion);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>;
        <div className="scroll-container" dir="ltr">
          <div className="section-1">
            <h1 className="h2-pxgrotesk">
              {t('digitalReflectionH1')}
            </h1>
            <div className="digital-content">
              {t('digitalReflectionP1')}
            </div>
            <div className="learn-more-cta">
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
              <div className="digital-content">{t('digitalReflectionP2')}</div>
            </div>
          </div>

          <div className="section-2">
            <div className="question-section">
              <div className="question">{currentQuestion}</div>
            </div>
            <div className="cta-section">
              <div className="button-outline" onClick={getRandomQuestion}>
                <div className="button-outline-text">shuffle</div>
              </div>
              <div className="button-outline">
                <div className="button-outline-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      d="M17 1C17 0.447715 16.5523 -2.52353e-10 16 -2.53133e-07L7 5.47657e-07C6.44772 2.10482e-07 6 0.447716 6 1C6 1.55228 6.44772 2 7 2L15 2L15 10C15 10.5523 15.4477 11 16 11C16.5523 11 17 10.5523 17 10L17 1ZM1.70711 16.7071L16.7071 1.70711L15.2929 0.292893L0.292893 15.2929L1.70711 16.7071Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
