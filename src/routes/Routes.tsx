import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConstRoute } from '../utils/Constant';
import DashboardLayout from '../layout/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Forms from '../pages/Forms';
import Charts from '../pages/Charts';
import Tables from '../pages/Tables';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/auth/Login';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: ConstRoute.profile,
        element: <Profile />,
      },
      {
        path: ConstRoute.forms,
        element: <Forms />,
      },
      {
        path: ConstRoute.charts,
        element: <Charts />,
      },
      {
        path: ConstRoute.tables,
        element: <Tables />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout/>,
    children: [
      {
        path: ConstRoute.login,
        element: <Login />,
      },
    ],
      
  }
];

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map((child) => (
              <Route key={route.path} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
