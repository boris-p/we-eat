import { generateRestaurants } from "../components/restaurants/test/RestaurantFactory";

import * as actions from "./restaurantActions";

describe("restaurant actions", () => {
  it("should create a TEST_ACTION", () => {
    const exampleTextPayload = "hello world";
    expect(actions.testAction(exampleTextPayload)).toEqual({
      type: actions.TEST_ACTION,
      text: exampleTextPayload,
    });
  });
  it("should trigger ADD_RESTAURANT", () => {
    expect(actions.addRestaurant()).toEqual({
      type: actions.ADD_RESTAURANT,
    });
  });
  it("should trigger SELECT_RESTAURANTS with restaurant object", () => {
    const restaurant = generateRestaurants(1)[0];
    expect(actions.selectRestaurant(restaurant)).toEqual({
      type: actions.SELECT_RESTAURANT,
      restaurant,
    });
  });
});
