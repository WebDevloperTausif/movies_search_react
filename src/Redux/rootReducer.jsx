const initialstate = {
  Movies: [],
  Movies: {},
};
export const rootReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, Movies: action.payload };
    case "SET_MOVIE":
      return { ...state, Movie: action.payload };
    default:
      return state;
  }
};
