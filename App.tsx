import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from '@navigator';
import store from '@utils/store';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </Provider>
    </GestureHandlerRootView>
  );
}
