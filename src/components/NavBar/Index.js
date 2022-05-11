import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav,
     NavBarContainer,
     NavLogo, 
     NavItem, 
     NavMenu, 
     NavLinks,
     MobileIcon, 
     NavBtn,
     NavBtnLink } from './NavBarElements';


const NavBar = ({toggle}) => {
  return (
    <>
    <Nav>
    <NavBarContainer>
    <NavLogo to= '/'>Conforme</NavLogo>
    <MobileIcon onClick={toggle}>
        <FaBars />
    </MobileIcon>
    <NavMenu>
    <NavItem>
        <NavLinks to= 'about'>A propos</NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to= 'services'>Services</NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to= 'signup'>Sign Up</NavLinks>
    </NavItem>
    </NavMenu>
    <NavBtn>
    <NavBtnLink to="/login">Sign In</NavBtnLink>
    </NavBtn>
    
    </NavBarContainer>
    </Nav>

    </>
  );
};

export default NavBar