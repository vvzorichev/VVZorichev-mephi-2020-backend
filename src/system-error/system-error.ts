import { CustomError } from 'ts-custom-error';

export const enum SystemErrors {
  REST_VALIDATION_ERROR = 200,
  UNIQUE_CONSTRAINT_ALERT = 240,
  OTHER = 1000,
  ROUTE_NOT_FOUND = 1001,
}

export class SystemError extends CustomError {
  private systemCode: SystemErrors;
  private systemAdditionalData: object;

  constructor(message?: string) {
    super(message);

    Error.captureStackTrace(this, SystemError);
  }

  public getSystemCode(): SystemErrors {
    return this.systemCode;
  }

  public setSystemCode(systemCode: SystemErrors) {
    this.systemCode = systemCode;
  }

  public getMessage(): string {
    return this.message;
  }

  public getSystemAdditionalData(): object {
    return this.systemAdditionalData;
  }

  public setSystemAdditionalData(systemAdditionalData: object) {
    this.systemAdditionalData = systemAdditionalData;
  }
}
