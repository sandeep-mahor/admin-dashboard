import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConstRoute } from '../utils/Constant';
import DashboardLayout from '../layout/dashboardlayout/DashboardLayout';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import Profile from '../pages/admin/profile/Profile';
import Forms from '../pages/admin/forms/Forms';
import Charts from '../pages/admin/charts/Charts';
import Tables from '../pages/admin/tables/Tables';
import AuthLayout from '../layout/authlayout/AuthLayout';
import Login from '../pages/auth/login/Login';
import SignUp from '../pages/auth/signup/SignUP';
import OtpVarification from '../pages/auth/OtpVarification/OtpVarification';
import ForgotPassword from '../pages/auth/forgotpassword/ForgotPassword';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: ConstRoute.profile, element: <Profile /> },
      { path: ConstRoute.forms, element: <Forms /> },
      { path: ConstRoute.charts, element: <Charts /> },
      { path: ConstRoute.tables, element: <Tables /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      
    ],
  },
  { path: 'signup', element: <SignUp /> },
  { path: 'otp-varification', element: <OtpVarification /> },
  { path: 'forgot-password', element: <ForgotPassword /> },
];

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map((child, index) =>
              child.index ? (
                <Route key={`index-${index}`} index element={child.element} />
              ) : (
                <Route key={child.path} path={child.path} element={child.element} />
              )
            )}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
