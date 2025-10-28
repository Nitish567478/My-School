import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Components
import Home from "./components/Home";
import Academic from "./components/Academic";
import Admission from "./components/Admission";
import Blog from "./components/Blog";
import Facility from "./components/Facility";
import Faculty from "./components/Faculty";
import Gallery from "./components/Gallery";
import Notices from "./components/Notices";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/academic" component={Academic} />
      <Route exact path="/admissions" component={Admission} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/facility" component={Facility} />
      <Route exact path="/faculty" component={Faculty} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/notices" component={Notices} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </Router> 
);

export default App;
