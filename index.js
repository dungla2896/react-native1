
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import { UserProvider } from './UserContext';

export default function Main() {
  
  return (
      <UserProvider>
        <App />
      </UserProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
