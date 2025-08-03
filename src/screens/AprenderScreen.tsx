import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '../components/ProgressBar';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Licoes: undefined;
  LessonDetail: { lessonId: string };
};

export default function AprenderScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const completedLessons = 2;
  const totalLessons = 5;
  const progress = completedLessons / totalLessons;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 Sua Jornada</Text>
      <Text style={styles.subtitle}>
        Você concluiu {completedLessons} de {totalLessons} lições
      </Text>

      <ProgressBar progress={progress} />

      <PrimaryButton
        title="Continuar próxima lição"
        onPress={() => navigation.navigate('LessonDetail', { lessonId: '3' })}
      />

      <PrimaryButton
        title="Ver todas as lições"
        onPress={() => navigation.navigate('Licoes')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f9f9ff',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
});
