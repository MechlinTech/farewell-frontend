import { useEffect } from 'react';
import { Provider } from 'react-redux';
import Orientation from 'react-native-orientation-locker';
import store from '@redux/store';
import React = require('react');
import InnerApp from 'screens/InnerApp';
import HeadingGroup from 'components/HeadingGroupComponent';

const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait(); // 🔒 Portrait only
    return () => Orientation.unlockAllOrientations();
  }, []);
  return (
    <Provider store={store}>
      <InnerApp />
    </Provider>
  );
};

export default App;
