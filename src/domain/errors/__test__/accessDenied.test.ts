import AccessDeniedError from "@common/errors/accessDenied";

test("Test Access Denied Error", () => {
  const t = () => {
    throw new AccessDeniedError();
  };
  expect(t).toThrow(AccessDeniedError);
  expect(t).toThrow("Access denied!");
});
