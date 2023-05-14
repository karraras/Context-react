import React from "react";
import { FaBars } from "react-icons/fa";
import { Context } from "./App";

const Home = () => {
  const [click, setClick] = React.useContext(Context);
  return (
    <button className="sidebar-toggle" onClick={() => setClick(!click)}>
      <FaBars />
    </button>
  );
};

export default Home;
