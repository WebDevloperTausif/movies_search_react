import { SET_MOVIES, SET_MOVIE } from "./Type";
const addmovies = (data) => {
  return {
    type: SET_MOVIES,
    payload: data,
  };
};
const addmovie = (data) => {
  return {
    type: SET_MOVIES,
    payload: data,
  };
};
export default { addmovies, addmovie };
