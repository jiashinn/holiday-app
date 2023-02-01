import styled from "styled-components";
import Loader from "./Loader";
const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5rem;
  margin-block: auto;
  height: 70vh;
  width: min(80%, 350px);
  background-color: #343d45;
  border-radius: 10px;
  padding: 2em;
  opacity: 0.95;
  z-index: 100;

  @media screen (max-width: 1024px) {
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const StyledTitle = styled.h3`
  color: #a8516e;
`;

const StyledText = styled.div`
  color: gray;
  padding-block: 1em;
`;

const StyledUl = styled.ul`
  overflow-y: auto;
  height: 80%;
`;

const StyledLi = styled.li`
  padding-block: 1em;
  padding-left: 2em;
  border-bottom: 1px solid #a94064;
  color: #fff;
  background-color: #1b2025;
`;

const Details = ({ country, holidays, loading }) => {
  return (
    <StyledContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <StyledTitle>{country} Holidays</StyledTitle>
          <StyledText>
            <p>All data are based on 2023 holidays.</p>
            <p>
              Observance, religious, local and national holidays are included.
            </p>
          </StyledText>
          <StyledUl>
            {holidays &&
              holidays.map((holiday, index) => {
                return (
                  <StyledLi key={index}>
                    <p> {holiday.name}</p>
                    <p>
                      {holiday.date.datetime.year}/{holiday.date.datetime.month}
                      /{holiday.date.datetime.day}
                    </p>
                  </StyledLi>
                );
              })}
          </StyledUl>{" "}
        </>
      )}
    </StyledContainer>
  );
};

export default Details;
