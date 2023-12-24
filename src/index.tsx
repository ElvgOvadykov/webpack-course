import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { LazyAbout } from '@/pages/About';
import { LazyShop } from '@/pages/Shop';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* Используем lazy версию компонента это помогает оптимизировать загрузки чанков */}
            {/* Примечание: если необходимо использование React.lazy нельзя экспортировать 
            и/или использовать не lazy версию компонента. */}
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: '/shop',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyShop />
          </Suspense>
          // <Shop />
        ),
      },
    ],
  },
]);

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
