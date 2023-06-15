class UnexpectedError extends Error {
  constructor() {
    super("Oops, Somethin went wrong, please try again later!");
    this.name = "UnexpectedError";
  }
}

export default UnexpectedError;
