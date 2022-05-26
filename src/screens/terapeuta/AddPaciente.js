import React from "react";
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
    Alert,
} from 'react-native';

import axios from "axios";
import { Chip, RadioButton, TextInput, Button } from 'react-native-paper';


const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    background: "#f4f6fc",
    greyish: "#a4a4a4",
    tint: "#2b49c3"
}

const AddPaciente = ({ route, navigation }) => {

    const { IdTerapeuta } = route.params;

    const [Nombre, setNombre] = React.useState("");
    const [Apellidos, setApellidos] = React.useState("");
    const [Edad, setEdad] = React.useState();
    const [Telefono, setTelefono] = React.useState("");
    const [Diagnostico, setDiagnostico] = React.useState("");
    const [Observaciones, setObservaciones] = React.useState("");

    function validar() {
        if (Nombre.length == 0 &&
            Apellidos.length == 0 &&
            Telefono.length == 0 &&
            Diagnostico.length == 0 &&
            Observaciones.length == 0) {
            Alert.alert("Error", "All fields are empty", [
                { text: "Ok", onPress: () => console.log("error") }
            ]);
            return false;
        } else {
            if (Nombre.length == 0) {
                Alert.alert("Error", "Name field is empty", [
                    { text: "Ok", onPress: () => console.log("error") }
                ]);
                return false;
            } else {
                if (Apellidos.length == 0) {
                    Alert.alert("Error", "Last Name field is empty", [
                        { text: "Ok", onPress: () => console.log("error") }
                    ]);
                    return false;
                } else {
                    if (Edad.length == 0) {
                        Alert.alert("Error", "Age field incorrect", [
                            { text: "Ok", onPress: () => console.log("error") }
                        ]);
                        return false;
                    } else {
                        if (Telefono.length == 0) {
                            Alert.alert("Error", "Phone field is empty", [
                                { text: "Ok", onPress: () => console.log("error") }
                            ]);
                            return false;
                        } else {
                            if (Diagnostico.length == 0) {
                                Alert.alert("Error", "Diseases field is empty", [
                                    { text: "Ok", onPress: () => console.log("error") }
                                ]);
                                return false;
                            } else {
                                if (Observaciones.length == 0) {
                                    Alert.alert("Error", "Diseases field is empty", [
                                        { text: "Ok", onPress: () => console.log("error") }
                                    ]);
                                    return false;
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    const postDatos = async () => {

        const resultInser = await axios.post('http:51.137.86.80:5000/test?', {
            op: "Add", idTerapeuta: IdTerapeuta, name: Nombre, lastName: Apellidos, age: Edad, tel: Telefono,
            diagnostico: Diagnostico, observaciones: Observaciones,
        })

        console.log(resultInser.data);
        //setDatos(response.data);

        return resultInser;

    }

    const addPerson = async () => {
        //if (validar()) {
            console.log(IdTerapeuta + " a");
            const resultat = await postDatos()

            if (resultat.data.correct === "OK") {

                Alert.alert("Added", "Person added correctly")
                navigation.navigate("Inicio", { IdTerapeuta: IdTerapeuta})

            } else {

                resultat.log("Datos no es OK");

            }
        //}
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.tint} />
            <View style={styles.content}>
                <Image
                    source={require('../../assets/design/LogoRecortado.png')}
                    style={styles.imagen}
                />
                <Text style={{ fontSize: 25, color: colors.themeColor, alignSelf: "center" }}>
                    Añadir Paciente
                </Text>
                <ScrollView >
                    <View>
                        <TextInput
                            outlineColor={colors.themeColor}
                            placeholder='Nombre'
                            style={styles.box}
                            label='Nombre'
                            mode='outlined'
                            value={Nombre}
                            onChangeText={Nombre => setNombre(Nombre)}
                            theme={{ colors: { primary: colors.themeColor } }}
                        />
                        <TextInput
                            outlineColor={colors.themeColor}
                            placeholder='Apellidos'
                            style={styles.box}
                            mode='outlined'
                            label='Apellidos'
                            value={Apellidos}
                            onChangeText={Apellidos => setApellidos(Apellidos)}
                            theme={{ colors: { primary: colors.themeColor } }}
                        />
                        <TextInput
                            outlineColor={colors.themeColor}
                            placeholder='Edad'
                            keyboardType='numeric'
                            style={styles.box}
                            mode='outlined'
                            label='Edad'
                            value={Edad}
                            onChangeText={Edad => setEdad(Edad)}
                            theme={{ colors: { primary: colors.themeColor } }}
                        />
                        <TextInput
                            outlineColor={colors.themeColor}
                            placeholder='Telefono'
                            maxLength={9}
                            style={styles.box}
                            label='Telefono'
                            keyboardType='numeric'
                            mode='outlined'
                            value={Telefono}
                            onChangeText={Telefono => setTelefono(Telefono)}
                            theme={{ colors: { primary: colors.themeColor } }}
                        />
                        <TextInput
                            outlineColor={colors.themeColor}
                            placeholder='Diagnostico'
                            style={styles.box}
                            label='Diagnostico'
                            mode='outlined'
                            value={Diagnostico}
                            onChangeText={Diagnostico => setDiagnostico(Diagnostico)}
                            theme={{ colors: { primary: colors.themeColor } }}
                        />
                        <TextInput
                            outlineColor={colors.themeColor}
                            placeholder='Observaciones'
                            style={{width:250, alignSelf:'center'}}
                            label='Observaciones'
                            numberOfLines={5}
                            multiline
                            mode='outlined'
                            value={Observaciones}
                            onChangeText={Observaciones => setObservaciones(Observaciones)}
                            theme={{ colors: { primary: colors.themeColor } }}
                        />

                        <Button
                            mode='contained'
                            color={colors.themeColor}
                            style={{ width: "65%", alignSelf: "center", margin: 20 }}
                            onPress={() => addPerson()}
                            labelStyle={{ color: 'white' }}
                        >
                            Añadir
                        </Button>
                    </View>
                </ScrollView>
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
    content: {
        flex: 0.8,
        width: '90%',
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'center'
    },
    chips: {
        marginTop: 15,
    },
    imagen: {
        height: 120,
        width: 150,
    },
    box: {
        height: 40,
        margin: 10,
        width: 250,
    },
    subtext: {
        fontSize: 12,
        color: "#666",
        margin: 20,
    }
});

export default AddPaciente;