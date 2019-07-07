import React from "react";
import "./About.css";
import { useSpring, useTrail, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import mainStack from "./../data/MainStack";
import otherStack from "./../data/OtherStack";

// ToDo: See if there's a nicer way to handle all the HTML/JSX tags. Maybe put the content in a data file?

function About() {
    const fadeUp = useSpring({ from: { transform: "translateY(30px)", opacity: 0 }, to: { transform: "translateY(0)", opacity: 1 } }); // Initial fade
    const [mainTrail, setMain] = useTrail(mainStack.length, () => ({ y: 15, opacity: 0, hover: 0 })); // Fade trail for main tech stack
    const [otherTrail, setOther] = useTrail(otherStack.length, () => ({ y: 15, opacity: 0, hover: 0 })); // Fade trail for other tech stack
    return (
        <animated.div className="about-page" style={fadeUp}>
            <h1>Intro</h1>
            <p>
                Hello! My name is Alex, I'm 20 years old, and I am based in Bracknell, England.
            </p>
            <p>
                From a young age, I have been interested in all things technology - the software aspect, as well as the more hands-on 'hardware' side of things. I first began writing .NET applications with C# when I was 12, and have since expanded into the exciting world of Javascript development - which can be used to write software for just about any platform, including the web, desktop, <i>and</i> mobile devices.
            </p>
            <p>
                Read on to find out more about which languages I use, past projects I have been involved in, and my philosophies on development.
            </p>
            <h1>My Tech Stack</h1>
            <p>
                These are my technologies of choice when it comes to developing new projects:
            </p>
            <VisibilitySensor partialVisibility offset={{ bottom: 48 }} onChange={isVis => setMain({ y: isVis ? 0 : 15, opacity: isVis ? 1 : 0 })}>
                <div className="main tech-grid">
                    {mainTrail.map(({ y, opacity }, idx) => (
                        <animated.div key={idx} className="card" style={{
                            transform: y.interpolate(y => `translateY(${y}px)`),
                            opacity: opacity
                        }}>
                            <img src={mainStack[idx].image} alt={mainStack[idx].name} />
                            <h2>{mainStack[idx].name}</h2>
                            <p>{mainStack[idx].description}</p>
                            <a href={mainStack[idx].url}>{mainStack[idx].linkText}</a>
                        </animated.div>
                    ))}
                </div>
            </VisibilitySensor>
            <p>
                These are languages and frameworks I have experience with from past projects:
            </p>
            <VisibilitySensor partialVisibility offset={{ bottom: 48 }} onChange={isVis => setOther({ y: isVis ? 0 : 15, opacity: isVis ? 1 : 0 })}>
                <div className="other tech-grid">
                    {otherTrail.map(({ y, opacity }, idx) => (
                        <animated.div key={idx} className="card" style={{
                            transform: y.interpolate(y => `translateY(${y}px)`),
                            opacity: opacity
                        }}>
                            <img src={otherStack[idx].image} alt={otherStack[idx].name} />
                            <h2>{otherStack[idx].name}</h2>
                            <p>{otherStack[idx].description}</p>
                            <a href={otherStack[idx].url}>{otherStack[idx].linkText}</a>
                        </animated.div>
                    ))}
                </div>
            </VisibilitySensor>
            <h3>Other Skills</h3>
            <ul>
                <li>
                    Expertise in HTML and CSS
                </li>
                <li>
                    Comfortable using Sass to pre-process my CSS for style-intensive projects
                </li>
                <li>
                    Experience using both subversion (TortoiseSVN) and git (GitHub) for version control
                </li>
                <li>
                    Experience using job/issue tracking tools such as Trello and Jira
                </li>
                <li>
                    Experience working with WordPress; both website and plugin creation
                </li>
                <li>
                    Experience creating APIs and data sources in both JSON and XML formats
                </li>
                <li>
                    Experience leading commercial projects for a company
                </li>
                <li>
                    Experience using FTP and SSH based tools, such as Filezilla and PuTTY, to transfer and manipulate files
                </li>
                <li>
                    Good knowledge on mail systems and protocols
                </li>
                <li>
                    Very good knowledge on domains, DNS, and HTTP protocols
                </li>
                <li>
                    Understanding of and ability to use the REST architecture for APIs
                </li>
                <li>
                    Experience using applications from the Microsoft Office and Adobe CC suites
                </li>
            </ul>
            <h1>Design Philosophy</h1>
            <p>
                I believe it's important to have a philosophy driving why and how I design things. It's this set of rules that keeps my work consistent and ensures that I deliver something that is engaging and effective.
            </p>
            <h4>Pay Attention to Performance</h4>
            <p>
                Many programmers believe that performance is something that only concerns technical people. In practice, however, this notion has been consistently proven false - a Google study from 2016 shows that more than 50% of a website's audience will leave if it hasn't loaded within 3 seconds! It is likely that this figure has grown further since 2016, as technology continues to improve.
            </p>
            <p>
                This conveys just how crucial it is to have software that is quick and responsive - it has a direct impact on your site's traffic <i>and</i> conversion rate. But how does someone go about making digital content that starts and runs well for the majority of visitors?
            </p>
            <p>
                Technically, the list is endless: there are too many factors to count. However, I have found that the following principles will always result in a smooth, responsive experience:
            </p>
            <ul>
                <li>
                    Using React (correctly) - as React avoids unnecessary re-rendering of the scene much more effectively than vanilla JavaScript, it will often perform significantly better. This is, of course, provided that the React code is well-written, with optimisation in mind.
                </li>
                <li>
                    Avoiding page refreshes wherever possible - this is not a new concept, but as front-end frameworks like React and Angular have come to the mainstream, this has become one of the most effective approaches to making websites that do not disrupt the user.
                </li>
                <li>
                    Only using what you need - too often, inexperienced developers will include a number of vast libraries in their work without consideration for load times. While this will not largely affect a number of people, this bloat can make a huge difference to those with slower connections or on mobile networks.
                </li>
            </ul>
            <h4>Make Things That People Enjoy Using</h4>
            <p>
                Appeal to customers and users is created through providing an experience that is intuitive, straightforward, and enjoyable. These descriptors are rather vague, so let's clarify how we can weave these qualities into our user-facing end product:
            </p>
            <ul>
                <li>
                    <b>Intuitive</b> - to make something intuitive, you must face all challenges with the presumption that the end user knows nothing. Where would an inexperienced user go to find help on how to perform an action? Where would they reasonably expect to click to submit data? Is there ambiguity between fields or functionality on a page, so that elements may be confused for one another? These are all things to look out for when designing the user experience.
                </li>
                <li>
                    <b>Straightforward</b> - people using a piece of software are usually not concerned with what is going on behind the scenes, nor the technical aspect of what they are doing. For this reason, it is best to abstract this nature of the program - keep everything they see on human terms, and hide the true complexity of the program from them.
                </li>
                <li>
                    <b>Enjoyable</b> - this will always be largely subjective, and by extension the hardest to get right for everyone. From experience, what makes software enjoyable to use for a large majority of people is a combination of visual appeal, understanding what is being presented, and minimal interruptions in the presentation of information.
                </li>
            </ul>
            <h4>Psychology Behind Colouring, Typography and Media</h4>
            <p>
                The world's biggest companies understand the power of colour, and use it to their advantage when branding and marketing their product. <a href="https://www.nickkolenda.com/color-psychology/">This article here</a> discusses (in more depth than I ever could) why this phenomenon works and how industry leaders use it to their advantage.
            </p>
            <p>
                We can use this principle and others to our own advantage as well. Using colours, designs, and typesets that provide a sense of trust and familiarity will help put users at ease. Seemingly unimportant layout decisions, such as font size, colouring, contrast, margins and spacing between visual elements, can all have huge implications on how your site is not only perceived, but also how it is used, and how readily people will engage with it.
            </p>
        </animated.div>
    );
}

export default About;