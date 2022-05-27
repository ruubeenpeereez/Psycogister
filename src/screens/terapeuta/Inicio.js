import React, { useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { useIsFocused } from "@react-navigation/native";

import axios from "axios";

import CardPaciente from "./CardPaciente";

const colors = {
    background: "#f4f6fc",
}

const image = require("../../assets/design/background.jpg");

const Inicio = ({ route, navigation }) => {

    const isFocused = useIsFocused();

    const { IdTerapeuta } = route.params;

    const [pacientes, setPacientes] = React.useState([]);

    useEffect(() => {

        if (isFocused) {
            obtenerPacientes();
        }

    }, [navigation, isFocused])

    const obtenerPacientes = async () => {
        const resultInser = await axios.post('http:51.137.86.80:5000/test?', { op: "login2", id: IdTerapeuta })

        console.log(resultInser.data);

        setPacientes(resultInser.data.array);

    }


    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.bgImage} resizeMode="cover">


                <View style={styles.headercontext}>
                    <TouchableOpacity style={styles.logOut} onPress={() => navigation.navigate('Login')} >
                        <Image
                            style={styles.imgOut}
                            source={require('../../assets/design/iconLogOut.png')}
                        />
                    </TouchableOpacity>
                    <Image
                        style={styles.img}
                        source={require('../../assets/design/LogoRecortado.png')}
                    />
                    <Text style={styles.h2}>
                        Pacientes
                    </Text>

                </View>

                <View style={styles.content}>
                    <ScrollView>

                        {pacientes.map((element, pos) => {
                            console.log(element);
                            return (<CardPaciente key={pos} id={element.Id} name={element.Nombre} lastName={element.Apellidos} diagnostico={element.Diagnostico} tel={element.Telefono}
                                age={element.Edad} idUsuario={element.IdUsuario} observaciones={element.Observaciones} IdTerapeuta={IdTerapeuta}></CardPaciente>);
                        })}
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.contbtn} onPress={() => navigation.navigate('AddPaciente', { IdTerapeuta: IdTerapeuta })} >
                    <Image
                        style={styles.imgbtn}
                        source={require('../../assets/design/Add.png')}
                    />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logOut: {
        left: 10,
        top: 50,
    },
    imgOut:{
        height:30,
        width:30,
    },
    bgImage: {
        height: "100%",
        width: "100%",
    },
    img: {
        height: 120,
        width: 180,
        position: 'relative',
        top: 30,
        left: 85
    },
    headercontext: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'relative',
        top: 0,
        flexDirection: 'column'
    },
    h2: {
        fontSize: 40,
        margin: 25,
        fontWeight: '300',
        color: "#18559d",
        position: 'relative',
        left: 70
    },
    content: {
        flex: 5,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'relative',
        bottom: 5,
        top: 20,
        paddingBottom: 20
    },
    contbtn: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        position: 'absolute',
        bottom: 35,
        right: 30
    },
    imgbtn: {
        height: 60,
        width: 60
    }
});

export default Inicio;