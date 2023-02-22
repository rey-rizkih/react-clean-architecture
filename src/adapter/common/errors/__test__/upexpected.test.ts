import UnexpectedError from "@common/errors/unexpected";

test("Test Unexpected Error", () => {
  const t = () => {
    throw new UnexpectedError();
  };
  expect(t).toThrow(UnexpectedError);
  expect(t).toThrow("Oops, Somethin went wrong, please try again later!");
});
