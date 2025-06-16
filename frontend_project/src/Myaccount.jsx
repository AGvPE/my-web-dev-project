import Navbar from "./Navbar";
import Footer from "./Footer"
import { BiHide } from "react-icons/bi";
import style from "../src/myaccount.module.css"

export default function Myaccount() {
    return(
        <>
            <Navbar />
            <div className={style["my-account"]}>
                <div className={style.login}>
                    <h1>Login</h1>
                    <form>
                        <label className={style.label}>Username or email address*</label>
                        <input type="text" className={style.input} />
                        <label className={style.label}>Password*</label>
                        <input type="text" className={style.input}  />
                        <span className={style.bihide}> <BiHide /> </span>
                        <div className={style.log}>
                            <button className={style["account-btn"]}>Log in</button>
                            <label>
                                <input type="checkbox" name="" id="" />
                                <span className={style.label}>Remember me</span>
                            </label>
                        </div>
                        <p className={style["green-text"]}>Lost your password?</p>
                    </form>
                </div>
                <div className={style.register}>
                    <h1>Register</h1>
                    <form action="">
                        <label className={style.label}>Username*</label>
                        <input type="text" className={style.input}/>
                        <label className={style.label}>Email address*</label>
                        <input type="text" className={style.input}/>
                        <label className={style.label}>Password*</label>
                        <input type="text" className={style.input}/>
                        <span className={style.bihide1}> <BiHide /> </span>
                        <span>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="" className="green-text">privacy policy</a>. We do not share your email address or other data</span>
                        <button className={style["account-btn"]}>Register</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}