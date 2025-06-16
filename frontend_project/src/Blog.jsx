import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaAngleRight } from "react-icons/fa6";
import style from "../src/blog.module.css"

export default function Blog() {
    return(
        <>
            <Navbar />
            <main>
                <div className={style["blog-section1"]}>
                    <h1>Blog</h1>
                </div>
    
                <div className={style["blog-cards"]}>
                    <div className={style["blog-card"]}>
                        <img src="/homepage/Complete-Intelligence-Profile-1-mini.jpg" alt="" />
                        <div className={style["blog-text"]}>
                            <h3>What Is the Complete Intelligence Profile?</h3>
                            <p>When you take the IQ Test, you will receive a General Score for free. That score gives you the big…</p>
                        </div>
                    </div>
                    <div className={style["blog-card"]}>
                        <img src="/homepage/blog-2.jpg" alt="" />
                        <div className={style["blog-text"]}>
                            <h3>History of Intelligence Testing</h3>
                            <p>Among the first to investigate individual differences in mental ability was a British scientist, Sir Francis Galton, who compared people…</p>
                        </div>
                    </div>
                    <div className={style["blog-card"]} id="scroller">
                        <img src="/homepage/home-graph.jpg" alt="" />
                        <div className={style["blog-text"]}>
                            <h3>What Is an IQ?</h3>
                            <p>Originally, intelligence testing was used to detect children of lower intelligence in order to place them in special education…</p>
                        </div>
                    </div>
                </div>
                <div className={`${style["blog-card"]} ${style["blog-card1"]}`}>
                    <img src="blog/analyze-a-problem-unsplash-scaled.jpg" alt="" />
                    <div className={style["blog-text"]}>
                        <h3>Analyzing a Question</h3>
                        <p>When you take the IQ test, the site will determine 13 individual IQ scores for different mental abilities. The process…</p>
                    </div>
                </div>

                <div className={`${style["blog-section3"]} ${style["blog-end"]}`}>
                    <div className={style.text}>
                        <h2>Earn $3.5 per answer</h2>
                        <br />
                        <br />
                        <p>Make money from answering simple questions. We pay you in cash. Simple and fun.</p>
                    </div>
                    <div className={style["angle-arrow"]}> <FaAngleRight/> </div>
                </div>
            
            </main>
            <Footer />
        </>
    )
}