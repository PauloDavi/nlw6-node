class CustomExceptions extends Error {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode?: number) {
    super(message);

    this.message = message;
    this.statusCode = statusCode || 500;
  }
}

export { CustomExceptions };
