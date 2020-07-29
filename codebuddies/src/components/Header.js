import React from "react";
import Icon from "../images/icon.svg";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: rgb(30, 29, 29);
  height:100vh;

  background: radial-gradient(
    circle,
    rgba(30, 29, 29, 1) 25%,
    rgba(0, 0, 0, 1) 56%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  height:60%;
  width:50%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin: 5%;
`;

const IconImage = styled.div`
height:80%;
display:flex;
  justify-content:center;
  align-items:center;
`

const IconTextWrap = styled.div`
  margin-top: 0;
  color: #b2d1dc;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const IconText = styled.p`
  font-size: 2em;
  margin: 0;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: "Montserrat", sans-serif;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <IconWrapper>
        <IconImage>
          <img src={Icon} alt="logo" style={{height:'100%'}} />
        </IconImage>

        <IconTextWrap>
          <IconText>BUDDIES</IconText>
        </IconTextWrap>
      </IconWrapper>
    </HeaderWrapper>
  );
}
