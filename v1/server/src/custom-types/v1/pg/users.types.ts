// export type GetAllRequestType = {}

export type AddNewUserQueryType = {
  rows: {
    email: string;
    first_name: string;
    last_name: string;
    user_id: string;
    user_type: string;
    created_at: string;
  }[]
}

export type AddNewUserReturnType = {
  pgCommandOpen: string;
  dataFields: (string | number)[];
  pgCommandClose: string | undefined;
}[]
