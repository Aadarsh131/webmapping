import axios from "axios";
import { useState } from "react";

let countryDetails = {};

export const formVisibility = (visibility) => {
  return {
    type: "setVisibility",
    payload: visibility,
  };
};

export const fetchCountryData = (country) => {
  return async function (dispatch, getState) {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log(response)
        response.data.map((state) =>

          state.name.common == country
            ? (countryDetails = state)
            : console.log("not found")
        );
        dispatch({ type: "fetchCountryData", payload: countryDetails });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// export function setExtraDetails(currency, unitOfSpeed, timeZone) {
//   return {
//     type: "setExtraDetails",
//     payload: [currency, unitOfSpeed, timeZone],
//   };
// }

//Action to set the theme(dark or light)
export const toggleMode = (darkMode) => {
  return {
    type: "toggleMode",
    payload: darkMode,
  };
};
