import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import LogoutButton from "../LogoutButton/LogoutButton"
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
// import SearchForm from "../searchform/SearchForm"


import "../Nav/Nav.css";

class Nav extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render(props) {
  const navColor = {backgroundColor:'#8B0000' }
  
  return (
      <MDBNavbar style={navColor} dark expand="md">

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
           
          <MDBNavbarNav left>
                <MDBNavItem>
                <NavLink className="" to="/"><img className="logo" alt="" src="./images/wr.png"  height="75px"/>
                <br></br>
                <h3 className=" text-dark pl-4">Green Real Estate</h3>
                </NavLink>
                </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>

          <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!"><LogoutButton/></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>


            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/favorites">
              <MDBIcon icon="heart" />
              </MDBNavLink>
            </MDBNavItem>
        

            <MDBNavItem>
              <MDBNavLink to="/adminarea">ADMIN</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
   
    );
  }
}

export default Nav;