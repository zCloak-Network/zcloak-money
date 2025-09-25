import React from 'react';
const Home = React.lazy(() => import('@/pages/home'));

const routeConfig = () => {
  return [
    {
      path: '',
      element: (
        <React.Suspense>
          <Home />
        </React.Suspense>
      ),
    }
  ]
}

export default routeConfig;