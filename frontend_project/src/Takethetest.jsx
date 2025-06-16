import Footer from "./Footer";
import Navbar from "./Navbar";
import style from "../src/takethetest.module.css"

export default function Takethetest() {
    return(
        <>
         <Navbar />
         <main>
            <div className={style["taketest-section1"]}>
                <h1>Take The Test</h1>
                <button className={style["taketest-btn"]}> <a href="/test">Click here to test your IQ!</a></button>
            </div>
            <div className={style["taketest-section3"]}></div>
            <div className={style["taketest-section4"]}>
                <p>During the test, you must read and respond to a total of 38 true/false questions. <br />
                The test is timed, and the average test taker completes the test in about thirteen minutes. <br />
                Completing the test in less than thirteen minutes will raise your score. <br />
                Taking longer will lower your score. <br /> Correct answers are more important than the time.</p>
                <h3>So, be ready to concentrate and think fast!</h3>
                <button className={style["taketest-btn"]}><a href="/test">take the test</a> </button>
            </div> 
         </main>
         <Footer />
        </>
    )
}