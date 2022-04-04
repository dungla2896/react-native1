
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import { UserProvider } from './UserContext';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

export default function Main() {
  
  return (
    <UserProvider>
        <Provider store={store}>
          <App />
      </Provider>
    </UserProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
