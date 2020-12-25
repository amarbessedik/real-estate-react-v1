import React from 'react'
import { Link } from "react-router-dom"
import styled, { css } from 'styled-components/macro'
import { menuData } from '../data/MenuData'

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: #000;
`
const MenuBars = styled.i``
const NavMenu = styled.div`
  display: flex;
  align-items: center;
`
const NavMenuLinks = styled(Link)`
  ${NavLink}
`
const Logo = styled(Link)`
  ${NavLink};
  font-style: italic;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to='/'>LUWNIS</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                 <NavMenuLinks to={item.link} key={item + index}>
                    {item.title}
                 </NavMenuLinks>
                ))}
            </NavMenu>
        </Nav>
    )
}

export default Navbar
