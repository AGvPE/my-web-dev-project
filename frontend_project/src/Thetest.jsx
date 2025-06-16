import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Thetest() {
    return(
        <>
            <Navbar />
            <main className="test-main">
                <div className="test-section1">
                    <h1>Instructions for the IQ Test</h1>
                    <p>You must work mentally. <br /> Do not use a pen or pencil, paper, a calculator, or other devices during this test.</p>
                    <p>During the test, you must read and respond to a total of 38 statements.</p>
                    <p>Be ready to determine whether the statements are true or false.</p>
                    <p>The test is timed, so work quickly, but take enough time to consider each question seriously.</p>
                    <p>Correct answers are more important than the time.</p>
                    <hr className="hr" />
                    <br />
                    <br />
                    <br />
                    <hr className="hr" />
                </div>
                <button className="btn5"><a href="/test1">NEXT</a></button>
            </main>
            <Footer />
        </>
    )
}