// react and eco.
import {
  ReactNode,
  createContext,
  useState,
} from 'react';

export type TableVisualisationDataT = {
  tableName: string;
  tableColumns: string[][];
}

export type QueryVisualisationDataT = {
  pgCommandOpen: string;
  dataFields: (string | number)[];
  pgCommandClose: string;
}

type PgFormContext = {
  tableVisualisation: TableVisualisationDataT[];
  setTableVisualisation: (value: { tableName: string, tableColumns: [] }[]) => void;
  queryVisualisation: QueryVisualisationDataT[];
  setQueryVisualisation: (value: { pgCommandOpen: string, dataFields: (string | number)[], pgCommandClose: string }[]) => void;
}

type PgFormContextProvider = {
  children: ReactNode;
}

const tableInitialState: TableVisualisationDataT[] = [{
  tableName: '',
  tableColumns: [[]],
}];

const queryInitialState: QueryVisualisationDataT[] = [{
  pgCommandOpen: '',
  dataFields: [],
  pgCommandClose: '',
}];

export const PgFormContext = createContext<PgFormContext>({} as PgFormContext);

export const PgFormContextProvider = ({ children }: PgFormContextProvider) => {
  const [tableVisualisation, setTableVisualisation] = useState<TableVisualisationDataT[]>(tableInitialState);
  const [queryVisualisation, setQueryVisualisation] = useState<QueryVisualisationDataT[]>(queryInitialState);

  return (
    <PgFormContext.Provider value={{
      tableVisualisation, setTableVisualisation,
      queryVisualisation, setQueryVisualisation,
    }}>
      {children}
    </PgFormContext.Provider>
  );
};
