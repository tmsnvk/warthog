// react and eco.
import {
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react';

type GeneralQueryDataType = {
  pgCommandOpen: string;
  dataFields: string[];
  pgCommandClose: string | undefined;
}

type PgFormContext = {
  addNewUserQueryData: GeneralQueryDataType[];
  setAddNewUserQueryData: (value: [{ pgCommandOpen: string, dataFields: [], pgCommandClose: string | undefined }]) => void;
}

type PgFormContextProvider = {
  children: ReactNode;
}

export const PgFormContext = createContext<PgFormContext>({} as PgFormContext);

export const PgFormContextProvider = ({ children }: PgFormContextProvider) => {
  const [addNewUserQueryData, setAddNewUserQueryData] = useState<GeneralQueryDataType[]>([{ pgCommandOpen: '', dataFields: ['', '', ''], pgCommandClose: '' }]);

  return (
    <PgFormContext.Provider value={{ addNewUserQueryData, setAddNewUserQueryData }}>
      {children}
    </PgFormContext.Provider>
  );
};
