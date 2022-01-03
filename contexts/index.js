import React from 'react'
import { AuthorizationProvider } from './AuthorizationContext';

function Providers(props) {
  return (
    <AuthorizationProvider>
      {props.children}
    </AuthorizationProvider >
  );
}

export default Providers;