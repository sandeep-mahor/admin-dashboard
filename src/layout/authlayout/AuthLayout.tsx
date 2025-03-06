import React from 'react'
import Login from '../../pages/auth/login/Login'
import AuthHeader from '../../pages/auth/authheader/AuthHeader'

const AuthLaout: React.FC = () => {
  return (
    <div>
      <AuthHeader/>
      <Login/>
    </div>
  )
}

export default AuthLaout
