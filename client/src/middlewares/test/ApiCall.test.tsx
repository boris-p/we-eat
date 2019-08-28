import { AnyAction } from "redux";
import fetchMock from "fetch-mock";

import { apiCall, CALL_API, REQUEST_STATUS } from "../ApiCall";
import { RequestMethod } from "../../lib/fetchHelper";

const apiCallMiddleware = apiCall();

const mockStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
};
const next = jest.fn();
const invokeMiddleware = async (action: AnyAction) =>
  apiCallMiddleware(mockStore)(next)(action);

const mockFetchRes = { foo: "bar" };

describe("api call middleware", () => {
  beforeAll(() => {
    fetchMock.get("*", mockFetchRes);
  });
  afterAll(() => {
    fetchMock.restore();
  });

  it("should pass an unrelated event forward", () => {
    const action = { type: "UNRELATED_ACTION" };
    invokeMiddleware(action);
    expect(fetchMock.calls()).toHaveLength(0);
    expect(mockStore.dispatch).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(action);
  });
  describe("handle api call", () => {
    const testUrl = "http://test_url/";
    const action = {
      type: "RELATED_ACTION",
      [CALL_API]: {
        url: testUrl,
        requestOptions: {
          method: RequestMethod.GET,
        },
      },
    };
    beforeAll(() => {
      invokeMiddleware(action);
    });
    it("should trigger fetch function", () => {
      expect(JSON.stringify(fetchMock.lastCall())).toEqual(
        JSON.stringify([
          testUrl,
          {
            method: RequestMethod.GET,
            headers: {
              "Content-Type": "application/json",
            },
          },
        ])
      );
    });
    it("should dispatch pending action", () => {
      expect(mockStore.dispatch).toHaveBeenCalledWith({
        type: action.type,
        status: REQUEST_STATUS.PENDING,
      });
    });
    it("should dispatch success action", () => {
      expect(mockStore.dispatch).toHaveBeenCalledWith({
        type: action.type,
        status: REQUEST_STATUS.SUCCESS,
        response: mockFetchRes,
      });
    });
    it("returns the action to the next middleware on the list", () => {
      expect(next).toHaveBeenCalledWith(action);
    });
  });
});
