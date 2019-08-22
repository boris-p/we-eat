import { TEST_ACTION } from "../actions/restaurantActions";

export const initialState = {
  text: "",
};

interface RestaurantState {
  text: string;
}

const restaurants = (state = initialState, action: any): RestaurantState => {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, text: action.text };
    default:
      return state;
  }
};

export default restaurants;
