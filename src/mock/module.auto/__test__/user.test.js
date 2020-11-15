import { verifyPassword, verifyUsername } from "../verify";
import validate from "../user";

jest.mock("../verify");

describe("user", () => {
  test("should validate username and password", () => {
    // Arrange
    // Act
    verifyPassword.mockReturnValue(true);
    verifyUsername.mockReturnValue(true);
    // Assert
    const res = validate("aaa", "bbb");
    expect(res).toEqual(true);
  });
});
