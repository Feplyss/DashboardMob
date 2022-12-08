import { StyleSheet, Text, View } from 'react-native';

const Badge = ({ item }) => {
    return (
        <View>

            <View style={styles.badge}><Text style={styles.badgeTexto}>{item.descricao}</Text></View>

        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        width: 88,
        height: 88,
        borderRadius: 100,
        backgroundColor: "#d9c738",
        marginLeft: 16,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeTexto: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain',
        textAlign: 'center',
        fontSize: 14,
    }
});

export {
    Badge, styles
}  