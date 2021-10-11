import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aboutme from "./components/AboutMe/AboutMe";
import Portfolio from "./Pages/portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/ContactMe/ContactMe"

function App() {
  return (
    <div className="App">
      <Router> 
        <Header />
        <Switch>
          <Route exact path ="/" component={Aboutme}/>
          <Route exact path ="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path ="/contact" component={Contact}/>
        </Switch>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
