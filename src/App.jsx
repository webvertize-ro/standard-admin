import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Requests from './pages/Requests';
import AppLayout from './components/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import Admin from './pages/Admin';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/requests" element={<Requests />} />
              <Route path="/admin" element={<Admin />} />
            </Route>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
