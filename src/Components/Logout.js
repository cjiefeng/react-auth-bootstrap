import React from 'react';
import { GoogleLogout } from 'react-google-login';
import history from '../history';

require('dotenv').config();

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Logout() {
  const onSuccess = () => {
    localStorage.clear();
    history.push('/')
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;