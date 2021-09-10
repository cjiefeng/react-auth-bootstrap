import React from 'react';
import history from '../../history';

const Protect = () => {
  console.log(localStorage)
  if (!localStorage.getItem('authToken')) {
    history.push('/')
  } 

  return (
    <div>
      <h1>Protect</h1>
    </div>
  )
}

export default Protect;
