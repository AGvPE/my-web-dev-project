import Footer from "./Footer";
import Navbar from "./Navbar";
import style from "../src/iqtuneups.module.css"

export default function IQTuneUps(){
    return(
        <>
            <Navbar />
            <main>
                <div className={style["iqtune-section1"]}>
                    <h1>IQTuneUps</h1>
                </div>

                <div className={style["iqtune-section2"]}>
                    <h3 className={style["iqtune-underline-after"]}>Try a Free IQTuneUp:</h3>
                    <div className={style["iqtune-content"]}>
                        <div className={style["iqtune-contain"]}>
                            <img src="/IQtunepage/exercise-1.jpg" alt="" />
                            <h3>What Have I Chosen?</h3>
                            <p>Explore the value of innocence in the choices you make daily and what your past has to offer.</p>
                            
                        </div>
                        <div className={style["iqtune-contain"]}>
                            <img src="/IQtunepage/exercise-2.jpg" alt="" />
                            <h3>How Do I Mean?</h3>
                            <p>Explore how meaning emerges from consciousness and your power to create meaning arbitrarily.</p>

                        </div>
                        <div className={style["iqtune-contain"]}>
                            <img src="/IQtunepage/exercise-3.jpg" alt="" />
                            <h3>Singing My Self</h3>
                            <p>Explore the difference between thinking a thought and listening to a thought.</p>
                            
                        </div>  
                    </div>
                </div>

                <div className={style["iqtune-section3"]}>
                    <h3 className={style["iqtune-underline-after1"]}>Some of the IQTuneUps you will receive:</h3>
                    <div className={style["iqtune-cards"]}>
                        <div className={style["iqtune-card-row"]}>
                            <div className={style["iqtune-card"]}>
                                <h3>Inner Reality</h3>
                                <p>All things are merely concepts within our minds.</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>Ultimate Self</h3>
                                <p>Intellectually approaching your ultimate self.</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>Universal Consciousness</h3>
                                <p>Gaining the experience of Universal Consciousness.</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>Selecting Your Personality</h3>
                                <p>A strong technique for enhancing personality with positivity.</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>Sentient Sentences</h3>
                                <p>An entertaining essay composed of sentient sentences.</p>
                            </div>
                        </div>
                        <div className={style["iqtune-card-row"]}>
                            <div className={style["iqtune-card"]}>
                                <h3>Unearthing Emotion</h3>
                                <p>A powerful technique for unearthing deep emotions.</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>Automatic Creativity</h3>
                                <p>The true, automatic nature of creativity.</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>Subtle Mind</h3>
                                <p>Powerfully enhancing consciousness.</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>Being God</h3>
                                <p>How do we deal with being jaded?</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>Choice</h3>
                                <p>Changing handedness temporarily as an exercise in taking control.</p>
                            </div>
                        </div>
                        <div className={style["iqtune-card-row"]}>
                            <div className={style["iqtune-card"]}>
                                <h3>Consenting Adult Game</h3>
                                <p>A fun game for adults.</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>A visit from God</h3>
                                <p>Allowing the sacredness of life to be appreciated.</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>Now</h3>
                                <p>"Now" is examined as a concept that is inconceivable.</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>Inner Witness</h3>
                                <p>The difference between the mind and the witness.</p>
                            </div>
                            <div className={style["iqtune-card"]}>
                                <h3>Sainthood, Step by Step</h3>
                                <p>Starting along a path to perfection.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style["iqtune-section4"]}>
                    <h1 className={style["iqtune-underline-after1"]}>Purchase 134 IQTuneUps <br /> for only $19.95</h1>
                    <p>This Complete Consciousness Exploration Program helps you explore every facet of your inner being and many variations of intelligence.</p>
                    <button className={style["iqtune-btn"]}><a href="/">PURCHASE</a></button>
                </div>
            </main>
            <Footer />
        </>
    )
}