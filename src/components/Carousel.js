import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

function Carousel(props) {
    const [width, setWidth] = useState(500); // Default width is 500
    const images = props.images; // Images passed in
    const index = useRef(0); // For the current index
    const ref = useRef(null); // For the element, to check its width
    useEffect(() => {
        setWidth(ref.current.clientWidth); // Update width of element when we re-render
    });
    const [slides, set] = useSprings(images.length, i => ({ x: i * width, sc: 1, display: "block" })); // x is horizontal transform, sc is scale
    const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
        setWidth(ref.current.clientWidth); // Update width when gesturing, if it's changed
        if (down && distance > width / 2) { // When the mouse has travelled half or more of the carousel's width in distance
            cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, images.length - 1))) // Release
        } 
        set(i => {
            if (i < index.current - 1 || i > index.current + 1) return { display: "none" }
            const x = (i - index.current) * width + (down ? xDelta : 0)
            const sc = down ? 1 - distance / width / 2 : 1
            return { x, sc, display: "block" }
        }); // Update index
    });
    return (
        <div className="carousel" ref={ref}>
            {slides.map(({ x, display, sc }, i) => (
                <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}> {/* Outer div handles transforms */}
                    <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${images[i]})` }} /> {/* Inner div handles scaling and image index */}
                </animated.div>
            ))}
        </div>
    );
}

// Didn't want to include the whole lodash lib for this one function
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

export default Carousel;