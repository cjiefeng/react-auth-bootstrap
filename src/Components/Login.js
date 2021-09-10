import React from 'react';
import { GoogleLogin } from 'react-google-login';
import history from '../history';
import { refreshTokenSetup } from '../utils/refreshToken';

require('dotenv').config();

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  const onSuccess = (res) => {
    console.log(process.env.REACT_APP_BACKEND_ADDR)
    localStorage.setItem('authToken', res.tokenId);
    refreshTokenSetup(res);
    history.push('/protect')
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
