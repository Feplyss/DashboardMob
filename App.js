import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView, Text } from 'react-native';
import { Header } from "./src/component/Header";
import { Perfil } from "./src/component/Perfil";
import { Titulo } from './src/component/Titulo';
import { CursoLista } from "./src/component/CursoLista";
import { BadgeLista } from "./src/component/BadgeLista";
import { fetchUsuario } from './src/service/Usuario';
import { fetchUnidadesCurriculares } from './src/service/UnidadeCurricular'
import { fetchEncontro } from './src/service/Encontro'
import { fetchSituacaoAprendizagem } from './src/service/SituacaoAprendizagem';
import { fetchAtividade } from './src/service/Atividade';
import { fetchObjetoAprendizagem } from "./src/service/ObjetoAprendizagem";
import { fetchBadge } from "./src/service/Badge";



export default function App() {
  const [usuario, setUsuario] = useState([]);
  const [unidadesCurriculares, setUnidadesCurriculares] = useState([]);
  const [encontros, setEncontros] = useState([]);
  const [situacoesAprendizagem, setSituacoesAprendizagem] = useState([]);
  const [atividades, setAtividades] = useState([]);
  const [objetosAprendizagem, setObjetosAprendizagem] = useState([]);
  const [badges, setBadges] = useState([]);

  var idUsuario = '3b700ecc-cec9-4be4-8c00-48bced543861'

  useEffect(() => {
    const fetchData = async () => {

      //Usuario

      var usr = await fetchUsuario(idUsuario);
      setUsuario(usr);

      //Unidades Curriculares

      var ucs = await fetchUnidadesCurriculares(idUsuario);
      setUnidadesCurriculares(ucs);

      //Encontros

      var listEncontro = [];

      unidadesCurriculares.forEach(async uc => {
        listEncontro.push(await fetchEncontro(uc.id));
      });

      setEncontros(listEncontro);
      
      console.log(encontros);

      //Situacoes Aprendizagem

      var listSituacaoAprendizagem = [];

      encontros.forEach(async enc => {
        listSituacaoAprendizagem.push(await fetchSituacaoAprendizagem(enc[1].id));
      });

      setSituacoesAprendizagem(listSituacaoAprendizagem);

      console.log(situacoesAprendizagem);

      //Atividades

      var listAtividade = [];

      situacoesAprendizagem.forEach(async sa => {
        listAtividade.push(await fetchAtividade(sa.id));
      });

      setAtividades(listAtividade);
      
      console.log(atividades);

      //Objetos Aprendizagem

      var listObjetoAprendizagem = [];

      situacoesAprendizagem.forEach(async sa => {
        listObjetoAprendizagem.push(await fetchObjetoAprendizagem(sa.id));
      });

      setObjetosAprendizagem(listObjetoAprendizagem);

      console.log(objetosAprendizagem);

      //Badges

      var bdgs = await fetchBadge();
      setBadges(bdgs);
    }

    fetchData()
      .catch(console.error);
  }, []);

  var ucMock = [
    {
      id: 1,
      nomeCurto: "Introdução a programação"
    },
    {
      id: 2,
      nomeCurto: "Banco de dados I"
    }
  ]  

  var badgeMock = [
    {
      id: 1,
      descricao: "Python"
    },
    {
      id: 2,
      descricao: "C++"
    }
  ]  

  // UCs.forEach(uc => {
  //   lstEncontro.push(fetchEncontro(uc.id))
  // });

  return (
    <SafeAreaView style={styles.container}>

      <Header />

      <Perfil img={require("./assets/person.png")} texto={usuario.nomeCompleto} />

      <Titulo texto='Badges' />

      <BadgeLista data={badgeMock} />
      
      <Titulo texto='Cursos' />

      <CursoLista data={ucMock} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'scroll',
  },
});