// add new user.
export type AddNewUserParameterType = {
  userEmail: string;
  firstName: string;
  lastName: string;
  userRole: string;
}

export type AddNewUserReturnType = {
  data: {
    userEmail: string;
    firstName: string;
    lastName: string;
    userRole: string;
    createdAt: string;
  }
}

export type AddNewUserErrorType = {
  response: {
    data: string;
  }
}
