import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();

const moduleFactory = () => {
  const theMockOfClass = jest.fn().mockImplementation(() => {
    const returnValue = {
      acceptInjection: mockAcceptInjection,
    };
    return returnValue;
  });

  return theMockOfClass;
};

jest.mock("../recipient", moduleFactory);

beforeEach(() => {
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // Arrange
    // 创建VaccineTest
    // Act
    // 调用inject
    // Assert
    // 判断模拟recipient对象有没有接收注射，及模拟acceptInjection被调用
  });
});
