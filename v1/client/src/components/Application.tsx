// react and eco.
import {
  useContext,
  useEffect,
} from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// page components.
import {
  Introduction,
  MongoDB,
  PostgreSQL,
} from '@pages';
// external packages.
import { library } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-solid-svg-icons';
library.add();

// initiates react-query with defaultOptions.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

// ** <Application> | component ** //
// the main application component that contains various application-wide setup settings as well as the application's routing.
const Application = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Navigate to={'/choose-database'} replace />} />
          <Route path={'/choose-database'} element={<Introduction />} />
          <Route path={'/db/mongodb'} element={<MongoDB />} />
          <Route path={'/db/postgresql'} element={<PostgreSQL />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default Application;
