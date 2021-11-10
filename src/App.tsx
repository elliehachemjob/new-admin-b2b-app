import React from "react";
import { TopBar } from "./components/topbar/TopBar";
import { SideBar } from "./components/sidebar/SideBar";
import "./app.css";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
