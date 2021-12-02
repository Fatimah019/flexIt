import React from "react";
import AppBar from "../Components/AppBar";
import Header from "../Components/Header";
import Routes from "../Routes";

function AppRoute() {
  return (
    <div style={{ display: "flex" }}>
      <AppBar />
      <div className="main">
        <Header />
        <Routes />
      </div>
    </div>
  );
}

export default AppRoute;
