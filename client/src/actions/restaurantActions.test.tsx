import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

import { generateRestaurant } from "../models/RestaurantFactory";
import { apiCall, CALL_API, REQUEST_STATUS } from "../middlewares/ApiCall";
import { RequestMethod } from "../lib/fetchHelper";

import * as actions from "./restaurantActions";

const middlewares = [apiCall()];
const mockStore = configureMockStore(middlewares);

describe("restaurant actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
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
    const restaurant = generateRestaurant();
    expect(actions.selectRestaurant(restaurant)).toEqual({
      type: actions.SELECT_RESTAURANT,
      restaurant,
    });
  });
  it("should LOAD_RESTAURANTS", async () => {
    const url = `${process.env.REACT_APP_API_URL}/restaurants`;
    const restaurants = ["rest 1"];
    fetchMock.getOnce(url, {
      restaurants,
    });
    const expectedActions = [
      {
        type: actions.LOAD_RESTAURANTS,
        status: REQUEST_STATUS.PENDING,
      },
      {
        type: actions.LOAD_RESTAURANTS,
        status: REQUEST_STATUS.SUCCESS,
        response: { restaurants },
      },
      {
        type: actions.LOAD_RESTAURANTS,
        [CALL_API]: {
          requestOptions: {
            headers: {
              "Content-Type": "application/json",
            },
            method: RequestMethod.GET,
          },
          url,
        },
      },
    ];
    const store = mockStore({});
    await store.dispatch(actions.loadRestaurants());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
