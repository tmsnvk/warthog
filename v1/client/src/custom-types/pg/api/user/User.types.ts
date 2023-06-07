// add new user.
export type AddNewUserParameterT = {
  userEmail: string;
  firstName: string;
  lastName: string;
  userRole: string;
}

export type AddNewUserReturnT = {
  data: {
    pgCommandOpen: string;
    dataFields: string[];
    pgCommandClose: string;
  }[]
}

export type AddNewUserErrorT = {
  response: {
    data: string;
  }
}
