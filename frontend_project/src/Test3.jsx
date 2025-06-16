import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Test3() {
    return(
        <>
            <Navbar />
            <main className="tests-section">
                <div className="tests">
                    <div className="question">
                        <span className="question-number">11</span> 
                        <span className="q1">Each of the words, "auctioned, education, and cautioned," uses the same letters.</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">12</span>
                        <span className="q1">John weighs 85 pounds. Jeff weighs 105 pounds. Jake weighs 115 pounds. Two of them standing together on the same scale could weigh 200 pounds.</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">13</span>
                        <span className="q1">The seventh vowel appearing in this sentence is the letter "a."</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">14</span>
                        <span className="q1">Nine chickens, two dogs, and three cats have a total of forty legs.</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    <div className="question">
                        <span className="question-number">15</span>
                        <span className="q1">Sixteen hours are to one day as twenty days are to June's length.</span>
                        <label><input type="radio" name="" id="" /> True</label>
                        <label><input type="radio" name="" id="" /> False</label>
                    </div>
                    
                </div>

                <div className="test-section1">
                    <div className="stop-timer">
                        <button className="btn">Stop Timer</button>
                    </div>

                    <form className="test-form">
                        <label>Name (This name will appear on your profile and certificate)</label>
                        <input type="text" />
                        <label>Email</label>
                        <input type="text" />
                        <button className="btn7">Submit</button>
                    </form>

                    <hr className="hr2"/>

                    <div className="test-btn1">
                        <button className="btn6"><a href="/test2">PREVIOUS</a></button>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}