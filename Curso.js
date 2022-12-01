import { Text, View, Image } from 'react-native';
import { List, ProgressBar } from 'react-native-paper';

const Curso = (props) => {
    var curso = props.curso;
    return (
      <View>
  
        <List.Accordion
          style={styles.cursoAcordeao}
          title={<View><Text style={styles.cursoTitulo}>{curso.nome}</Text> <ProgressBar style={styles.cursoBarra} ProgressBar progress={0.6} color={curso.cor} /></View>}
          left={props => <Image style={styles.cursoImagem} source={curso.imagem} />}
        >
  
          <List.Item
            style={styles.cursoItem}
            title={props => <Text style={styles.cursoNome}>Faltas</Text>}
            description={props => <Text style={styles.cursoDesc}>3</Text>}
            left={props => <List.Icon color={'#000000'} icon="book-off" />}
          />
          <List.Item
            style={styles.cursoItem}
            title={props => <Text style={styles.cursoNome}>Aula mais recente</Text>}
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

  export { Curso };