import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Test2() {
    return(
        <>
            <Navbar />
            <main className="tests-section">
                <div className="tests">
                    <div className="question">
                        <span className="question-number">6</span> 
                        <span className="q1">Gary has only forty-eight dollars. If he borrows fifty-seven dollars from Jane and fifteen dollars from Jill, he can buy a bicycle that costs one hundred twenty dollars, (disregarding tax.)</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">7</span>
                        <span className="q1">If a round analog clock featuring numbers 1-12 is hung on the wall upside down, the minute hand will point to the right of the viewer when the clock reads two forty-five.</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">8</span>
                        <span className="q1">If the word, "quane," is understood to mean the same as the word, "den," then the following sentence is grammatically correct: "Looking out from my quane, I could see a wolf enter quane."</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">9</span>
                        <span className="q1">If Richard looks into a mirror and touches his left ear with his right hand, Richard's image seems to touch its right ear with its left hand.</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">10</span>
                        <span className="q1">If you leave the letters in the same order, but rearrange the spaces in the phrase, "Them eats on," it can be read as, "Theme at son."</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>

                    <hr className="hr1"/>

                    <div className="test-btn">
                        <button className="btn6"><a href="/test1">PREVIOUS</a></button>
                        <button className="btn6"> <a href="/test3">NEXT</a></button>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}