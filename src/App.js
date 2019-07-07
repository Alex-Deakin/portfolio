import React from "react";
import { useSpring, animated } from "react-spring";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Showcase from "./pages/Showcase";
import Blog from "./pages/Blog";

function App() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <>
      <Header /> 
      <Router >
        {/* Nav Bar */}
        <animated.div className="nav-bar" style={fadeIn}>
          <ul>
            <Link to="/">
              <li>About</li>
            </Link>
            <Link to="/showcase/">
              <li>Showcase</li>
            </Link>
            <Link to="/blog/">
              <li>Blog</li>
            </Link>
          </ul>
        </animated.div>
        {/* Displaying current route without page refreshes! */}
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/showcase/" component={Showcase} />
          <Route path="/blog/" component={Blog} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App;
