import Footer from "./Footer";
import Navbar from "./Navbar";
import style from "../src/contactus.module.css"

export default function Contactus() {
    return(
        <>
            <Navbar />
            <main>
                <div className={style["contact-section1"]}>
                    <h1>Get in Touch</h1>
                </div>

                <div className={style["contact-section2"]}>
                    <div className={style["contain-form"]}>
                        <h3 className={style["contact-underline-after"]}>Need some help?</h3>
                        <p>Please fill out the form below to send a comment or question to the staff at IQTest.com</p>
                        <form className={style["contact-form"]}>
                            <div className={style["contact-names"]}>
                                <input type="text" name="fisrt name" placeholder="First Name*" className={style["contact-name"]}/>
                                <input type="text" name="last name" placeholder="Last Name*" className={style["contact-name"]}/>
                            </div>
                            <input type="email" name="email" id="email" placeholder="Email*" className={style["contact-email"]}/>
                            <input type="text" name="message" placeholder="Your Message*" className={style["contact-message"]} />
                            <input type="submit" value="Submit" className={style["contact-btn"]} />
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}