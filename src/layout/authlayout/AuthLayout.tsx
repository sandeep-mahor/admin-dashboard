import React from 'react';
import AuthHeader from '../AuthHeader';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div>
      <AuthHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
