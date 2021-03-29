import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Dashboard from 'pages/Dashboard';
import { useState } from 'react';

const queryClient = new QueryClient();

const App = () => {
  const [country, getCountry] = useState('Brazil');

  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard country={country} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
