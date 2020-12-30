import React from "react";
import styled from "styled-components";

const Loading = (props) => {
  const { spinOutside, spinMiddle, spinInside, background } = props;

  const ContainerLoader = styled.div`
    background-color: ${background ? background : "#fff"};
    width: 100vw;
    height: 100vh;
  `;

  const Loader = styled.div`
  animation: spin ${spinOutside?.animationTime}s infinite linear;
  border: solid 2vmin transparent;
  border-radius: 50%;
  border-right-color: ${spinOutside?.color};
  border-top-color: ${spinOutside?.color};
  box-sizing: border-box;
  height: 20vmin;
  left: calc(50% - 10vmin);
  position: fixed;
  top: calc(50% - 10vmin);
  width: 20vmin;
  z-index: 1;
  &:before {
  animation: spin ${spinMiddle?.animationTime}s infinite linear;
  border: solid 2vmin transparent;
  border-radius: 50%;
  border-right-color: ${spinMiddle?.color};
  border-top-color: ${spinMiddle?.color};
  box-sizing: border-box;
  content: "";
  height: 16vmin;
  left: 0;
  position: absolute;
  top: 0;
  width: 16vmin;
}
&:after {
  animation: spin ${spinInside?.animationTime}s infinite linear;
  border: solid 2vmin transparent;
  border-radius: 50%;
  border-right-color: ${spinInside?.color};
  border-top-color: ${spinInside?.color};
  box-sizing: border-box;
  content: "";
  height: 12vmin;
  left: 2vmin;
  position: absolute;
  top: 2vmin;
  width: 12vmin;
}
  
@keyframes spin {
  100% {
    transform:rotate(360deg);
  }
`;
  return (
    <ContainerLoader>
      <Loader />
    </ContainerLoader>
  );
};

export default Loading;
