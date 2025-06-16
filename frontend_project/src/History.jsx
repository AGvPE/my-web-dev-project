import Footer from "./Footer"
import Navbar from "./Navbar"
import style from "../src/history.module.css"

export default function History() {
    return(
        <>
            <Navbar />
            <main>
                <div className={style["history-section1"]}>
                    <h1>History</h1>
                </div>
                <div className={style["history-section2"]}>
                    <h3 className={style["history-underline-after"]}>History of Intelligence Testing</h3>
                    <div className={style.history1}>
                        <div className={style.text}>
                            <p>Among the first to investigate individual differences in mental ability was a British scientist, Sir Francis Galton, who compared people based on their awards and accomplishments. This research convinced him that intelligence was inherited and led to further studies which involved evaluating individual differences in reaction time and range and specificity of the senses, which have since been shown to correlate with academic success.</p>
                            <p>A French psychologist, Alfred Binet, developed a test to accurately predict academic success when the French government asked him to help them determine which children in the public schools would have difficulty with formal education. He, and his colleague, Theodore Simon, found that tests of practical knowledge, memory, reasoning, vocabulary, and problem solving were better predictors of school success than the sensory tests used by Galton. Subjects were asked to perform simple commands and gestures, repeat spoken numbers, name objects in pictures, define common words, tell how two objects are different, and define abstract terms. Similar items are used in today`s intelligence tests.</p>
                            <p>Assuming that children all follow the same pattern of development but develop at different rates, Binet and Simon created the concept of mental age, whereby, for example, a child of any age who scored as well as an average twelve-year-old was said to have a mental age of twelve.</p>
                            <p>Binet’s test was not widely used in France, but Henry Goddard, director of a school for mentally challenged students, brought it to the United States, translated it into English, and used it to test people for mental retardation.</p>
                            <p>Lewis Terman, another American psychologist, adapted the test for use with adults, established new standards for average ability at each age, and called it the Stanford-Binet Intelligence Scale, because of his affiliation with Stanford University.</p>
                            <p>Instead of giving a person’s performance on the Stanford-Binet as a mental age, Terman converted performance into a single score, which he called the intelligence quotient, or IQ. A quotient is the number that results from dividing one number by another. The idea of an intelligence quotient was first suggested by German psychologist, William Stern, in 1912. To compute IQ, Stern divided mental age by the actual, chronological age of the person taking the test and then multiplied by 100 to get rid of the decimal point. So, a child who was eight years old and answered the test questions as well as a twelve-year-old scored an intelligence quotient of 12/8 x 100, or 150. A twelve-year-old who answered the test questions as well as an average eight-year-old would have an IQ of 8/12 x 100, or 66.</p>
                            <p>This formula works well for comparing children, but since intelligence levels off in adulthood, it is not appropriate for adults. A thirty-year-old who answers questions as well as an average twenty-year-old would have an IQ of only 20/30 x 100, or 66.</p>
                            <p>So intelligence tests today no longer use the IQ formula. Instead, the score on a modern intelligence test compares a person’s performance with others his/her own age, while arbitrarily defining the average score as 100. By convention, most people still use the term IQ to refer to a score on an intelligence test.</p>
                            <p>Read more on how IQ tests are scored…</p>
                        </div>
                        <div className={style.images}>
                            <figure>
                                <img src="/historypage/Francis_Galton_1850s.jpg" alt="Francis Galton" />
                                <figcaption>Francis Galton</figcaption>
                            </figure>
                            <figure>
                                <img src="/historypage/Alfred-Binet.jpg" alt="Alfred Binet" />
                                <figcaption>Alfred Binet</figcaption>
                            </figure>
                            <figure>
                                <img src="/historypage/Lewis_Madison_Terman.jpg" alt="Lewis Terman" />
                                <figcaption>Lewis Madison Terman</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className={style.history2}>
                        <img src="/historypage/history-3.jpg" alt="" />
                        <div className={style.text}>
                            <h4 className={style["history-underline-after"]}>Group Intelligence Tests</h4>
                            <p>Before World War I, all intelligence tests were administered on a one to one basis. During the war, a group of psychologists, led by Robert M.Yerkes, developed two tests, one for English speakers, and one for non-English speakers or illiterates, which could be administered to groups of recruits to help the army determine the most effective placement of individuals. Highest scoring recruits were considered for officer training, and lowest scoring recruits were rejected from service.</p>
                            <p>Following the war, group tests were more popular. The National Intelligence Test, developed by Terman and Yerkes, was first used around 1920 to test school children. The Scholastic Aptitude Test (SAT) was introduced in 1926 to help colleges and universities screen prospective students.</p>
                            <p>Today individual and group intelligence tests are widely used in education, the military, and business.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}