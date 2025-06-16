import BrainModel from "./3dBrain"
import Card from "./Card"
import Data from "./assets/data"
import React, { useEffect, useRef, useState } from "react";

export default function Content() {
    const scrollRef = useRef(null);
    const [displayData, setDisplayData] = useState([...Data]);
  
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
      
        let animationFrameId;
        const scrollSpeed = 0.5; // Lower = slower, smoother
      
        const smoothScroll = () => {
          if (!el) return;
      
          el.scrollLeft += scrollSpeed;
      
          const { scrollLeft, clientWidth, scrollWidth } = el;
          const nearEnd = scrollLeft + clientWidth >= scrollWidth - 100;
      
          if (nearEnd) {
            // Append more content to simulate infinite scroll
            setDisplayData(prev => [...prev, ...Data]);
          }
      
          animationFrameId = requestAnimationFrame(smoothScroll);
        };
      
        animationFrameId = requestAnimationFrame(smoothScroll);
      
        return () => cancelAnimationFrame(animationFrameId);
      }, []);
      
    return (
        <main>
            <div className="header">
                <div style={{ width:'100%' }} className="intro-text extra">
                    <h1>Put your mind <br /> to the test</h1>
                    <h3>The World's Leading Online IQ Test</h3>
                    <a href="/taketest"><button className="btn">take the test</button></a>
                </div>
                    <div className="media">
                            <h1>Put your mind <br /> to the test</h1>
                            <h3>The World's Leading Online IQ Test</h3>
                            <a href="/taketest"><button className="btn">take the test</button></a>
                    </div>
                    <a href="" className="downarrow"></a>
                
            </div>

                    

            <div className="section1">
                <h3 className="underline-after">Why Our IQ Test?</h3>
                <div className="content1">
                    <div className="text1">
                        <p>Our original IQ test is the most scientifically valid free IQ test available online today.</p>
                        <p>Previously offered only to corporations, schools, and in certified professional applications, the test is now available to you. In addition to offering your free general IQ, we offer an optional extensive analysis of your score, reporting your performance in 13 different areas of intelligence and revealing your key cognitive strengths and weaknesses.</p>
                        <p>Developed by PhDs and statistically sound, our free test reflects the best research available and can be taken on any desktop, laptop, tablet, or phone.</p>
                        <p>And, it’s fun!</p>
                    </div>
                    <img src="/homepage/home-graph.jpg" alt="" className="img2"/>
                </div>
            </div>

            <div className="section1 section2">
                <h3 className="underline-after">What is an IQ?</h3>
                <div className="content2">
                    
                <iframe width="700" height="400" src="https://www.youtube.com/embed/ZSRJOusgLvk" title="How Brain Networks Define Intelligence and Cognitive Ability" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <div className="text2">
                        <p>An Intelligence Quotient indicates a person’s mental abilities relative to others. Everyone has numerous specific mental abilities, some of which can <br /> be measured <br /> accurately and are reliable predictors of academic and financial success.</p>
                        <p><a href="http://">Read more</a> about Intelligence Testing</p>
                    </div>
                </div>
            </div>


            <div className="body">

            <div className="phone-container"
                ref={scrollRef}
                style={{
                    display: "flex",
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    gap: "1rem",
                }}
            >
                {displayData.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>

            </div>


            <div className="brain-model">
                <div className="text3">
                    <h3 className="underline-after1 "
                    >The Brain's IQ</h3>
                    <p>An Intelligence Quotient indicates a person’s mental abilities relative to others. Everyone has numerous specific mental abilities, some of which can be measured accurately and are reliable predictors of academic and financial success.</p>
                    <p><a href="http://">Read more</a> about Intelligence Testing</p>
                </div>
                <BrainModel className="img2" />
            </div>


            <div className="section3">
                <p>more than</p>
                <span className="digits">22,000,000</span>
                <span className="shimmerglass shmerdisp"></span>
                <span className="shimmerglass shmerdisp"></span>
                <span className="shimmerglass shmerdisp"></span>
                <p>tests taken so far</p>
            </div>
            
            <div className="section4">
                <div className="content4">
                    <div className="con4">
                        <p>"I thought IQ tests were hard and time consuming. Even though I've always been curious about my IQ, I didn't want to endure the tedium or the expense. This test was quick and fun!"</p>
                        <p>--Sue M., Boulder, CO</p>
                    </div>

                    <div className="con4">
                        <p>"My score on this test surprised me. It's only four points off my score on the Stanford-Binet."</p>
                        <p>--Peter Manning, NYC</p>
                    </div>

                    <div className="con4">
                        <p>"I always wondered how I would do on an IQ test. This was a painless, interesting way to find out."</p>
                        <p>--P. Conner</p>
                    </div>
                </div>
            </div>

            <div className="section5">
                <a href="/taketest"><button className="btn btn1">take the test</button></a>

                <div className="cards">
                    <div className="card">
                        <img src="/homepage/Complete-Intelligence-Profile-1-mini.jpg" alt="" />
                        <div className="text5">
                            <h3>What Is the Complete Intelligence Profile?</h3>
                            <p>When you take the IQ Test, you will receive a General Score for free. That score gives you the big…</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/homepage/blog-2.jpg" alt="" />
                        <div className="text5">
                            <h3>History of Intelligence Testing</h3>
                            <p>Among the first to investigate individual differences in mental ability was a British scientist, Sir Francis Galton, who compared people…</p>
                        </div>
                    </div>
                    <div className="card" id="scroller">
                        <img src="/homepage/home-graph.jpg" alt="" />
                        <div className="text5">
                            <h3>What Is an IQ?</h3>
                            <p>Originally, intelligence testing was used to detect children of lower intelligence in order to place them in special education…</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    )
}