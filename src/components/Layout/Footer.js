import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 2rem 0;
`;

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Title> Made by James Russel C. Bautista </Title>
    </StyledFooter>
  );
};

export default Footer;
