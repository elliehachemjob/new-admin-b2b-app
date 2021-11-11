import React from "react";
import { TopBar } from "./components/topbar/TopBar";
import { SideBar } from "./components/sidebar/SideBar";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/NewUser";
import { ProductList } from "./pages/productList/ProductList";

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
          <Route path="/user:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product:productsId" element={<User />} />
          <Route path="/newProduct" element={<NewUser />} />=
        </Routes>
      </div>
    </Router>
  );
}

export default App;
