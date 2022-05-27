import React, { useEffect } from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Alert
} from 'react-native';

import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    background: "#f4f6fc",
}



const CardPaciente = (props) => {
    const navigation = useNavigation();

    const imgPaciente = require('../../assets/design/fotoPaciente.png');
    const [img, setImg] = React.useState(imgPaciente);

    const [dis, setDisplay] = React.useState("flex");


    const postDelete = async () => {

        const resultInser = await axios.post('http:51.137.86.80:5000/test?', { op: "delete", id: props.id, idUsuario: props.idUsuario })

        console.log(resultInser.data);


        return resultInser.data;

    }

    const deleteFinal = async () => {

        const resultat = await postDelete();

        const { correct } = resultat;
        if (correct === "OK") {
            setDisplay("none");
            Alert.alert("Borrar", "Se ha eliminado al paciente");

        } else {

            Alert.alert("Error", "No se ha podido eliminar")

        }
    }

    const del = () => {

        Alert.alert("Borrar", "Estas seguro de que quieres eliminar al paciente", [
            {
                text: "Cancel",
            },
            { text: "OK", onPress: () => deleteFinal() }
        ])



    }


    return (
        <View style={{
            height: 180,
            borderWidth: 3,
            borderColor: "#18559d",
            width: 320,
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginBottom: 50,
            marginTop: 50,
            display: dis,
        }}>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <View style={{
                flex: 0.6,
                width: '100%',
                backgroundColor: colors.white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.8
            }}>

            </View>
            <View style={styles.body}>
                <Image
                    source={img}
                    style={styles.img}
                />
                <Text style={styles.h1}>{props.name}</Text>
                <Text style={styles.h2}>{props.lastName}</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('InfoPaciente', {
                    id: props.id,
                    IdTerapeuta: props.IdTerapeuta,
                    tel: props.tel,
                    age: props.age,
                    diagnostico: props.diagnostico,
                    name: props.name,
                    lastName: props.lastName,
                    observaciones: props.observaciones,
                })}>
                    <Text style={styles.btntext1}>Detalles</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => del()}>
                    <Image
                        source={require('../../assets/design/papelera.png')}
                        style={styles.bin}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    img: {
        height: 58,
        width: 58,
        position: 'relative',
        right: 100,
        top: 40
    },
    h1: {
        fontSize: 18,
        color: '#444',
        fontWeight: '300',
        position: 'relative',
        right: 20,
        bottom: 15
    },
    h2: {
        fontSize: 19,
        color: '#444',
        fontWeight: '300',
        position: 'relative',
        bottom: 15,
        right: 20,
    },
    body: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 3,
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btn2: {
        height: 45,
        width: 45,
        backgroundColor: colors.background,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
        left: 25
    },
    btntext1: {
        fontSize: 17,
        fontWeight: '600',
        color: "black",
    },
    bin: {
        height: 27,
        width: 27
    }
});


export default CardPaciente;