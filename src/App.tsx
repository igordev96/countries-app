import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  // { path: '*', Component: NotFound },
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
