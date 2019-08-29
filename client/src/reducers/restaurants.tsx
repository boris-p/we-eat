import { AnyAction } from "redux";

import {
  FILTER_RESTAURANTS,
  LOAD_RESTAURANTS,
  TEST_ACTION,
} from "../actions/restaurantActions";
import { restaurantAdaptor, RestaurantObj } from "../models/Restaurant";
import { REQUEST_STATUS } from "../middlewares/ApiCall";
import {
  Filter,
  FILTER_TYPE,
  FilterMap,
  TextFilter,
  textFilter,
} from "../lib/filters";

const restaurantsTextFilter = (
  restaurant: RestaurantObj,
  filter: TextFilter<RestaurantObj>
): boolean => {
  return restaurant.name.includes(filter.value);
};
export const TEXT_FILTER = "TEXT_FILTER";

export const initialState: RestaurantState = {
  text: "",
  restaurants: [],
  filteredRestaurants: [],
  restaurantsRequestStatus: REQUEST_STATUS.NOT_LOADED,
  filterActive: false,
  filters: {
    TEXT_FILTER: textFilter<RestaurantObj>(
      "",
      ["name", "address", "cuisines"],
      restaurantsTextFilter
    ),
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
      const filter = state.filters[action.payload.filterKey] as Filter;
      if (filter.filterType === FILTER_TYPE.TEXT) {
        const fltr = filter as TextFilter<RestaurantObj>;
        fltr.active = true;
        fltr.value = action.payload.value;
        return {
          ...state,
          filterActive: true,
          filteredRestaurants: state.restaurants.filter(restaurant =>
            fltr.filterFn(restaurant, fltr)
          ),
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default restaurants;
