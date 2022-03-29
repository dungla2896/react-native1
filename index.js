/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './src/App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';

export default function Main() {
  return (
      <App />
  );
}

AppRegistry.registerComponent(appName, () => Main);
