import React from 'react';

import Routes from "./src/routes";

const AuthContext = React.createContext();

export default function App() {
  return (
    <Routes />
  );
}
