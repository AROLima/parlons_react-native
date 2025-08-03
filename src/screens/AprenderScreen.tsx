import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types'; // <- o tipo global da stack

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Aprender'>;

export default function AprenderScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Aprendizado</Text>
      <Text style={styles.subtitle}>Aqui começa sua jornada linguística!</Text>

      <PrimaryButton
        title="Ir para Lições"
        onPress={() => navigation.navigate('Licoes')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});
