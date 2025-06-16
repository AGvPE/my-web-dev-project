import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import styles from "../src/navbar.module.css";


export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    }

    return(
        <>
            <div className={styles.navbar}>
                <div className={styles["nav-left"]}>
                    <a className={styles["navbar-brand"]} href="/">
                        <img src="/homepage/logo.png" alt="" />
                    </a>

                    <img src="/homepage/nav-sep.png" alt="" className={styles.navsep} />
                </div>

                <div className={styles["nav-right"]}>
                    <div className={styles.left}>
                        <ul className={styles.un_li}>
                            <li className={styles.li}><a href="/faq" className={styles["nav-link"]}>FAQ</a></li>
                            <li className={styles.li}><a href="/history" className={styles["nav-link"]}>History</a></li>
                            <li className={styles.li}><a href="/iqtunesup" className={styles["nav-link"]}>IQTuneUps</a></li>
                            <li className={styles.li}><a href="/test" className={styles["nav-link"]}>The Test</a></li>
                            <li className={styles.li}><a href="/contactus" className={styles["nav-link"]}><span className={styles.contact}>Contact Us </span><i className={`${styles.angle} ${styles["fa-solid"]} ${styles["fa-angle-down"]}`}></i></a></li>
                                <div className={styles.dropdown}>
                                    <div className={styles.dropItem}><a href="/contactus">General Contact</a></div>
                                    <div className={styles.dropItem}><a href="/contactus">Lost Score</a></div>
                                </div>
                            <li className={styles.li}><a href="/blog" className={styles["nav-link"]}>Blog</a></li>
                            <li className={styles.li}><a href="/store" className={styles["nav-link"]}>Store</a></li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <a href="/myaccount">My account</a>
                        <a href="/Cart">Cart <FaCartShopping/></a>
                        <a href="/taketest" className={styles["take-test"]}>Take the Test</a>
                    </div>
                </div>

                <div className={`${styles.menu} ${styles.btn}`} onClick={toggleMenu}>
                    <IoMenu />
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className={styles.mobileMenu}>
                    <a href="/faq">FAQ</a>
                    <a href="/history">History</a>
                    <a href="/iqtunesup">IQTuneUps</a>
                    <a href="/test">The Test</a>
                    <a href="/contactus">Contact Us</a>
                    <a href="/blog">Blog</a>
                    <a href="/store">Store</a>
                    <a href="/myaccount">My Account</a>
                    <a href="/Cart">Cart</a>
                    <a href="/taketest" className={styles["take-test"]}>Take the Test</a>
                    </div>
                )}


            </div>
        </>
    )
}