import React from 'react'
import Login from '../pages/auth/Login'
import AuthHeader from './components/AuthHeader'

const AuthLaout: React.FC = () => {
  return (
    <div>
      <AuthHeader/>
      <Login/>
    </div>
  )
}

export default AuthLaout
