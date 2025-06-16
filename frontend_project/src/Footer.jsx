import styles from "../src/footer.module.css"

export default function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles["footer-above"]}>
                <a href="" className={styles["footer-img"]}>
                    <img src="iqtest.png" alt="" />
                </a>

                <div className={styles["footer-li"]}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/history">History</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/test">Test</a></li>
                        <li><a href="/store">Store</a></li>
                    </ul>

                    <ul>
                        <li><a href="/contactus">Contact Us</a></li>
                        <li><a href="">Privacy Policy/Terms of service</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="iqtunesup">IQTuneUps</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles["footer-below"]}>
                <hr />
                <p className={styles["underline-before"]}>© 2003 - 2025 Agape Group. All rights reserved</p>
            </div>
        </div>
    )
}