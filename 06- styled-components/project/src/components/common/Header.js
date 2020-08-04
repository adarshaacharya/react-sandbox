import React, { useState, useContext } from 'react'
import { Link as ReactRouterDOMLink, useLocation } from 'react-router-dom'
import styled, { ThemeContext } from 'styled-components'

import { Toggle } from './Toggle'

const HeaderWrapper = styled.header`
  display: flex;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
`

/* { for mobile view}*/
const Menu = styled.nav`
  display: ${(p) => (p.open ? 'block' : 'none')};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
  background: white;

  /* { for desktop view  above 768px}*/
  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
  }
`

const Link = ({ isActive, children, ...props }) => {
  return (
    <ReactRouterDOMLink {...props}>{children}</ReactRouterDOMLink>  
  )
}

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? 'bold' : 'normal')};
  color: ${(p) => p.theme.bodyFontColor};
`

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  background: ${(p) => p.theme.bodyFontColor};

  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export default function Header() {
  // gets the url path i.e. "/ or /login"
  const { pathname } = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)
  const { id, setTheme } = useContext(ThemeContext) // destructure id , setTheme from App.js

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((prevState) => !prevState)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to='/' isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to='/login' isActive={pathname === '/login'}>
          Login
        </StyledLink>
        <Toggle isActive={id === 'dark'} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  )
}
