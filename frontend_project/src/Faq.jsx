import Footer from "./Footer"
import Navbar from "./Navbar"
import { BiCross } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";
import style from "../src/faq.module.css"

export default function Faq(){
    return(
        <>
        <Navbar />
        <main>
            <div className={style["faq-section1"]}>
                <h1>FAQ</h1>
            </div>

            <div className={style["faq-section2"]}>
                <h3 className={style["faq-underline-after"]}>Frequently Asked Questions</h3>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> Why doesn't my credit card work? </p></div>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> How well did I do? What does my score mean?</p> </div>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> My computer crashed. How can I see my score or Complete Intelligence Profile again?</p></div>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> How can I purchase the Complete Intelligence Profile?</p></div>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> Can I see a sample profile?</p></div>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> Can you give me more information about IQ, scores, and tests?</p></div>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> What is the Complete Intelligence Profile?</p></div>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> Is this test valid for people who do not speak English well?</p></div>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> How can the test indicate so many different intellectual abilities?</p></div>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> Can I take the test again?</p></div>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> Why does my general IQ disagree with the score you show on my Complete Intelligence Profile?</p></div>
                <div className={style["questions"]}><BiCross className={style["bicross"]}/> <p className={style["q"]}> I can’t find my Certificate of Intelligence.</p></div>

                <div className={style["faq-section3"]}>
                    <div className={style["text"]}>
                        <h2>Earn $3.5 per answer</h2>
                        <br />
                        <br />
                        <p>Make money from answering simple questions. We pay you in cash. Simple and fun.</p>
                    </div>
                    <div className={style["angle-arrow"]}> <FaAngleRight/> </div>
                </div>
            </div>

        </main>
        <Footer />    
        </>
    )
}