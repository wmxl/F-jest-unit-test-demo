function drinkAll(callback, flavour) {
  if (flavour !== "octopus") {
    callback(flavour);
  }
}

describe("是否已被调用", () => {
  test("toHaveBeenCalled", () => {
    const drink = jest.fn();
    drinkAll(drink, "lemon");
    expect(drink).toHaveBeenCalled();
  });

  test("toHaveBeenCalledWith", () => {
    const drink = jest.fn();
    drinkAll(drink, "lemon");
    expect(drink).toHaveBeenCalledWith("lemon");
  });
});

test("是否有返回", () => {
  const drink = jest.fn(() => true);
  drink();
  expect(drink).toHaveReturned();
  expect(drink).toHaveReturnedWith(true);
});
