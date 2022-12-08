import { StyleSheet, Text, View, Image } from 'react-native';

const Badge = (props) => {
    var curso = props.curso;
    return (
        <View>

            <View style={styles.badge}><Image style={styles.badgeImagem} source={curso.imagem} /></View>

        </View>
    );
}

const styles = StyleSheet.create({
    badgeArea: {
        flexDirection: "row",
        alignItems: 'center',
        width: '100%',
        height: 88,
    },
    badge: {
        width: 88,
        height: 88,
        borderRadius: 100,
        backgroundColor: "#d9c738",
        marginLeft: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeImagem: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain',
    }
});

export {
    Badge, styles
}  