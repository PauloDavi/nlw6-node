class CustomException implements Error {
  message: string;
  name: string;
  statusCode: number;
  data?: Record<string, unknown>;

  constructor(
    message: string,
    statusCode?: number,
    data?: Record<string, unknown>,
  ) {
    this.message = message;
    this.statusCode = statusCode || 500;
    this.data = data;

    Error.captureStackTrace(this, CustomException);
  }
}

export { CustomException };
