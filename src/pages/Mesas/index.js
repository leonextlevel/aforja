import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';

import api from '../../services/api';

export default function Mesas() {

  const navigation = useNavigation();

  const [mesas, setMesas] = React.useState([]);

  function navigateToDetails(mesa) {
    navigation.navigate('Detail', { mesa });
  }

  React.useEffect(() => {
    const getMesas = async () => {
      await api.get('api/mesa/', { params: {
        latitude: -23.27705208825325,
        longitude: -45.86293385453567
      }}).then(response => {
        setMesas(response.data);
      }).catch((error) => {
        console.log(error)
      })
    }
    getMesas();
  }, [])

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>MESAS</Text>
        </View>
        
        <View style={styles.content}>
          <FlatList
            data={mesas}
            style={styles.mesaList}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: mesa }) => (
              <TouchableOpacity style={styles.mesa} onPress={() => navigateToDetails(mesa)} >
                <View style={styles.mesaContent}>
                  <View>
                    <View style={styles.mesaHeader}>
                      <Text style={styles.mesaTitle}>{mesa.titulo}</Text>
                    </View>
                    <Text>Sistema</Text>
                  </View>
                  <View style={styles.cardVagas}>
                    <Text style={styles.txtVagas}>Vagas</Text>
                    <Text style={styles.numVagas}>{mesa.vagas}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
  );
}