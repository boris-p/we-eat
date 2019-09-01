import { AnyAction } from "redux";

import { LOAD_RESTAURANTS, TEST_ACTION } from "../actions/restaurantActions";
import { restaurantAdaptor, RestaurantObj } from "../models/Restaurant";
import { REQUEST_STATUS } from "../middlewares/ApiCall";

export const initialState: RestaurantState = {
  text: "",
  restaurants: [],
  restaurantsRequestStatus: REQUEST_STATUS.NOT_LOADED,
};

interface RestaurantState {
  text: string;
  restaurants: RestaurantObj[];
  restaurantsRequestStatus: REQUEST_STATUS;
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
    default:
      return state;
  }
};

export default restaurants;
