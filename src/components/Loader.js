import styled from "styled-components";

const StyledContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  margin: auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLoader = styled.span`
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 50%;
  color: salmon;
  animation: fill 1s ease-in infinite alternate;

  ::before,
  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    left: 48px;
    top: 0;
    animation: fill 0.9s ease-in infinite alternate;
  }

  ::after {
    left: auto;
    right: 48px;
    animation-duration: 1.1s;
  }

  @keyframes fill {
    0% {
      box-shadow: 0 0 0 2px inset;
    }
    100% {
      box-shadow: 0 0 0 10px inset;
    }
  }
`;

const Loader = () => {
  return (
    <StyledContainer>
      <StyledLoader></StyledLoader>
    </StyledContainer>
  );
};

export default Loader;
