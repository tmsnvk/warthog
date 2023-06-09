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
  addNewUserQueryData: GeneralQueryDataT[];
  setAddNewUserQueryData: (value: { pgCommandOpen: string, dataFields: string[], pgCommandClose: string }[]) => void;
}

type PgFormContextProvider = {
  children: ReactNode;
}

const initialState: GeneralQueryDataT[] = [
  {
    pgCommandOpen: '',
    dataFields: [],
    pgCommandClose: '',
  },
];

export const PgFormContext = createContext<PgFormContext>({} as PgFormContext);

export const PgFormContextProvider = ({ children }: PgFormContextProvider) => {
  const [addNewUserQueryData, setAddNewUserQueryData] = useState<GeneralQueryDataT[]>(initialState);

  return (
    <PgFormContext.Provider value={{ addNewUserQueryData, setAddNewUserQueryData }}>
      {children}
    </PgFormContext.Provider>
  );
};
