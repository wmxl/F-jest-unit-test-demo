import { fetchUserProfile } from "../fetchUserProfile";

jest.mock("axios");

describe("fetchUserProfile", () => {
  test("should return user profile successfully", async () => {
    const result = fetchUserProfile();
    await expect(result).resolves.toEqual({ name: "NANA" });
  });
});
