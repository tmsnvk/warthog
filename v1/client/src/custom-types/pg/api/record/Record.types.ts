import {
  GeneralQueryVisualisationDataT,
  GeneralTableVisualisationDataT,
} from '@context/PgFormContext.context';

// create new record.
export type CreateRecordParameterT = {
  recordEmail: string;
  recordFirstName: string;
  recordLastName: string;
  recordRole: string;
}

export type CreateRecordReturnT = {
  data: {
    queryVisualisation: GeneralQueryVisualisationDataT[];
    tableVisualisation: GeneralTableVisualisationDataT[];
  }
}

export type CreateRecordErrorT = {
  response: {
    status: string;
    data: {
      message: string;
    }
  }
}
