import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Providers from './contexts';
import Routes from './routes';

export default function App() {
  return (
    <Providers>
      <StatusBar style="light" backgroundColor='#132440' />
      <Routes />
    </Providers>
  );
}
