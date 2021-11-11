import React from "react";
import { TopBar } from "./components/topbar/TopBar";
import { SideBar } from "./components/sidebar/SideBar";
import { Home } from "./components/pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./app.css";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
