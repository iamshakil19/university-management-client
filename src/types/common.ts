export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export interface ResponseSuccessType {
  data: any;
  meta?: IMeta;
}
export interface ResponseErrorType {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
}

export interface IGenericErrorMessage {
  path: string | number;
  message: string;
}
