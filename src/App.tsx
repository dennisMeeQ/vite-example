import { BrowserRouter, Route, Routes as DomRoutes } from 'react-router-dom';

import { Homepage } from '@/pages/Homepage';

export const App = () => {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path="/" element={<Homepage />}></Route>
      </DomRoutes>
    </BrowserRouter>
  );
};
