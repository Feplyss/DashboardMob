import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { List, ProgressBar, Appbar } from 'react-native-paper';
import { Cursos } from './Cursos';

export default function App() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/UnidadeCurricular");
    const data = await resp.json();
    setData(data);
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  const Title = (props) => {
    var text = props.text;
    return (
      <View>
  
        <Text style={styles.title}>{text}</Text>
  
      </View>
    );
  }
  
  const Badge = (props) => {
    var curso = props.curso;
    return (
      <View>
  
        <View style={styles.badge}><Image style={styles.badgeImagem} source={curso.imagem} /></View>
  
      </View>
    );
  }
  
  const Curso = ({item}) => {
    return (
      <View>
  
        <List.Accordion
          style={styles.cursoAcordeao}
          title={<Text style={styles.cursoTitulo}>{item.nome}</Text>}
          description={<ProgressBar style={styles.cursoBarra} progress={0.6} color={item.cor} />}
          left={props => <Image style={styles.cursoImagem} source={item.imagem} />}
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

  const Texto = ({item}) => (
    <Text>{item.nome}</Text>
  )

  return (
    <SafeAreaView style={styles.container}>

      <Appbar.Header style={styles.header}>
        <Image style={styles.menuIcon} source={require("./assets/menu.png")} />
        <Image style={styles.logo} source={require("./assets/senac.png")} />
        <Image style={styles.user} source={require("./assets/user.png")} />
      </Appbar.Header>

      <Title text='Badges' />

      <View style={styles.badgeArea}>
        <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>

          <Badge curso={Cursos.java} />
          <Badge curso={Cursos.sql} />
          <Badge curso={Cursos.nodejs} />
          <Badge curso={Cursos.python} />
          <Badge curso={Cursos.cpp} />

        </ScrollView>
      </View>

      <Title text='Cursos' />

      <FlatList
        data={data}
        renderItem={Curso}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'scroll',
  },
  header: {
    backgroundColor: '#004587',
    height: 64,
    alignItems: 'center',
  },
  menuIcon: {
    width: 32,
    height: 32,
    marginLeft: 16,
    marginRight: 16,
  },
  logo: {
    width: 80,
    height: 48,
    marginRight: 16,
    resizeMode: 'contain',
  },
  user: {
    width: 32,
    height: 40,
    marginRight: 20,
    marginLeft: 'auto',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginTop: 32,
    marginBottom: 32,
    marginLeft: 32,
    //fontWeight: 500,
  },
  scroll: {
    paddingRight: 32,
  },
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
  },
  headerTitle: {
    color: '#ffffff',
  },
  cursoAcordeao: {
    backgroundColor: '#ffffff',
    padding: 0,
    paddingRight: 16,
  },
  cursoItem: {
    backgroundColor: "#eef5f9",
    paddingLeft: '5%',
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
    marginBottom: 8,
    fontSize: 14,
    marginBottom: '1%',
  },
  cursoBarra: {
    width: 200,
    marginRight: 24,
    borderRadius: 100,
  }
});