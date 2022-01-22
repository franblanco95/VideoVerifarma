import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import MainNavigator from './navigation/mainNavigator';
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
