import { FlatList } from 'react-native';

import { Curso } from '../Curso';

const CursoLista = (props) => {
  var data = props.data;
  return (
    <FlatList
      data={data}
      renderItem={Curso}
    />
  )
}

export {
  CursoLista
}