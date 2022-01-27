export enum ErrorType {
    HttpError,
    InvalidCredentials
}

export class LoginError {
  constructor(public type: ErrorType, public message: string) {}
}