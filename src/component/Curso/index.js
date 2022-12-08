import { StyleSheet, Text, View, Image } from 'react-native';
import { List, ProgressBar } from 'react-native-paper';

const Curso = ({ item }) => {
    return (
        <View>

            <List.Accordion
                style={styles.cursoAcordeao}
                title={<Text style={styles.cursoTitulo}>{item.nome}</Text>}
                description={<ProgressBar style={styles.cursoBarra} progress={0.6} color="#004587" />}
                left={props => <Image style={styles.cursoImagem} source={require('C:/Users/user/Documents/DashboardMob/assets/cpp.png')} />}
            >

                <List.Item
                    style={styles.cursoItem}
                    title={props => <Text style={styles.cursoNome}>Faltas</Text>}
                    description={props => <Text style={styles.cursoDesc}>3</Text>}
                    left={props => <List.Icon color={'#000000'} icon="book-off" />}
                />
                <List.Item
                    style={styles.cursoItem}
                    title={props => <Text style={styles.cursoNome}>Material mais recente</Text>}
                    description={props => <Text style={styles.cursoDesc}>Classes Java</Text>}
                    left={props => <List.Icon color={'#000000'} icon="book-clock" />}
                />
                <List.Item
                    style={styles.cursoItem}
                    title={props => <Text style={styles.cursoNome}>Tarefa mais recente</Text>}
                    description={props => <Text style={styles.cursoDesc}>Criar uma classe</Text>}
                    left={props => <List.Icon color={'#000000'} icon="calendar-clock" />}
                />

            </List.Accordion>

        </View>
    );
}


const styles = StyleSheet.create({
    cursoAcordeao: {
        backgroundColor: '#ffffff',
        padding: 0,
        paddingRight: 16,
    },
    cursoItem: {
        backgroundColor: "#eef5f9",
        paddingLeft: '7.5%',
    },
    cursoNome: {
        fontSize: 14,
    },
    cursoDesc: {
        fontSize: 12,
        color: '#111111'
    },
    cursoImagem: {
        width: 40,
        height: 40,
        margin: 16,
        resizeMode: 'contain',
    },
    cursoTitulo: {
        //fontWeight: 500,
        fontSize: 14,
    },
    cursoBarra: {
        width: 200,
        borderRadius: 100,
    }
});

export {
    Curso, styles
}  