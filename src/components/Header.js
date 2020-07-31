import React from "react";
import Icon from "../images/icon.svg";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: rgb(30, 29, 29);
  background: radial-gradient(
    circle,
    rgba(30, 29, 29, 1) 15%,
    rgba(0, 0, 0, 1) 56%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin: 5%;
`;

const IconImage = styled.div``;

const IconTextWrap = styled.div`
  margin-top: 0;
  color: #b2d1dc;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const IconText = styled.p`
  font-size: 1.2em;
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
          <img src={Icon} alt="logo" />
        </IconImage>

        <IconTextWrap>
          <IconText>BUDDIES</IconText>
        </IconTextWrap>
      </IconWrapper>
    </HeaderWrapper>
  );
}
