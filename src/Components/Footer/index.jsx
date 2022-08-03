import React from "react";
import styled from "styled-components";
function Footer() {
  return (
  
    <FooterContainer>
    <FooterWrapper class="footer navbar-fixed-bottom" >
        All rights reserved.
    </FooterWrapper>
    </FooterContainer>

);
}

const FooterWrapper = styled.footer`
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;

`;
const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;



export default Footer;