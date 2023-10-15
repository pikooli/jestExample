import { complexFunc } from "./complexFunc";
import * as simpleFunctions from "./simpleFunctions";

jest.mock("./simpleFunctions", () => ({
  // We import other function and only mock the multi, we don't need to mock other func
  ...jest.requireActual("./simpleFunctions"),
  multi: jest.fn(),
}));

// Here testing normal behavior
describe("complexFunc", () => {
  it("complexFunc 2, 1 to equal 3", () => {
    // We put back the original function on the mock of multi, so we have the normal behavior
    simpleFunctions.multi.mockImplementation(
      jest.requireActual("./simpleFunctions").multi
    );

    expect(complexFunc(2, 1)).toBe(3);
  });
});

describe("complexFunc testing mocking", () => {
  it("mocking internal function of complexFunc 2, 1 to equal 'test'", () => {
    // Here we mock the implementation, to return a fixed value
    simpleFunctions.multi.mockImplementation(() => "test");

    expect(complexFunc(2, 1)).toBe("test");
  });
});
