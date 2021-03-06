import React from "react";
import { View, StyleSheet, Text, StatusBar, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';

import axios from "axios";

const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    tint: "#2b49c3"
}

const image = require("../../assets/design/background.jpg");
const logo = require("../../assets/design/Logo.png");


const Login = ({ navigation, route }) => {

    const [User, setUser] = React.useState("");
    const [Password, setPassword] = React.useState("");

    const postDatos = async () => {

        const resultInser = await axios.post('http:51.137.86.80:5000/test?', { op: "login", user: User, pass: Password })

        console.log(resultInser.data);

        return resultInser.data;

    }

    const logIn = async () => {
        if (validar()) {
            const resultat = await postDatos();

            const { correct } = resultat;
            const { Rol } = resultat;
            if (correct === "OK") {
                if (Rol == 1) {
                    setPassword("");
                    setUser("");
                    navigation.navigate('Inicio', {
                        IdTerapeuta: resultat.Id,
                    })
                }

            } else {
                Alert.alert("Error 404", "El nombre de usuario o la contraseña son incorrectos", [
                    { text: "Ok", onPress: () => console.log("error") }
                ]);
            }
        }
    }

    function validar() {
        if (User.length == 0 && Password.length == 0) {
            Alert.alert("Error", "Los campos estan vacios", [
                { text: "Ok", onPress: () => console.log("error") }
            ]);
            return false;
        } else {
            if (User.length == 0) {
                Alert.alert("Error", "El campo de usuarios esta vacio", [
                    { text: "Ok", onPress: () => console.log("error") }
                ]);
                return false;
            } else {
                if (Password.length == 0) {
                    Alert.alert("Error", "El campo de la contraseña esta vacio", [
                        { text: "Ok", onPress: () => console.log("error") }
                    ]);
                    return false;
                } else {
                    return true;
                }
            }
        }
    }



    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.bgImage} resizeMode="cover">
                <Image
                    style={styles.LogoImg}
                    source={logo}
                />

                <View style={styles.header}>
                    <Text style={styles.h1}>Inicio de Sesión</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.texti}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/design/user_Login.png')}
                        />
                        <TextInput
                            selectionColor={colors.themeColor}
                            outlineColor={colors.themeColor}
                            placeholder='Nombre de Usuario'
                            style={styles.box}
                            label='Nombre de Usuario'
                            mode='outlined'
                            value={User}
                            onChangeText={User => setUser(User)}
                            theme={{ colors: { primary: colors.tint } }}
                        />
                    </View>
                    <View style={styles.texti}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/design/Lock.png')}
                        />
                        <TextInput
                            selectionColor={colors.themeColor}
                            outlineColor={colors.themeColor}
                            placeholder='Contraseña'
                            style={styles.box}
                            label='Contraseña'
                            mode='outlined'
                            value={Password}
                            secureTextEntry={true}
                            onChangeText={Password => setPassword(Password)}
                            theme={{ colors: { primary: colors.tint } }}
                        />
                    </View>
                    <View style={styles.contbtn}>
                        <TouchableOpacity
                            activeOpacity={0.75}
                            style={styles.btnin}
                            onPress={() => logIn()}>
                            <Text style={styles.btninT}>Inicar Sesión</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.texti}>
                        <Image
                            style={styles.img}
                            source={require('')}
                        />
                        <TextInput
                            selectionColor={colors.themeColor}
                            outlineColor={colors.themeColor}
                            placeholder='Contraseña'
                            style={styles.box}
                            label='Contraseña'
                            mode='outlined'
                            value={Password}
                            onChangeText={Password => setPassword(Password)}
                            secureTextEntry={true}
                            theme={{ colors: { primary: colors.tint } }}
                        />
                    </View>
                </View>
                <View style={styles.contbtn}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.btnin}
                        onPress={() => logIn()}>
                        <Text style={styles.btninT}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.context}>
                    <Text style={{ color: "black" }}>Florida - DAM 2 - Psycogister - 2022©</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.tint,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LogoImg: {
        height: 200,
        alignSelf: 'center',
        width: 190,
        position: 'relative',
        zIndex: 2,
    },
    
    bgImage: {
        height: "100%",
        width: "100%",
    },
    header: {
        flex: 0.2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    texti: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
        position: 'relative',
        left: 30,
        color: '#18559d'
    },
    img: {
        height: 30,
        width: 30,
    },
    form: {
        flex: 0.7,
        flexDirection: 'column',
        width: '80%',
        alignItems: 'center',
        position: 'relative',
        left: 30
    },
    box: {
        height: 40,
        margin: 10,
        width: 250,
    },
    contbtn: {
        height: 150,
        width: '80%',
        top: 30,
        left: 0,
    },
    btnin: {
        height: 45,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.themeColor,
        borderRadius: 5
    },
    btninT: {
        fontSize: 16,
        color: colors.white,
        fontWeight: '300'
    },
});

export default Login;