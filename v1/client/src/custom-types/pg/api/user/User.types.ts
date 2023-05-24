// add new user.
export type AddNewUserParameterType = {
  userEmail: string;
  firstName: string;
  lastName: string;
  userRole: string;
}

export type AddNewUserReturnType = {
  data: {
    pgCommand: string;
    tableName?: string;
    dataFields: string[];
  }[]
}

export type AddNewUserErrorType = {
  response: {
    data: string;
  }
}
