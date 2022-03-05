import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Footer from "./Component/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
