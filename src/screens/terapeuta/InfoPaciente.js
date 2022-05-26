import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity, ImageBackground
} from 'react-native';


const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    background: "#f4f6fc",
    greyish: "#a4a4a4",
    tint: "#2b49c3",
    fadedwhite: "#E0E1E4"
}

const image = require("../../assets/design/background.jpg");

import BottomTabs from "./BottomTabs";

const InfoPaciente = ({ route, navigation }) => {

    const { id, tel, age, name, lastName, diagnostico, observaciones, IdTerapeuta } = route.params;

    const [ColorText, setColorText] = React.useState(colors.greyish);
    const [textColor, setTextColor] = useState(colors.white);
    const [selected, setSelected] = useState(false);
    const [style, setStyle] = useState({
        borderColor: colors.fadedwhite,
        backgroundColor: colors.background
    });

    useEffect(() => {
        if (selected) {
            setTextColor(colors.white);
            setStyle({ borderColor: colors.themeColor, backgroundColor: colors.white });
        } else {
            setTextColor(colors.themeColor);
            setStyle({ borderColor: colors.themeColor, backgroundColor: 'transparent' });
        }
    }, [selected]);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.bgImage} resizeMode="cover">

                <View style={styles.header}>
                    <Image
                        source={require('../../assets/design/LogoRecortado.png')}
                        style={styles.imagen}
                    />
                    <Text style={styles.h1}>
                        {name} {lastName}
                    </Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.header1}>
                        <Text style={styles.h2}>
                            Informacion Detallada
                        </Text>
                    </View>
                    <View style={styles.body1}>
                        <View style={styles.texti}>
                            <Image
                                source={require('../../assets/design/tel.png')}
                                style={styles.img}
                            />
                            <Text style={styles.text}>
                                Telefono:
                            </Text>
                            <Text style={{ color: '#444' }}>
                                {tel}
                            </Text>
                        </View>
                        <View style={styles.texti}>
                            <Image
                                source={require('../../assets/design/user_Login.png')}
                                style={styles.img}
                            />
                            <Text style={styles.text}>
                                Edad:
                            </Text>
                            <Text style={{ color: '#444' }}>
                                {age}
                            </Text>
                        </View>
                        <View style={styles.texti}>
                            <Image
                                source={require('../../assets/design/brain.png')}
                                style={styles.img}
                            />
                            <Text style={styles.text}>
                                Diagnostico:
                            </Text>
                            <Text style={{ color: '#444' }}>
                                {diagnostico}
                            </Text>
                        </View>
                        <View style={styles.texti}>
                            <Image
                                source={require('../../assets/design/lupa.png')}
                                style={styles.img}
                            />
                            <Text style={styles.text}>
                                Observaciones:
                            </Text>
                        </View>
                        <View style={styles.texti}>
                            <Text style={{ color: '#444', flexShrink: 1, right:20 }}>{observaciones}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.tabs}>
                    <BottomTabs />
                </View>
            </ImageBackground>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgImage: {
        height: "100%",
        width: "100%",
    },
    header: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imagen: {
        height: 70,
        width: 90,
    },
    h1: {
        fontSize: 30,
        fontWeight: '600',
        color: "black",
    },
    tabs: {
        backgroundColor: "#18559d",
        borderRadius: 15,
        flex: 1,
        width: "100%",
        bottom: 0,
    },
    footer: {
        flex: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contbtn: {
        height: 60,
        width: 60,
        backgroundColor: colors.themeColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        position: 'absolute',
        bottom: 35,
        right: 30
    },
    imgbtn: {
        height: 40,
        width: 40
    },
    content: {
        height: 400,
        width: 330,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        position: 'relative',
        bottom: 220,
        borderRadius: 30,
        padding: 10,
    },
    texti: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        left: 30,
    },
    text: {
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5,
        color: '#444'
    },
    img: {
        height: 20,
        width: 20,
    },
    wrapper: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    header1: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    h2: {
        fontSize: 24,
        fontWeight: '600',
        color: '#141414',
    },
    body1: {
        flex: 3,
        width: '100%',
        paddingTop: 10,
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    footer1: {
        flex: 1,
        width: '100%',
        paddingTop: 10,
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
});

export default InfoPaciente;