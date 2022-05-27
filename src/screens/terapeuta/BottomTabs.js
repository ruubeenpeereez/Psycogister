import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const colors = {
    background: "#f4f6fc",
}

const BottomTabs = ({}) => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.navs1}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Autorregistros')}>
                    <Image source={require("../../assets/design/Lista_icono.png")} style={styles.imagen3}></Image>
                    <Text style={styles.h1}>Autorregistros</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navs2}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.reset}>
                    <Image source={require("../../assets/design/iconoNavUser.png")} style={styles.imagen1}></Image>
                    <Text style={styles.h1}>Paciente</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navs3}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('InfoLinks')}>
                    <Image source={require("../../assets/design/iconInfoLinks.png")} style={styles.imagen2}></Image>
                    <Text style={styles.h1}>InfoLinks</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        flex:1,
        alignContent: "center",
    },
    navs1:{
        flex:1,
        justifyContent: "center",
        alignContent: "center",
    },
    navs2:{
        flex:1,
        justifyContent: "center",
        alignContent: "center",
    },
    navs3:{
        flex:1,
        justifyContent: "flex-start",
        alignContent: "center",
    },
    imagen1: {
        alignSelf:'center',
        height: 40,
        width: 40,
    },
    imagen2: {
        alignSelf:'center',
        height: 50,
        width: 50,
    },
    imagen3: {
        alignSelf:'center',
        height: 40,
        width: 40,
    },
    h1: {
        textAlign:'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.white,
    },
});

export default BottomTabs;