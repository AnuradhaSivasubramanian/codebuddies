import React from "react";
import styled, { keyframes } from "styled-components";
import podcast from "../../images/podcast.svg";

//keyframe

const dot = keyframes`
0% {
    transform: translateY(5px);
}
50% {
    transform: translateY(-5px);
}
100% {
    transform: translateY(5px)
}
`;

const dots = keyframes`
0%, 60% {
    transform: scale(0);
    opacity: 0;
}
100% {
    transform: scale(1);
    opacity: 1;
}
`;

const icon = keyframes`
0% {
    transform: scale(1);
    opacity: 1;
}
30% {
    transform: scale(1.1);
    opacity: 1;
}
100% {
    transform: scale(0);
    opacity: 0;
}
`;

//style
const LoadingWrapper = styled.div`
  background: rgb(30, 29, 29);
  height: 80vh;
  background: radial-gradient(
    circle,
    rgba(30, 29, 29, 1) 5%,
    rgba(0, 0, 0, 1) 56%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Microphone = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  animation: ${icon} 4s 2s ease-in-out both;
`;

const Dots = styled.div`
  opacity: 0;
  position: absolute;
  width: 50%;
  height: 50%;
  animation: ${dots} 4.2s 2.5s ease-in-out both;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Dot = styled.div`
  float: left;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #fff;
  animation: ${dot} 1s ease-in-out infinite;
  margin: 5px;
`;
const DotOne = styled.div`
  float: left;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #fff;
  animation: ${dot} 1s ease-in-out -0.2s infinite;
  margin: 5px;
`;
const DotTwo = styled.div`
  float: left;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #fff;
  margin: 5px;
  animation: ${dot} 1s ease-in-out -0.4s infinite;
`;

function Loading() {
  return (
    <LoadingWrapper>
      <Microphone>
        <svg width="90%" viewBox="0 0 100 100">
          <circle className="circle" cx="50" cy="50" r="47" />
        </svg>

        <Icon>
          <img src={podcast} alt="microphone" style={{ height: "100%" }} />
        </Icon>
        <Dots>
          <Dot></Dot>
          <DotOne></DotOne>
          <DotTwo></DotTwo>
        </Dots>
      </Microphone>
    </LoadingWrapper>
  );
}

export default Loading;
