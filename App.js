import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import { Cursos } from './Cursos';
import { Header } from "./src/component/Header";
import { Perfil } from "./src/component/Perfil";
import { Curso } from './src/component/Curso'
import { Badge } from './src/component/Badge'
import { Titulo } from './src/component/Titulo'
import { fetchUsuario } from './src/service/Usuario';
import { fetchUnidadesCurriculares } from './src/service/UnidadeCurricular'
import { fetchEncontro } from './src/service/Encontro'
import { fetchSituacaoAprendizagem } from './src/service/SituacaoAprendizagem';
import { fetchAtividade } from './src/service/Atividade';
import { fetchBadge } from "./src/service/Badge";



export default function App() {
  const [usuario, setUsuario] = useState([]);
  const [unidadesCurriculares, setUnidadeCurricular] = useState([]);
  const [encontros, setEncontro] = useState([]);
  const [situacoesAprendizagem, setSituacaoAprendizagem] = useState([]);
  const [atividades, setAtividade] = useState([]);
  const [badges, setBadges] = useState([]);

  var idUsuario = '3b700ecc-cec9-4be4-8c00-48bced543861'

  useEffect(() => {
    const fetchData = async () => {
      var usuario = await fetchUsuario(idUsuario);
      setUsuario(usuario);

      var unidadesCurriculares = await fetchUnidadesCurriculares(idUsuario);
      setUnidadeCurricular(unidadesCurriculares);

      var listEncontro = [];

      unidadesCurriculares.forEach(async uc => {
        var encontro = await fetchEncontro(uc.id);
        listEncontro.push(encontro);
      });

      setEncontro(listEncontro);

      var listSituacaoAprendizagem = [];

      encontros.forEach(async enc => {
        var situacoesAprendizagem = await fetchSituacaoAprendizagem(enc.id);
        listSituacaoAprendizagem.push(situacoesAprendizagem);
      });

      setSituacaoAprendizagem(listSituacaoAprendizagem);

      var listAtividade = [];

      situacoesAprendizagem.forEach(async sa => {
        var atividades = await fetchAtividade(sa.id);
        listAtividade.push(atividades);
      });

      setAtividade(listAtividade);

      var badges = await fetchBadge();
      setBadges(badges);
    }

    fetchData()
      .catch(console.error);
  }, []);

  // UCs.forEach(uc => {
  //   lstEncontro.push(fetchEncontro(uc.id))
  // });

  return (
    <SafeAreaView style={styles.container}>

      <Header />

      <Perfil img={require("./assets/person.png")} texto={usuario.nomeCompleto} />

      <Titulo texto='Badges' />

      <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={badges}
            renderItem={Badge}
          />
      </View>

      <Titulo texto='Cursos' />
      <FlatList
        data={unidadesCurriculares}
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
});