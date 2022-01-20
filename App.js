import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './navigation/mainNavigator';

export default function App() {
  return (
    <>
      <MainNavigator />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});
