import { formVisibility } from "../Actions/actions";

const initialData = {
  visible: false,
  DarkMode: true,
  RegionData: {},
  // LatLng: [50, 4],
  // currency: "",
  // unitsOfSpeed: "",
  // unitOfVolume: "",
  // TimeZone: "",
};
function reducer(state = initialData, action) {
  switch (action.type) {
    case "setVisibility":
      const visibility = action.payload;

      return {
        ...state,
        visible: visibility,
      };

    case "fetchCountryData":
      const countryData = action.payload;

      return {
        ...state,
        RegionData: countryData,
      };

    // case "setExtraDetails":
    //   return {
    //     ...state,
    //     currency: action.payload[0],
    //     unitsOfSpeed: action.payload[1],
    //     TimeZone: action.payload[2],
    //   };

    case "toggleMode":
      const darkMode = action.payload;

      return {
        ...state,
        DarkMode: darkMode,
      };

    default:
      return state;
  }
}

export default reducer;
