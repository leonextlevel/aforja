import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import styles from './styles';

export default function MapaDetail() {
  const route = useRoute();
  
  const localizacao = route.params.localizacao;
  
  // const [latLong, setLatLong] = React.useState({latitude: localizacao[1], longitude: localizacao[0]})

  function teste (region) {
    console.log(region)
  }

  return (
      <MapView
        onRegionChangeComplete={teste}
        // onPress={coordinate => {
        //   setLatLong(coordinate.nativeEvent.coordinate)
        // }}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: localizacao[1],
          longitude: localizacao[0],
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{
          latitude: localizacao[1],
          longitude: localizacao[0]
        }} />
      </MapView>
  );
}