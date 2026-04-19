import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { lazy } from 'react';

const LazyHome = lazy(() => import('./pages/Home.tsx'));
const LazyLeadership = lazy(() => import('./pages/Leadership.tsx'));

const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            element: <LazyHome />
         },
         {
            path: 'leadership',
            element: <LazyLeadership />
         }
    ]
} ])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
