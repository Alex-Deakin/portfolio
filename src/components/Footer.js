import React from "react";
import "./Footer.css";
import { useSpring, animated } from "react-spring";

function Footer() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <animated.div className="footer" style={fadeIn}>

    </animated.div>
  );
}

export default Footer;