import * as actions from "./restaurantActions";
import { TEST_ACTION } from "./restaurantActions";

describe("restaurant actions", () => {
  it("should create a TEST_ACTION", () => {
    const exampleTextPayload = "hello world";
    expect(actions.testAction(exampleTextPayload)).toEqual({
      type: TEST_ACTION,
      text: exampleTextPayload,
    });
  });
});
