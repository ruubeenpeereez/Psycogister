import * as React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';

const image = require("../../assets/design/background.jpg");

const logo = require("../../assets/design/Logo.png");

const InfoLinks = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.bgImage} resizeMode="cover">
                <Image
                    style={styles.img}
                    source={logo}
                />
                <Text style={styles.h1}>PAGINA EN DESARROLLO</Text>
            </ImageBackground>
        </View>
    );
}

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
    h1: {
        textAlign:"center",
        fontSize: 33,
        fontWeight: 'bold',
        color:"black",
    },
});

export default InfoLinks;