import React from "react";
import { Link } from "react-router-dom";
import styled from "@xstyled/styled-components";

const LogoContainer = styled(Link)`
  font-weight: 500;
  @media (max-width: 425px) {
    padding: 0 8px 0 16px;
  }
`;
const LogoTitle = styled.span`
  font-size: 1.2em;
  @media (min-width: 1024px) {
    font-size: 2em;
  }
  font-family: "Anton", sans-serif;
`;
const Logo = () => (
  <LogoContainer to="/">
    <LogoTitle>
      {" "}
      <img src="sizzle.png" alt="" />
    </LogoTitle>
  </LogoContainer>
);

export default Logo;
