import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Aboutme from "./components/Aboutme.js";
import Contract from "./components/Contract.js";

export default function App() {
  return (
    <div className="App container">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/aboutme">
        <Aboutme />
      </Route>
      {/* <Route path="/contract">
        <Contract />
      </Route> */}
    </div>
  );
}
