import styled from "styled-components";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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

  @media (max-width: 1024px) {
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const StyledCloseIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: #fff;
  position: absolute;
  top: 1rem;
  right: 1rem;
  :hover {
    color: #636363;
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

const Details = ({ country, holidays, loading, onClose }) => {
  return (
    <StyledContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <StyledCloseIcon icon={faXmark} onClick={onClose} />
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
