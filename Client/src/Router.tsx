import { createHashRouter } from 'react-router';
import App from './App';

export const router = createHashRouter([{
  path: '/',
  element: <App />,
  children: [
    { index: true,          lazy: () => import('./pages/Home') },
    { path: 'leadership',   lazy: () => import('./pages/Leadership') },
    { path: 'our-legacy', lazy: () => import('./pages/OurLegacy') },
  ],
}]);