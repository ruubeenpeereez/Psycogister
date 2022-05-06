/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Login } from './src/screens/login/login';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const logo = require("./src/assets/design/Logo.png");
const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}

function Landing({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Login')}
      activeOpacity={0.55}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <Image
        style={styles.img}
        source={logo}
      />
      <Text style={styles.h1}>Psycogister</Text>
    </TouchableOpacity>

  );
}

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 190,
    width: 280,
    margin: 50,
    position: 'relative',
    zIndex: 2,
    bottom: 80
  },
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
    position: 'relative',
    zIndex: 2,
    bottom: 120,
    color: colors.white
  },
});

export default App;