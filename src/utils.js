import axios from "axios";

const API_key = "67231f3ffd94045ac0092796e2465dc65dd7f575";

//the list of countries owing how many days of holidays
export const getCountriesHolidays = async () => {
  const countriesHolidays = await axios.get(
    `https://calendarific.com/api/v2/countries?api_key=${API_key}`
  );
  // console.log(rankings.data.response.countries); //arr.length:230
  return countriesHolidays.data.response.countries;
};

//specific country owns what holidays
export const getHolidays = async (country) => {
  const holidays = await axios.get(
    `https://calendarific.com/api/v2/holidays?&api_key=${API_key}&country=${country}&year=2023`
  );
  return holidays.data.response.holidays;
  // console.log(holidays.data.response);
};
