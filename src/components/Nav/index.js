import React from 'react';
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { NavItem, Navbar, Icon } from 'react-materialize';

function Nav() {
    return (

        <div >
           
                <Navbar
                    className="Header grey darken-3"
                    alignLinks="left"
                    brand={<a className="brand-logo right zoom" href="#about"><Icon>star</Icon></a>}
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    fixed="true"
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                >
                    <NavItem onClick={function noRefCheck() {}} href="#about">
                    About
  </NavItem>
                    <NavItem href="#proj">
                    Projects
  </NavItem>
                    <NavItem href="#contact">
                    Contact
  </NavItem>
                </Navbar>
           
        </div>
    );
}

export default Nav;