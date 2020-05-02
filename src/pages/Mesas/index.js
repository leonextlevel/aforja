import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';

export default function Mesas() {

  const navigation = useNavigation();

  function navigateToDetails() {
    navigation.navigate('Detail');
  }

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>MESAS</Text>
        </View>
        
        <View style={styles.content}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            style={styles.mesaList}
            keyExtractor={mesa => String(mesa)}
            showsVerticalScrollIndicator={false}
            renderItem={() => (
              <View style={styles.mesa}>
                <View style={styles.mesaHeader}>
                  <Text style={styles.mesaTitle}>RPG Incrível</Text>
                </View>
                <View style={styles.mesaContent}>
                  <View style={styles.mesaColumn1}>
                    <Text style={styles.mesaProperty}>Sistema</Text>
                    <Text style={styles.mesaValue}>D&D 5E</Text>

                    <Text style={styles.mesaProperty}>Plataforma</Text>
                    <Text style={styles.mesaValue}>Discord</Text>

                    <Text style={styles.mesaProperty}>Tipo</Text>
                    <Text style={styles.mesaValue}>One Shot</Text>
                  </View>
                  <View style={styles.mesaColumn2}>
                    <Text style={styles.mesaProperty}>Data</Text>
                    <Text style={styles.mesaValue}>Segunda e Quarta</Text>

                    <Text style={styles.mesaProperty}>Horário</Text>
                    <Text style={styles.mesaValue}>19:00</Text>

                    <Text style={styles.mesaProperty}>Vagas</Text>
                    <Text style={styles.mesaValue}>01</Text>
                  </View>
                </View>
                <View style={styles.mesaOptions}>
                  <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={navigateToDetails}
                  >
                    <Text style={styles.detailsText}>Detalhes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
  );
}