import { StyleSheet, Text, View } from 'react-native';

const Titulo = (props) => {
    var texto = props.texto;
    return (
        <View style={styles.titulo}>

            <Text style={styles.tituloTexto}>{texto}</Text>

        </View>
    );
}

const styles = StyleSheet.create({

    titulo: {
        justifyContent: 'center',
        height: 88,
        marginLeft: 32,
        //fontWeight: 500,
    },
    tituloTexto: {
        fontSize: 24,
    }
});

export {
    Titulo, styles
} 