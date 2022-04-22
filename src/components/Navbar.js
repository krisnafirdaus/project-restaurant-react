import React, { useState } from "react";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="navbar-layout" color="light" light expand="md">
      <NavbarBrand href="/">Brand</NavbarBrand>
      <NavbarToggler
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret>
                Demos
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/blah" active>
                  Link
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret>
                Pages
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/blah" active>
                  Link
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret>
                Portofolio
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/blah" active>
                  Link
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
        </Nav>
        <Nav className="ml-auto">
          <NavItem className="img--center">
            <AiOutlineSearch />
          </NavItem>
          <NavItem className="ml-3 img--center ">
            <BsBasket3 />
          </NavItem>
          <NavItem className="ml-3 img--center ">
            <input />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
