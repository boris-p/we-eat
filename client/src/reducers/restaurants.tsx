import { AnyAction } from "redux";

import {
  FILTER_RESTAURANTS,
  LOAD_RESTAURANTS,
  TEST_ACTION,
} from "../actions/restaurantActions";
import { restaurantAdaptor, RestaurantObj } from "../models/Restaurant";
import { REQUEST_STATUS } from "../middlewares/ApiCall";
import {
  applyFilters,
  FilterMap,
  rangeFilter,
  textFilter,
  updateFilterState,
} from "../lib/filters";
import { rangeFilterDefaultFn } from "../lib/filterFuncs";

const restaurantsTextFilter = (
  restaurant: RestaurantObj,
  value: string
): boolean => {
  return (
    restaurant.name.includes(value) ||
    restaurant.address.includes(value) ||
    restaurant.cuisines.some(cuisine => cuisine.name.includes(value))
  );
};

// filter unique identifiers
export const TEXT_FILTER = "TEXT_FILTER";
export const DELIVERY_TIME_FILTER = "DELIVERY_TIME_FILTER";
export const STARS_FILTER = "STARS_FILTER";
export const REVIEWS_FILTER = "REVIEWS_FILTER";

export const initialState: RestaurantState = {
  text: "",
  restaurants: [],
  filteredRestaurants: [],
  restaurantsRequestStatus: REQUEST_STATUS.NOT_LOADED,
  filterActive: false,
  filters: {
    [TEXT_FILTER]: textFilter<RestaurantObj>("", restaurantsTextFilter),
    [DELIVERY_TIME_FILTER]: rangeFilter("deliveryTime", rangeFilterDefaultFn),
    [STARS_FILTER]: rangeFilter("rating", rangeFilterDefaultFn),
    [REVIEWS_FILTER]: rangeFilter("numOfReviews", rangeFilterDefaultFn),
  },
};

interface RestaurantState {
  text: string;
  restaurants: RestaurantObj[];
  filteredRestaurants: RestaurantObj[];
  restaurantsRequestStatus: REQUEST_STATUS;
  filterActive: boolean;
  filters: FilterMap;
}

const restaurants = (
  state = initialState,
  action: AnyAction
): RestaurantState => {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, text: action.text };
    case LOAD_RESTAURANTS: {
      if (action.status === REQUEST_STATUS.PENDING) {
        return { ...state, restaurantsRequestStatus: REQUEST_STATUS.PENDING };
      } else if (action.status === REQUEST_STATUS.SUCCESS) {
        return {
          ...state,
          restaurantsRequestStatus: REQUEST_STATUS.SUCCESS,
          restaurants: action.response.map(restaurantAdaptor),
        };
      } else return state;
    }
    case FILTER_RESTAURANTS: {
      const updatedFilters = {
        ...state.filters,
        [action.payload.filterKey]: updateFilterState(
          state.filters[action.payload.filterKey],
          action
        ),
      };
      return {
        ...state,
        filters: updatedFilters,
        filterActive: true,
        filteredRestaurants: applyFilters(state.restaurants, updatedFilters),
      };
    }
    default:
      return state;
  }
};

export default restaurants;
