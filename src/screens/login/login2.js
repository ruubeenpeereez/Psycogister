import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert} from 'react-native';

import React from 'react';

import axios from "axios";
import { TextInput } from "react-native-paper";


const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    background: "#f4f6fc",
    greyish: "#a4a4a4",
    tint: "#2b49c3"
}

const Login2 = ({ navigation, route }) => {

    const [User, setUser] = React.useState("");
    const [Password, setPassword] = React.useState("");

    const postDatos = async () => {

        const resultInser = await axios.post('', { op: "login", user: User, pass: Password })

        console.log(resultInser.data);

        //setDatos(response.data);

        return resultInser.data;

    }

    const logIn = async () => {
        if (validar()) {
            const resultat = await postDatos();

            const { correct } = resultat;
            if (correct === "OK") {
                navigation.navigate('IndexAssistant', {
                    User: resultat.User,
                    IdAssistant: resultat.IdAssistant,
                    Gender: resultat.Gender,
                    Mail: resultat.Email,
                })
            } else {
                Alert.alert("Error 404", "The account could not be found", [
                    { text: "Ok", onPress: () => console.log("error") }
                ]);
            }
        }
    }

    function validar() {
        if (User.length == 0 && Password.length == 0) {
            Alert.alert("Error", "All fields are empty", [
                { text: "Ok", onPress: () => console.log("error") }
            ]);
            return false;
        } else {
            if (User.length == 0) {
                Alert.alert("Error", "The user field is empty", [
                    { text: "Ok", onPress: () => console.log("error") }
                ]);
                return false;
            } else {
                if (Password.length == 0) {
                    Alert.alert("Error", "The password field is empty", [
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
            <StatusBar barStyle="light-content" backgroundColor={colors.tint} />
            <View style={styles.header}>
                <Text style={styles.h1}>¡Welcome to DailySense! </Text>
            </View>
            <View style={styles.content}>
                <View style={styles.form}>
                    <View style={styles.texti}>
                        <Image
                            style={styles.img}
                            source={require('')}
                        />
                        <TextInput
                            selectionColor={colors.themeColor}
                            outlineColor={colors.themeColor}
                            placeholder='Your Username goes here...'
                            style={styles.box}
                            label='Username'
                            mode='outlined'
                            value={User}
                            onChangeText={User => setUser(User)}
                            theme={{ colors: { primary: colors.tint } }}
                        />
                    </View>

                    <View style={styles.texti}>
                        <Image
                            style={styles.img}
                            source={require('')}
                        />
                        <TextInput
                            selectionColor={colors.themeColor}
                            outlineColor={colors.themeColor}
                            placeholder='Your Password goes here...'
                            style={styles.box}
                            label='Password'
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
                        <Text style={styles.btninT}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.btnout}
                        onPress={() => navigation.navigate('CreateAccount')}>
                        <Text style={styles.btnoutT}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.context}>
                    <Text style={{ color: "black" }}>Florida - DAM 2 - DailySense - 2022©</Text>
                </View>
            </View>
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
    header: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    texti: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
        position: 'relative',
        left: 30,
        color: colors.white
    },
    img: {
        height: 20,
        width: 20,
    },
    content: {
        flex: 3,
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 40,
        position: 'relative',
        top: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flex: 0.3,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 20
    },
    box: {
        height: 40,
        margin: 10,
        width: 250,
    },
    contbtn: {
        height: 150,
        width: '80%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'relative',
        top: 20,
        left: 10,
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
    btnout: {
        height: 45,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: colors.themeColor,
        borderWidth: 1,
    },
    btnoutT: {
        fontSize: 16,
        color: colors.themeColor,
        fontWeight: '300'
    },
    context: {
        height: 20,
        position: 'relative',
        top: 80
    },
});

export default Login2;