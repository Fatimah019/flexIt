import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

const NavLinks = ({ name, icon, url }) => {
  return (
    <NavLink to={url}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "20px" }}>ic</span> {name}
      </div>
    </NavLink>
  );
};

const myOtherNavs = [
  { name: "Ranking", url: "/ranking", icon: "" },
  { name: "Challenge", url: "/challenge", icon: "" },
  { name: "Party", url: "/party", icon: "" },
  { name: "Connect", url: "/connect", icon: "" },
  { name: "Parade", url: "/parade", icon: "" },
  { name: "Group", url: "/group", icon: "" },
];

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="side-bar">
        <div className="drawer-btns">
          <i className="fa fa-bars"></i>
          {/* <i className="fa fa-close"></i> */}
          {/* <OpenBar /> */}
          {/* <CloseBar /> */}
        </div>
        <img src="" alt="icon" className="icon" />
        <ul>
          <li>
            <NavLinks name="Home" url="/" icon="" />
          </li>
          <li>
            <NavLinks name="Message" url="/message" icon="" />
          </li>
          <li>SHARE</li>
          {myOtherNavs.map((navs, index) => {
            return (
              <li key={index}>
                <NavLinks name={navs.name} url={navs.url} icon={navs.icon} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AppBar;
