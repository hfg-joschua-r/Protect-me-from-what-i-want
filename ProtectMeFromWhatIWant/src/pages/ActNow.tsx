import "../components/styles/ActNow.css";
import { useState } from 'react';
// import doodle from "../assets/doodle.png";

export default function ActNow() {
    const [selectedTip, setSelectedTip] = useState('shortterm'); 
    const [selectedTab, setSelectedTab] = useState('apps'); 

    const handleTipButtonClick = (tipType: 'longterm' | 'shortterm') => {
        setSelectedTip(tipType);
        setSelectedTab(tipType === 'shortterm' ? 'apps' : 'pauses');
    };

    const handleTabButtonClick = (tabType: 'apps' | 'books' | 'podcasts' | 'theories' | 'pauses' | 'mindfulness' | 'stimuli' ) => {
        setSelectedTab(tabType);
    };

    return (
        <div>
            <div className="scroll-container" dir="ltr">
                <div className="section-1">
                    <h1 className="h2-pxgrotesk">Let’s get on that journey of improvement</h1>
                    <div className="digital-content">
                        Entdecke Methoden, Gedankenmodelle, die dich nicht nur im Hier und Jetzt unterstützen, sondern auch langfristig deine Beziehung zu digitalen Medien verbessern.
                    </div>
                    <div className="learn-more-cta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                        <path d="M1 0.999998L50 49M50 49H8M50 49V5.8" stroke="#E7E7E7" stroke-width="2"/>
                        </svg>
                        <div className="digital-content">
                        Improve your relationship with digital media                
                        </div>
                    </div>
                </div>
                <div className="section-2-actNow">
                    <div className="cta-sec">
                        <div className={`button-outline ${selectedTip === 'shortterm' ? 'active-button' : ''}`}>
                            <div className="button-outline-text" onClick={() => handleTipButtonClick('shortterm')}>
                                Shortterm tips
                            </div>
                        </div>
                        <div className={`button-outline ${selectedTip === 'longterm' ? 'active-button' : ''}`}>
                            <div className="button-outline-text" onClick={() => handleTipButtonClick('longterm')}> 
                                Longterm tips
                            </div>
                        </div>
                    </div>

                    {/* Shortterm */}
                    {selectedTip === 'shortterm' && (
                        <div className="tab-sec">
                            <div className={`button-underline ${selectedTab === 'apps' ? ' active-underline-button' : ''}`}>
                                <div className="button-underline-text" onClick={() => handleTabButtonClick('apps')}>
                                    Apps
                                </div>
                            </div>
                            <div className={`button-underline ${selectedTab === 'books' ? ' active-underline-button' : ''}`}>
                                <div className="button-underline-text" onClick={() => handleTabButtonClick('books')}>
                                    Bücher
                                </div>
                            </div>
                            <div className={`button-underline ${selectedTab === 'podcasts' ? ' active-underline-button' : ''}`}>
                                <div className="button-underline-text" onClick={() => handleTabButtonClick('podcasts')}>
                                    Podcasts
                                </div>
                            </div>
                            <div className={`button-underline ${selectedTab === 'theories' ? ' active-underline-button' : ''}`}>
                                <div className="button-underline-text" onClick={() => handleTabButtonClick('theories')}>
                                    Theorien
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Longterm */}
                    {selectedTip === 'longterm' && (
                        <div className="tab-sec">
                            <div className={`button-underline ${selectedTab === 'pauses' ? ' active-underline-button' : ''}`}>
                                <div className="button-underline-text" onClick={() => handleTabButtonClick('pauses')}>
                                    Pausen
                                </div>
                            </div>
                            <div className={`button-underline ${selectedTab === 'mindfulness' ? ' active-underline-button' : ''}`}>
                                <div className="button-underline-text" onClick={() => handleTabButtonClick('mindfulness')}>
                                    Achtsamkeit
                                </div>
                            </div>
                            <div className={`button-underline ${selectedTab === 'stimuli' ? ' active-underline-button' : ''}`}>
                                <div className="button-underline-text" onClick={() => handleTabButtonClick('stimuli')}>
                                    Störreize
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Apps */}
                    {selectedTab === 'apps' && (
                    <div className="column-tips">
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">OneSec</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">Forest</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                    </div>
                    )}

                    {/* Books */}
                    {selectedTab === 'books' && (
                    <div className="column-tips">
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">Gehirn gehört - Volker Busch</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">1% Methode</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">Atomic Habits</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                    </div>
                    )}

                    {/* Podcasts */}
                    {selectedTab === 'podcasts' && (
                    <div className="column-tips">
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">Gehirn gehört - Volker Busch</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                    </div>
                    )}

                    {/* Theorien */}
                    {selectedTab === 'theories' && (
                    <div className="column-tips">
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">1% Methode</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                    </div>
                    )}

                    {/* Pauses */}
                    {selectedTab === 'pauses' && (
                    <div className="column-tips">
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">Innehalten</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">Kreativität</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">Nixxen</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                    </div>
                    )}

                    {/* mindfulness */}
                    {selectedTab === 'mindfulness' && (
                    <div className="column-tips">
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">...</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                    </div>
                    )}

                    {/* Stimuli */}
                    {selectedTab === 'stimuli' && (
                    <div className="column-tips">
                        <div className="tip-box">
                            <div className="tip-box-content">
                                <div className="tip-box-title">...</div>
                                {/* <img width="139px;" src={doodle}/> */}
                                <div className="tip-box-text">Digital Overload: Wie exzessives Scrollen die Fähigkeit zum Inne-halten hemmt und Problem-lösungen auf Standby setzt</div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}
