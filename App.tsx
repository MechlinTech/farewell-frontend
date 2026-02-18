import * as React from 'react';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import Orientation from 'react-native-orientation-locker';
import store from '@redux/store';
import InnerApp from 'screens/InnerApp';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait(); // 🔒 Portrait only
    return () => Orientation.unlockAllOrientations();
  }, []);
  return (
    <Provider store={store}>
           <SafeAreaProvider>
      <InnerApp />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
