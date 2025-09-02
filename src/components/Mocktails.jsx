import { useGSAP } from "@gsap/react"
import { cocktailLists, mockTailLists } from "../../constants"
import gsap from "gsap"

const Mocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#mocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            }
        })

        parallaxTimeline.from("#m-left-leaf", {xPercent: -100, y: 100, rotate: -90, ease: "expo.out", duration: 1}, 0)
        parallaxTimeline.from("#m-right-leaf", {xPercent: 100, y: 100, rotate: 90, ease: "expo.out", duration: 1, delay: 0.6}, 0)
    })
  return (
    <section id="mocktails" className="noisy">
        <img src="/images/mocktail-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
        <img src="/images/mocktail-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
    
        <div className="list">
            <div className="popular">
                <h2>Most Popular Mocktails:</h2>

                <ul>
                    {cocktailLists.map(({name, country, detail, price}) => (
                        <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="loved">
                <h2>Most Loved Mocktails:</h2>

                <ul>
                    {mockTailLists.map(({name, country, detail, price}) => (
                        <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}
export default Mocktails