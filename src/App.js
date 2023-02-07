import { useEffect, useState } from "react";
import Globe from "./components/Globe";
import Header from "./components/Header";
import RankingChart from "./components/RankingChart";
import Details from "./components/Details";
import { data } from "./data";
import { getCountriesHolidays, getHolidays } from "./utils";

function App() {
  const [showRank, setShowRank] = useState(false);
  const [focus, setFocus] = useState(null);
  const [markers, setMarkers] = useState(data);
  const [searchResultError, setSearchResultError] = useState(false);
  const [event, setEvent] = useState({});
  const [details, setDetails] = useState([]);
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (country) => {
    const obj = markers.find((item) => {
      return (
        item.country.toLowerCase() === country.toLowerCase() ||
        item.iso_code.toLowerCase() === country.toLowerCase()
      );
    });

    if (obj === undefined) {
      setSearchResultError(true);
    } else {
      setCountry(country);
      setFocus(obj.coordinates);
      setSearchResultError(false);
    }
  };

  const handleDisplayRank = () => {
    setShowRank((prev) => !prev);
  };

  const handleOnClickMarker = (marker, markerObject, event) => {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setCountry(marker.iso_code);
  };

  const handleOnDefocus = () => {
    setDetails(null);
  };

  const handleClose = () => {
    setDetails(null);
  };

  useEffect(() => {
    setLoading(true);
    getCountriesHolidays()
      .then((res) => {
        res.forEach((obj) => {
          data.forEach((marker) => {
            if (marker.country === obj.country_name) {
              marker.total_holidays = obj.total_holidays;
            }
          });
        });
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    getHolidays(country)
      .then((res) => {
        const unique = [];
        res?.map((x) =>
          unique.filter((a) => a.name === x.name && a.date.iso === a.date.iso)
            .length > 0
            ? null
            : unique.push(x)
        );
        setDetails(unique);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      });
  }, [country]);

  return (
    <>
      <Header
        onSearch={handleSearch}
        onDisplayRank={handleDisplayRank}
        error={searchResultError}
      />
      <Globe
        focus={focus}
        markers={markers}
        onClickMarker={handleOnClickMarker}
        onDefocus={handleOnDefocus}
      />
      {showRank && <RankingChart />}
      {details && details.length > 0 && (
        <Details
          holidays={details}
          country={details[0].country.name}
          loading={loading}
          onClose={handleClose}
        />
      )}
    </>
  );
}
export default App;
