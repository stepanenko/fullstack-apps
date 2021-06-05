import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Cars from "./components/Cars";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Countries() {
  const countries = [
    "France",
    "Germany",
    "UK",
    "Switzerland",
    "USA",
    "Canada",
    "Australia",
  ];

  return (
    <div>
      <h2>Countries</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {countries.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Part of Nest React Mini</p>
      <p>Created on 28.05.2021</p>
    </div>
  );
}

export default App;
