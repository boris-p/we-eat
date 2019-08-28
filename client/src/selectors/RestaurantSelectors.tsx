import { AppState } from "../reducers";

export const getRestaurantsText = (state: AppState) => state.restaurants.text;
export const getRestaurants = (state: AppState) =>
  state.restaurants.restaurants;
