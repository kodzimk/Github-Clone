import React from "react";
import { Link } from "react-router-dom";
import classes from "./navlink.module.css";

interface NavLinkProps {
  to: string;
  text: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <div className={(classes.nav_links, classes.nav__link_decoration)}>
      <Link id="navlink" to={props.to}>{props.text}</Link>

      {props.isActive ? (
        <img src="/images/arrow-down.png" alt="arrow-down" className={classes.arrow_down} />
      ) : null
}
    </div>
  );
};

export default NavLink;
