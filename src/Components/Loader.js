import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
const LoadingBox = styled.div`
  width: 25rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  z-index: -999;
`;
const Heeflex = styled.div`
  font-size: 4rem;
  color: white;
  text-shadow: 0.1px 0.1px 1px rgba(255, 255, 255, 0.9),
    0.2px 0.2px 1px rgba(255, 255, 255, 0.8),
    0.3px 0.3px 1px rgba(255, 255, 255, 0.7),
    0.4px 0.4px 1px rgba(255, 255, 255, 0.6),
    0.5px 0.5px 1px rgba(255, 255, 255, 0.5),
    0.6px 0.6px 1px rgba(255, 255, 255, 0.4),
    0.7px 0.7px 1px rgba(255, 255, 255, 0.3),
    0.8px 0.8px 1px rgba(255, 255, 255, 0.2), 0.9px 0.9px 1px black,
    1px 1px 1px black, 1.1px 1.1px 2px black, 1.2px 1.2px 3px black,
    3px 3px 10px #2b8a3e, 3px 3px 10px #2b8a3e, 3px 3px 10px #2b8a3e;
`;

const Loader = () => (
  <Container>
    <LoadingBox>
      <Heeflex>HEEFELX</Heeflex>
    </LoadingBox>
  </Container>
);

export default Loader;
