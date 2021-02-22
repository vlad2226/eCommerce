import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Route } from "react-router-dom";
import ShopPage from "../src/pages/shop/shop.component";

function App() {
  return (
    <Switch>
      <Route exact path="/" component="<HomePage />"></Route>
      <Route path="/shop" component="<ShopPage />"></Route>
    </Switch>
  );
}

export default App;
