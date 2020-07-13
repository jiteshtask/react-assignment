import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { userStore } from './store';
import MainRoutes from './routes/Routes';


const Main = () => (
  <Provider store={userStore}>
    <MainRoutes />
  </Provider>
);

render(<Main />, document.getElementById("app"));