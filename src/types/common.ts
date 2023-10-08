export interface IMeta {
  limit: number;
  page: number;
  total: number;
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

export interface IDepartment {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Name {
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface IAdmin {
  id: string;
  name: Name;
  gender: string;
  managementDepartment: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  dateOfBirth: string;
  bloodGroup: string;
  designation: string;
  presentAddress: string;
  permanentAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
