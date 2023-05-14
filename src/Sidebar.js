import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { Context } from "./App";

const Sidebar = () => {
  const [click, setClick] = React.useContext(Context);

  return (
    <aside className={click ? "show-sidebar sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="" />
        <button className="close-btn" onClick={() => setClick(!click)}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          return (
            <i key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </i>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((soci) => {
          return (
            <i key={soci.id}>
              <a href={soci.url}>{soci.icon}</a>
            </i>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
