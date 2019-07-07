import React from "react";
import "./Header.css";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

function Header() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <animated.div className="header" style={fadeIn}>
      <div className="header-content">
        <Avatar />
        <div className="bio">
          <h1>Alex Deakin</h1>
          <h3>Web Developer</h3>
          <p>Welcome to my portfolio! I am a full-stack web developer.</p>
          <p>My passion is creating beautiful, performant software - without compromises.</p>
          <p><a href="mailto:alex@levitatedigital.co.uk">alex@levitatedigital.co.uk</a></p>
        </div>
      </div>
    </animated.div>
  );
}

function Avatar() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] })); // For the rotation
  const bind = useGesture(({ down, delta, velocity = 8}) => { // The gesture
    velocity = clamp(velocity, 1, 8);
    console.log(velocity);
    delta = constrain(delta, 400);
    set({ xy: down ? delta : [0, 0], config: { mass: 5 * velocity, tension: 500 * velocity, friction: 50 } })
  });

  return (
    <animated.div
      {...bind()} // Binding the gesture to the element
      style={{ transform: xy.interpolate((x, y) => `perspective(500px) rotateX(${(-y / 10)}deg) rotateY(${(x / 10)}deg)`) }}
      className="avatar"
    >
      <img src="/user.png" alt="Avatar" />
    </animated.div>
  );
}

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function constrain(delta, deg) { // The function that handles the angles and distance and all that fun stuff. Pythagorean :)
  let x = delta[0];
  let y = delta[1];
  let d = Math.sqrt(Math.abs(x * x) + Math.abs(y * y))

  if (d > deg) {
    return [x / d * deg, y / d * deg]
  } else {
    return delta;
  }
}

export default Header;