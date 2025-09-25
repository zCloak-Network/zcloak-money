import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import '@@/scss/tailwind.scss';
import '@@/scss/index.scss';
import { observer } from 'mobx-react-lite';
import routeConfig from './routes';

const App = observer(() => {
  const ele = useRoutes(routeConfig() || []);
  return ele;
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 