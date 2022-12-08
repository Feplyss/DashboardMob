import { StyleSheet, Text, View, Image } from 'react-native';

const Perfil = (props) => {
    
    var img = props.img
    var texto = props.texto;
    return (
        <View style={styles.perfil}>

            <Image style={styles.foto} source={img}/>
            <Text style={styles.perfilTexto}>{texto}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    
    perfil: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 32,
        marginLeft: 32,
        //fontWeight: 500,
    },
    foto: {
        height: 88,
        width: 88,
        resizeMode: "contain",
    },
    perfilTexto: {
        marginLeft: 32,
        fontSize: 28,
    }
});

export {
    Perfil, styles
} 