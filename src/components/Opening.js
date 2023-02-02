import styled from "styled-components";

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSVG = styled.svg`
  font-family: inherit;
  font-size: 10.5rem;
  width: min(750px, 90%);
  margin: 0 auto;
`;

const StyledUse = styled.div`
  fill: none;
  stroke: white;
  stroke-dasharray: 6% 29%;
  stroke-width: 5px;
  stroke-dashoffset: 0%;
  animation: stroke-offset 5.5s infinite linear;

  :nth-child(1) {
    stroke: #f2d388; //#4d163d
    animation-delay: -1;
  }

  :nth-child(2) {
    stroke: #c98474; //#840037
    animation-delay: -2s;
  }

  :nth-child(3) {
    stroke: #874c62; //#bd0034
    animation-delay: -3s;
  }

  :nth-child(4) {
    stroke: #a7d2cb; //#bd0034
    animation-delay: -4s;
  }

  :nth-child(5) {
    stroke: #faebd7; //#fdb731
    animation-delay: -5s;
  }

  @keyframes stroke-offset {
    100% {
      stroke-dashoffset: -35%;
    }
  }
`;

const Opening = () => {
  return (
    <StyledContainer>
      <StyledSVG viewBox="0 0 960 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            Holiday
          </text>
          <text textAnchor="middle" x="52%" y="80%">
            Holiday
          </text>
        </symbol>

        <g className="g-ants">
          <StyledUse
            as="use"
            xlinkHref="#s-text"
            className="text-copy"
          ></StyledUse>
          <StyledUse
            as="use"
            xlinkHref="#s-text"
            className="text-copy"
          ></StyledUse>
          <StyledUse
            as="use"
            xlinkHref="#s-text"
            className="text-copy"
          ></StyledUse>
          <StyledUse
            as="use"
            xlinkHref="#s-text"
            className="text-copy"
          ></StyledUse>
          <StyledUse
            as="use"
            xlinkHref="#s-text"
            className="text-copy"
          ></StyledUse>
        </g>
      </StyledSVG>
      <StyledSVG viewBox="0 0 960 300">
        <symbol id="l-text">
          <text textAnchor="middle" x="50%" y="80%">
            Explorer
          </text>
          <text textAnchor="middle" x="52%" y="80%">
            Explorer
          </text>
        </symbol>

        <g className="g-ants">
          <StyledUse
            as="use"
            xlinkHref="#l-text"
            className="text-copy"
          ></StyledUse>
          <StyledUse
            as="use"
            xlinkHref="#l-text"
            className="text-copy"
          ></StyledUse>
          <StyledUse
            as="use"
            xlinkHref="#l-text"
            className="text-copy"
          ></StyledUse>
          <StyledUse
            as="use"
            xlinkHref="#l-text"
            className="text-copy"
          ></StyledUse>
          <StyledUse
            as="use"
            xlinkHref="#l-text"
            className="text-copy"
          ></StyledUse>
        </g>
      </StyledSVG>
    </StyledContainer>
  );
};

export default Opening;
