import React, { useState } from "react";
import Routes from "../constants/Routes";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import navbarItems from "./NavbarItems";
import NavbarItem from "./NavbarItem";


const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark expand="md" className="navbar-links">
      <NavbarBrand href={Routes.ROOT} className="brand">Rick & Morty</NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {
            navbarItems.map(navbarItem =>
              <NavbarItem
                key={navbarItem.path}
                exact={navbarItem.exact}
                name={navbarItem.name}
                path={navbarItem.path}
              />
            )
          }
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default MainNavbar;