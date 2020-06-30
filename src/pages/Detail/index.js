import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

export default function Detail() {

    const navigation = useNavigation();

    const route = useRoute();

    const mesa = route.params.mesa;

    function navigateToMapaDetail(localizacao) {
        navigation.navigate('MapaDetail', {localizacao});
    }

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>DETALHES</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.mesaTitle}>{ mesa.titulo }</Text>
          <View style={styles.card}>
            <Text style={styles.subTitle}>Básico</Text>
            <View style={styles.mesaInfos}>
              <Text style={styles.mesaProperty}>Sistema</Text>
              <Text style={styles.mesaValue}>{ mesa.sistema }</Text>
            </View>
            <View style={styles.mesaInfos}>
              <Text style={styles.mesaProperty}>Tipo</Text>
              <Text style={styles.mesaValue}>{ mesa.tipo }</Text>
            </View>
            <View style={styles.mesaInfos}>
              <Text style={styles.mesaProperty}>Data</Text>
              <Text style={styles.mesaValue}>{ mesa.data }</Text>
            </View>
            <View style={styles.mesaInfos}>
              <Text style={styles.mesaProperty}>Horário</Text>
              <Text style={styles.mesaValue}>{ mesa.hora }</Text>
            </View>
            <View style={styles.mesaInfos}>
              <Text style={styles.mesaProperty}>Vagas</Text>
              <Text style={styles.mesaValue}>{ mesa.vagas }</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.subTitle}>Descrição</Text>
            <Text style={styles.mesaDescribe}>{ mesa.descricao }</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>Participar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigateToMapaDetail(mesa.localizacao)}
            >
              <Text style={styles.buttonText}>Ver no Mapa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>Perfil Artífice</Text>
            </TouchableOpacity>
          </View>
          {/* <MapView style={styles.map} /> */}
        </View>
      </View>
  );
}