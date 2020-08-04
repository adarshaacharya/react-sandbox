import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";

import { purple, elevation, fixed,serif } from "../utilities";

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt="logo" className="logo" />
    Hello
  </header>
);

export default styled(Header)`
  background: ${purple};
  ${fixed()};
  padding: 10px 5%;
  ${elevation[2]};
  ${serif}
  width: 100%;
  color : #fff;
  .logo {
    width: 60px;
  }
`;
