import React from "react";
import "./Blog.css";
import { useSpring, animated } from "react-spring";

function Blog() {
    const fadeIn = useSpring({ from: { transform: "translateY(30px)", opacity: 0 }, to: { transform: "translateY(0)", opacity: 1 } });
    return (
        <animated.div className="blog-page" style={fadeIn}>
            <h1>Blog</h1>
            <p>Nothing to show here...</p>
            <p>Come back soon once the first posts have been made!</p>
        </animated.div>
    );
}

export default Blog;