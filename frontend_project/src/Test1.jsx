import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Test1() {
    return(
        <>
            <Navbar />
            <main className="tests-section">
                <div className="tests">
                    <div className="question">
                        <span className="question-number">1</span> 
                        <span className="q1">The word, "mineral," can be spelled using only the letters found in the word, "parliament."</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">2</span>
                        <span className="q1">This sequence of four words, "triangle, glove, clock, bicycle," corresponds to this sequence of numbers "3, 5, 12, 2."</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">3</span>
                        <span className="q1">27 minutes before 7 o'clock is 33 minutes past 5 o'clock.</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">4</span>
                        <span className="q1">The word "because" can be spelled by using the first letters of the words in the following sentence: Big Elephants Can Always Understand Small Elephants."</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">5</span>
                        <span className="q1">If written backwards, the number, "one thousand, one hundred twenty-five," would be written "five thousand, two hundred eleven."</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>

                    <hr className="hr1"/>

                    <div className="test-btn">
                        <button className="btn6"><a href="/test">PREVIOUS</a></button>
                        <button className="btn6"> <a href="/test2">NEXT</a></button>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}