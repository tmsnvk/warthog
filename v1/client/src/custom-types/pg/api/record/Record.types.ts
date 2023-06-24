// create new record.
export type CreateRecordParameterT = {
  recordEmail: string;
  recordFirstName: string;
  recordLastName: string;
  recordRole: string;
}

export type CreateRecordReturnT = {
  data: {
    pgCommandOpen: string;
    dataFields: string[];
    pgCommandClose: string;
  }[]
}

export type CreateRecordErrorT = {
  response: {
    status: string;
    data: {
      message: string;
    }
  }
}
