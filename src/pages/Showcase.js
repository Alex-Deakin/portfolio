import React from "react";
import "./Showcase.css";
import { useSpring, animated } from "react-spring";
import clients from "./../data/Projects";
import images from "./../data/CarouselImages";
import Carousel from "./../components/Carousel";

function Showcase() {
    const fadeIn = useSpring({ from: { transform: "translateY(30px)", opacity: 0 }, to: { transform: "translateY(0)", opacity: 1 } });
    // Quite a bit of nesting below.
    // - client
    // -- project
    // --- technologies
    return (
        <animated.div className="showcase-page" style={fadeIn}>
            {clients.map(client =>
                <div key={client.name} className="client-wrapper">
                    <h1>{client.name}</h1>
                    <p>{client.description}</p>
                    {(client.url && client.linkText &&
                        <p>
                            <a href={client.url} target="_blank" rel="noopener noreferrer">{client.linkText}</a>
                        </p>
                    )}
                    <p className="secondary-text">{client.dateText}</p>
                    {client.projects.map(project =>
                        <div key={project.name} className="card">
                            <Carousel images={images[project.imageRef]} />
                            <div className="project-details">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <h4>Technologies</h4>
                                <ul>
                                    {project.technologies.map(tech =>
                                        <li key={tech}>{tech}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </animated.div>
    );
}

export default Showcase;