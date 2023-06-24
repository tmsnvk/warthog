// ** createNewUser ** //
export type CreateRecordParameterT = {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  id: string;
}

export type CreateRecordQueryT = {
  rows: {
    email: string;
    first_name: string;
    last_name: string;
    user_id: string;
    user_type: string;
    created_at: string;
  }[]
}

export type CreateRecordReturnT = {
  pgCommandOpen: string;
  dataFields: (string | number)[];
  pgCommandClose: string | undefined;
}[] | undefined;

// **  ** //
