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

import Login from './src/screens/login/login';
import Inicio from './src/screens/terapeuta/Inicio';
import AddPaciente from './src/screens/terapeuta/AddPaciente';
import InfoPaciente from './src/screens/terapeuta/InfoPaciente';
import Autorregistros from './src/screens/terapeuta/Autorregistros';
import InfoLinks from './src/screens/terapeuta/InfoLinks';


import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

const logo = require("./src/assets/design/Logo.png");
const colors = {
  themeColor: "#4263ec",
  white: "#fff",
}

const image = { uri: "https://t3.ftcdn.net/jpg/01/04/00/12/360_F_104001210_V2Q2d2u5xVT5Ay8Afgp51c6vJIeFlqy6.jpg" };

function Landing({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Login')}
      activeOpacity={0.55}
    >
      <ImageBackground source={image} style={styles.bgImage} resizeMode="cover">

        <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
        <Image
          style={styles.img}
          source={logo}
        />
      </ImageBackground>
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
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="AddPaciente" component={AddPaciente} />
          <Stack.Screen name="InfoPaciente" component={InfoPaciente} />
          <Stack.Screen name="Autorregistros" component={Autorregistros} />
          <Stack.Screen name="InfoLinks" component={InfoLinks} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  img: {
    height: 290,
    width: 280,
    margin: 35,
    position: 'relative',
    zIndex: 2,
    bottom: 80
  },
});

export default App;