// react and eco.
import {
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react';

export type GeneralQueryDataT = {
  pgCommandOpen: string;
  dataFields: string[];
  pgCommandClose: string;
}

type PgFormContext = {
  createRecordQueryData: GeneralQueryDataT[];
  setCreateRecordQueryData: (value: { pgCommandOpen: string, dataFields: string[], pgCommandClose: string }[]) => void;
}

type PgFormContextProvider = {
  children: ReactNode;
}

const initialState: GeneralQueryDataT[] = [{
  pgCommandOpen: '',
  dataFields: [],
  pgCommandClose: '',
}];

export const PgFormContext = createContext<PgFormContext>({} as PgFormContext);

export const PgFormContextProvider = ({ children }: PgFormContextProvider) => {
  const [createRecordQueryData, setCreateRecordQueryData] = useState<GeneralQueryDataT[]>(initialState);

  return (
    <PgFormContext.Provider value={{ createRecordQueryData, setCreateRecordQueryData }}>
      {children}
    </PgFormContext.Provider>
  );
};
