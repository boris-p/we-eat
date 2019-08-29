import { RestaurantObj } from "../components/restaurants/Restaurant";

export const TEST_ACTION = "SEND_MESSAGE";
export const ADD_RESTAURANT = "ADD_RESTAURANT";
export const SELECT_RESTAURANT = "SELECT_RESTAURANT";

interface TestActionType {
  type: typeof TEST_ACTION;
  text: string;
}
export const testAction = (text: string) => ({
  type: TEST_ACTION,
  text,
});
export const addRestaurant = () => {
  return {
    type: ADD_RESTAURANT,
  };
};
export const selectRestaurant = (restaurant: RestaurantObj) => {
  return {
    type: SELECT_RESTAURANT,
    restaurant,
  };
};
