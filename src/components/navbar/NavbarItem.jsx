import React from "react";
import { NavLink as RouterNavLink} from "react-router-dom";
import { NavLink, NavItem } from "reactstrap";


const NavbarItem = ({ exact, name, path }) => {
  return (
    <NavItem>
      <NavLink tag={ RouterNavLink } to={ path } activeClassName="active" exact={ exact }>
        { name }
      </NavLink>
    </NavItem>
  );
}

export default NavbarItem;