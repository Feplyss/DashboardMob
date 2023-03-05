import { FlatList, View } from 'react-native';

import { Badge } from '../Badge';

const BadgeLista = (props) => {
  var data = props.data;
  return (
    <View>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            renderItem={Badge}
        />
    </View>
  )
}

export {
  BadgeLista
}