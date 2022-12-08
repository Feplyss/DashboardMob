import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Cursos } from './Cursos';
import { Curso } from './src/component/Curso'
import { Badge } from './src/component/Badge'
import { Titulo } from './src/component/Titulo'
import { fetchUnidadesCurriculares } from './src/service/UnidadeCurricular'
import { fetchEncontro } from './src/service/Encontro'
import { fetchSituacaoAprendizagem } from "./src/service/SituacaoAprendizagem";
import { fetchAtividade } from "./src/service/Atividade";



export default function App() {
  const [unidadeCurricular, setUnidadeCurricular] = useState([]);
  const [encontro, setEncontro] = useState([]);
  const [situacaoAprendizagem, setSituacaoAprendizagem] = useState([]);
  const [atividade, setAtividade] = useState([]);

  var idUsuario = '3b700ecc-cec9-4be4-8c00-48bced543861'

  useEffect(() => {
    const fetchData = async () => {
      var unidadesCurriculares = await fetchUnidadesCurriculares(idUsuario);
      setUnidadeCurricular(unidadesCurriculares);

      console.log("ucs " + unidadeCurricular);

      var listEncontro = [];

      unidadesCurriculares.forEach(async uc => {
        var encontro = await fetchEncontro(uc.id);
       listEncontro.push(encontro);
      });

      setEncontro(listEncontro);

      console.log("encontros " + encontro);

      var listSituacaoAprendizagem = [];
      
      encontro.forEach(async enc => {
        var situacoesAprendizagem = await fetchSituacaoAprendizagem(enc.id);
        listSituacaoAprendizagem.push(situacoesAprendizagem);
      });

      setSituacaoAprendizagem(listSituacaoAprendizagem);

      console.log("sas " + situacaoAprendizagem);

      var listAtividade = [];

      situacaoAprendizagem.forEach(async sa => {
        var atividades = await fetchAtividade(sa.id);
        listAtividade.push(atividades);
      });

      setAtividade(listAtividade);

      console.log("atividades " + atividade);
    }

    fetchData()
      .catch(console.error);
  }, []);

  // UCs.forEach(uc => {
  //   lstEncontro.push(fetchEncontro(uc.id))
  // });

  return (
    <SafeAreaView style={styles.container}>

      <Appbar.Header style={styles.header}>
        <Image style={styles.menuIcon} source={require("./assets/menu.png")} />
        <Image style={styles.logo} source={require("./assets/senac.png")} />
        <Image style={styles.user} source={require("./assets/user.png")} />
      </Appbar.Header>

      <Titulo texto='Badges' />

      <View style={styles.badgeArea}>
        <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>

          <Badge curso={Cursos.java} />
          <Badge curso={Cursos.sql} />
          <Badge curso={Cursos.nodejs} />
          <Badge curso={Cursos.python} />
          <Badge curso={Cursos.cpp} />

        </ScrollView>
      </View>

      <Titulo texto= 'Cursos'/>
      <FlatList
        data={unidadeCurricular}
        renderItem={({ item }) => <Curso item={item}/>}
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
  headerTitle: {
    color: '#ffffff',
  },
});