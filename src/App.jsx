import { QueryClientProvider, QueryClient } from 'react-query';

import Dashboard from 'pages/Dashboard';
import Footer from 'components/Footer';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
