import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2rem;
  cursor: pointer;

  :hover {
    color: #636363;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-align: center;
`;

const StyledErrorMsg = styled.p`
  color: salmon;
`;

const Header = ({ onSearch, onDisplayRank, error }) => {
  const [searchable, setSearchable] = useState(false);
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <StyledHeader>
      <StyledFontAwesomeIcon icon={faChartSimple} onClick={onDisplayRank} />
      {searchable ? (
        <StyledWrapper>
          <input
            type="text"
            value={country}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onSearch && onSearch(country);
                setCountry("");
              }
            }}
          />
          <p>Type a country to search by name or ISO code, then hit enter.</p>
          {error && <StyledErrorMsg>country invalid</StyledErrorMsg>}
        </StyledWrapper>
      ) : (
        <StyledWrapper>
          Holiday Explorer{" "}
          <p>Click on a dot to see the country holidays data.</p>
        </StyledWrapper>
      )}

      <StyledFontAwesomeIcon
        icon={faMagnifyingGlass}
        onClick={() => {
          setSearchable((prev) => !prev);
        }}
      />
    </StyledHeader>
  );
};

export default Header;
