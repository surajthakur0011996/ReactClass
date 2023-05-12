import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PublicRoutes from './routes/publicRoutes';
import AppLayout from './routes/layout';
import ProtectedERoutes from './routes/protctedRoutes';

import { lazy } from 'react';
import Tables from './views/tables';
import TablesDetail from './views/tables/TablesDetail';

const Loginpage = lazy(() => import("../src/views/login"));
const Registerpage = lazy(() => import("../src/views/register"));

const DashboardPage = lazy(() => import("../src/views/dashboard"));
const ButtonsPage = lazy(() => import("../src/views/buttons"));

function App() {
  return (
    <Routes>
      <Route path='' element={<PublicRoutes><AppLayout/></PublicRoutes>}>
        <Route path='/login' element={<Loginpage /> }></Route>
        <Route path='/register' element={<Registerpage /> }></Route>
      </Route>

      <Route path='' element={<ProtectedERoutes><AppLayout/></ProtectedERoutes>}>
        <Route path='/dashboard' element={<DashboardPage /> }></Route>
        <Route path='/buttons' element={<ButtonsPage /> }></Route>
        <Route path='/table' element={<Tables /> }></Route>
        <Route path='/tablesdetail/:id' element={<TablesDetail /> }></Route>
      </Route>
    </Routes>
  );
}

export default App;
