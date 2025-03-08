import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConstRoute } from '../utils/Constant';
import DashboardLayout from '../layout/dashboardLayout/DashboardLayout';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import Profile from '../pages/admin/profile/Profile';
import Forms from '../pages/admin/forms/Forms';
import Charts from '../pages/admin/charts/Charts';
import Tables from '../pages/admin/tables/Tables';
import AuthLayout from '../layout/authLayout/AuthLayout';
import Login from '../pages/auth/login/Login';
import SignUp from '../pages/auth/signup/SignUP';
import ForgotPassword from '../pages/auth/forgotPassword/ForgotPassword';
import OtpVerification from '../pages/auth/otpVerification/OtpVerification';

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
      { path: ConstRoute.login, element: <Login /> },
      { path: ConstRoute.signup, element: <SignUp /> },
      { path: ConstRoute.otpverification, element: <OtpVerification /> },
      { path: ConstRoute.forgotpassword, element: <ForgotPassword /> },
    ],
  },
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

