import { LOAD_RESTAURANTS, TEST_ACTION } from "../../actions/restaurantActions";
import { REQUEST_STATUS } from "../../middlewares/ApiCall";
import restaurants, { initialState } from "../restaurants";

import { restaurantsFromServer, adaptedRestaurants } from "./restaurantMocks";

describe("restaurants reducer", () => {
  it("should handle initial state", () => {
    expect(restaurants(undefined, { type: "NEW_ACTION" })).toEqual(
      initialState
    );
  });

  it("should handle TEST_ACTION", () => {
    const exampleText = "hello there stranger";
    expect(
      restaurants(initialState, {
        type: TEST_ACTION,
        text: exampleText,
      })
    ).toEqual({ ...initialState, text: exampleText });
  });
  describe("LOAD_RESTAURANTS", () => {
    it("should handle pending status", () => {
      expect(
        restaurants(initialState, {
          type: LOAD_RESTAURANTS,
          status: REQUEST_STATUS.PENDING,
        })
      ).toEqual({
        ...initialState,
        restaurantsRequestStatus: REQUEST_STATUS.PENDING,
      });
    });
    it("should handle success status", () => {
      expect(
        restaurants(initialState, {
          type: LOAD_RESTAURANTS,
          status: REQUEST_STATUS.SUCCESS,
          response: restaurantsFromServer,
        })
      ).toEqual({
        ...initialState,
        restaurantsRequestStatus: REQUEST_STATUS.SUCCESS,
        restaurants: adaptedRestaurants,
      });
    });
  });
});
