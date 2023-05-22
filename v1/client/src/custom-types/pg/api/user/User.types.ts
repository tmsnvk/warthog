// add new user.
export type AddNewUserParameterType = {
  userEmail: string;
  firstName: string;
  lastName: string;
}

export type AddNewUserReturnType = {
  data: {
    userEmail: string;
    firstName: string;
    lastName: string;
    createdAt: string;
  }
}

export type AddNewUserErrorType = {
  response: {
    data: string;
  }
}
