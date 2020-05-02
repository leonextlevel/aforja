import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

export default function Detail() {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>DETALHES</Text>
        </View>

        <View style={styles.content}>
          
          <MapView style={{ flex: 1, marginVertical: 24, maxHeight: 200 }} />
        </View>
      </View>
  );
}