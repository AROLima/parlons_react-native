// src/screens/LessonDetailScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import LessonTitle from '../components/LessonTitle';
import LessonSection from '../components/LessonSection';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  LessonDetail: { lessonId: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'LessonDetail'>;

export default function LessonDetailScreen({ route: _route }: Props) {
  // Simulando conteúdo com base no ID
  const lessonData = {
    title: '👋 Cumprimentos Básicos',
    sections: [
      {
        heading: '📖 Vocabulário',
        content: 'Bonjour, Salut, Bonsoir, Au revoir...',
      },
      {
        heading: '🗨️ Frases',
        content: 'Bonjour ! Comment ça va ? Je m’appelle Rodrigo.',
      },
      {
        heading: '🌍 Notas Culturais',
        content: 'Na França, cumprimentar com “la bise” é comum.',
      },
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LessonTitle title={lessonData.title} />
      {lessonData.sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <LessonSection
            heading={section.heading}
            content={section.content}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f5f9', // azul acinzentado leve
    flexGrow: 1,
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
});
