import React from "react";
import { TopBar } from "./components/topbar/TopBar";
import { SideBar } from "./components/sidebar/SideBar";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";

import "./app.css";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
