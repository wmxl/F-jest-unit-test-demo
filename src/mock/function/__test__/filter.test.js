import filter from "../filter";

describe("mock callback", () => {
  test("toHaveBeenCalledWith", () => {
    // Arrange
    const arr = [1, 2, 3, 4];
    const callback = jest.fn();
    // Act
    callback
      .mockReturnValue(false) // globe
      .mockReturnValueOnce(true) // first
      .mockReturnValueOnce(true); // second
    const res = filter(callback, arr);
    // Assert
    expect(res).toEqual([1, 2]);
  });

  test("toHaveReturned", () => {
    // Arrange
    // Act
    // Assert
  });
});
