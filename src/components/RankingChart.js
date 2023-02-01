import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import { getCountriesHolidays } from "../utils";
import useComponentVisible from "../useComponentVisible";

const StyledContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 70vh;
  width: min(80%, 550px);
  background-color: #343d45;
  border-radius: 10px;
  padding: 2em;
  opacity: 0.95;
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

const RankingChart = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  useEffect(() => {
    setLoading(true);
    getCountriesHolidays()
      .then((res) => {
        setCountries(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div ref={ref}>
      {isComponentVisible && (
        <StyledContainer>
          <StyledTitle>Country Rankings</StyledTitle>
          <StyledText>
            <p>All rankings are based on 2023 holidays.</p>
            <p>
              Observance, religious, local and national holidays are included.
            </p>
          </StyledText>

          {loading ? (
            <Loader />
          ) : (
            <StyledUl>
              {countries &&
                countries
                  .sort((a, b) => b.total_holidays - a.total_holidays)
                  .map((country) => {
                    return (
                      <StyledLi key={country.uuid}>
                        <p> {country.country_name}</p>
                        <p>{country.total_holidays} days</p>
                      </StyledLi>
                    );
                  })}
            </StyledUl>
          )}
        </StyledContainer>
      )}
    </div>
  );
};

export default RankingChart;
