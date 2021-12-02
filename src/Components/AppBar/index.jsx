import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

const NavLinks = ({ name, icon, url, index }) => {
  const location = useLocation();
  const handleActiveLink = (activeUrl) => {
    if (activeUrl === location.pathname) {
      return {
        boxShadow: "1px 1px 8px #cacaca",
        fontWeight: "bold",
      };
    }
  };
  return (
    <li key={index} style={handleActiveLink(url)} className="nav-links">
      <NavLink to={url} className="nav-link">
        <i className={icon}></i>
        <p className="link-labels">{name}</p>
      </NavLink>
    </li>
  );
};

const myOtherNavs = [
  { name: "Ranking", url: "/ranking", icon: "fas fa-car" },
  { name: "Challenge", url: "/challenge", icon: "fa fa-bicycle" },
  { name: "Party", url: "/party", icon: "fa fa-user" },
  { name: "Connect", url: "/connect", icon: "fa fa-book" },
  { name: "Parade", url: "/parade", icon: "fa fa-pencil" },
  { name: "Group", url: "/group", icon: "fa fa-group" },
];

const AppBar = () => {
  return (
    <div className="side-bar">
      <span>
        <img src="/assets/icons/logo-2.jpg" alt="icon" className="icon" />
        <p className="icon-text"> bluecube</p>
      </span>
      <ul>
        <NavLinks name="Home" url="/" icon="fa fa-home" />

        <NavLinks name="Message" url="/message" icon="fa fa-book" />

        <li className="share-tab">SHARE</li>
        {myOtherNavs.map((navs, index) => {
          return (
            <div key={index}>
              {" "}
              <NavLinks name={navs.name} url={navs.url} icon={navs.icon} index={index} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AppBar;
