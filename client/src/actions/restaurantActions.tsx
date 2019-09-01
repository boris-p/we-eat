import { CALL_API } from "../middlewares/ApiCall";
import { requestOptions } from "../lib/fetchHelper";
import { RestaurantObj } from "../models/Restaurant";

export const TEST_ACTION = "SEND_MESSAGE";
export const ADD_RESTAURANT = "ADD_RESTAURANT";
export const SELECT_RESTAURANT = "SELECT_RESTAURANT";
export const FILTER_RESTAURANTS = "FILTER_RESTAURANTS";

export const LOAD_RESTAURANTS = "LOAD_RESTAURANTS";

interface TestActionType {
  type: typeof TEST_ACTION;
  text: string;
}
export const testAction = (text: string) => ({
  type: TEST_ACTION,
  text,
});
export const addRestaurant = () => ({
  type: ADD_RESTAURANT,
});
export const loadRestaurants = () => {
  const url = `${process.env.REACT_APP_API_URL}/restaurants`;
  return {
    type: LOAD_RESTAURANTS,
    [CALL_API]: {
      url,
      requestOptions: requestOptions(),
    },
  };
};

export const selectRestaurant = (restaurant: RestaurantObj) => ({
  type: SELECT_RESTAURANT,
  restaurant,
});
export const filterRestaurantsByText = (filterKey: string, value: string) => ({
  type: FILTER_RESTAURANTS,
  payload: {
    filterKey,
    value,
  },
});
export const filterRestaurantsByRange = (
  filterKey: string,
  minValue: number,
  maxValue?: number
) => {
  return {
    type: FILTER_RESTAURANTS,
    payload: {
      filterKey,
      minValue,
      maxValue,
    },
  };
};
