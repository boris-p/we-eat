import { AppState } from "../reducers";
import { TextFilter } from "../lib/filters";

export const getRestaurantsText = (state: AppState) => state.restaurants.text;
export const getRestaurants = (state: AppState) =>
  state.restaurants.restaurants;
export const getFilterActive = (state: AppState) =>
  state.restaurants.filterActive;

export const getTextFilterValue = (state: AppState, filterKey: string) => {
  const filter = state.restaurants.filters[filterKey] as TextFilter;
  return filter.value;
};

export const getFilteredRestaurants = (state: AppState) =>
  state.restaurants.filteredRestaurants;
