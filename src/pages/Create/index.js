import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import {Picker} from '@react-native-community/picker';
import styles from './styles';

export default function Create() {

  const navigation = useNavigation();

  function navigateToMapaDetail() {
      navigation.navigate('MapaDetail');
  }

  function navigateToMesas() {
    navigation.navigate('Mesas');
  }

  const [modalVisible, setModalVisible] = React.useState(false);
  const [tipo, setTipo] = React.useState({value: 'campanha'});

  return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <MapView style={{flex:1}}></MapView>
        </Modal>

        <View style={styles.header}>
          <Text style={styles.headerText}>CRIAR MUNDO</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder="Título"
            placeholderTextColor="#909090"
            autoCapitalize="words"
            autoCorrect={false}
            maxLength={30}
          />
          <View style={styles.row}>
            <TextInput
              style={styles.textInputRow}
              placeholder="Sistema"
              placeholderTextColor="#909090"
              autoCapitalize="words"
              autoCorrect={false}
              maxLength={20}
            />
          </View>

          <View style={styles.row}>
            <Picker
              selectedValue={tipo.value}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                setTipo({value: itemValue})
              }>
              <Picker.Item label="Campanha" value="campanha" />
              <Picker.Item label="One Shot" value="one_shot" />
            </Picker>
            <TextInput
              style={styles.textInputRow}
              placeholder="Vagas"
              placeholderTextColor="#909090"
              autoCapitalize="words"
              autoCorrect={false}
              maxLength={20}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={styles.textInputRow}
              placeholder="Data"
              placeholderTextColor="#909090"
              autoCapitalize="words"
              autoCorrect={false}
              maxLength={20}
            />
            <TextInput
              style={styles.textInputRow}
              placeholder="Horário"
              placeholderTextColor="#909090"
              autoCapitalize="words"
              autoCorrect={false}
              maxLength={20}
            />
          </View>
          <TextInput
            style={[styles.textInput, { height: 100 }]}
            multiline = {true}
            placeholder="Descrição"
            placeholderTextColor="#909090"
            autoCapitalize="words"
            autoCorrect={false}
            maxLength={150}
          />
          <TouchableOpacity
            style={styles.buttonMapa}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.buttonMapaText}>Marcar no Mapa</Text>
            <MaterialIcons name="room" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={navigateToMesas}
        >
          <Text style={styles.buttonCreateText}>Criar</Text>
        </TouchableOpacity>
      </View>
  );
}
