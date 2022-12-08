import { FlatList } from 'react-native';

import { Curso } from '../Curso';

const CursoLista = (i) => {
  return (
    <FlatList
      data={i}
      renderItem={Curso}
    />
  )
}

export {
  CursoLista
}