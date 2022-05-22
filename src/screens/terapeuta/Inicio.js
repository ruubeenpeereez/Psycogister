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
import { TextInput, Button } from "react-native-paper";

import Add from "./AddPaciente";
import CardPaciente from "./CardPaciente";
//import Information from "./Information";

const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    background: "#f4f6fc",
    greyish: "#a4a4a4",
    tint: "#2b49c3",
    pink: "#D16BA5"
}

const image = require("../../assets/design/background.jpg");

const Inicio = ({ route, navigation }) => {

    const isFocused = useIsFocused();

    const { IdAssistant } = route.params;

    const [pacientes, setPacientes] = React.useState([]);

    useEffect(() => {
        // write your code here, it's like componentWillMount

        if (isFocused) {
            obtenerPacientes();
        }

    }, [navigation, isFocused])

    const obtenerPacientes = async () => {
        const resultInser = await axios.post('http:51.137.86.80:5000/test?', { op: "login2", id: IdAssistant })

        console.log(resultInser.data);

        setPacientes(resultInser.data.array);

        //console.log(pacientes);

        //setPacientes(resultInser.data.array);

    }


    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.bgImage} resizeMode="cover">


                <View style={styles.headercontext}>
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
                            return (<CardPaciente key={pos} id={element.IdDependents} name={element.Nombre} lastName={element.Apellidos} diseases={element.Diagnostico} tel={element.telefono}
                                age={element.Edad} IdAssistant={IdAssistant}></CardPaciente>);

                            
                        })}
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.contbtn} onPress={() => navigation.navigate('AddPaciente', {IdAssistant: IdAssistant,})} >
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
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'relative',
        top: 30,
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
    contimg: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.white,
        position: 'relative',
        left: 300,
        bottom: 38,
        borderRadius: 100
    },
    logo: {
        height: 58,
        width: 52,
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
    footer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
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
        height: 40,
        width: 40
    }
});

export default Inicio;