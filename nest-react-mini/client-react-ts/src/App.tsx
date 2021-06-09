import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./App.css";
import About from "./components/About";
import Cars from "./components/Cars";
import Countries from "./components/Countries";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Recoil from "./components/Recoil";

function App() {
  return (
    <RecoilRoot>
      <React.StrictMode>
        <Router>
          <div className="App">
            <Nav />
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/countries">
                <Countries />
              </Route>
              <Route path="/cars">
                <Cars />
              </Route>
              <Route path="/recoil">
                <Recoil />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </React.StrictMode>
    </RecoilRoot>
  );
}

export default App;
