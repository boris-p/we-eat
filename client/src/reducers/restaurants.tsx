import { TEST_ACTION } from "../actions/restaurantActions";

export const initialState = {
  text: "",
};

interface IRestaurantState {
  text: string;
}

const restaurants = (state = initialState, action: any): IRestaurantState => {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, text: action.text };
    default:
      return state;
  }
};

export default restaurants;
