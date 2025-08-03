// src/screens/LessonDetailScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LessonTitle from '../components/LessonTitle';
import LessonSection from '../components/LessonSection';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  LessonDetail: { lessonId: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'LessonDetail'>;

const LESSON_MAP: Record<string, { title: string; sections: { heading: string; content: string }[] }> = {
  '1': {
    title: 'Cumprimentos Básicos',
    sections: [
      { heading: 'Vocabulário', content: 'Bonjour, Salut, Bonsoir, Au revoir...' },
      { heading: 'Frases', content: 'Bonjour! Comment ça va? Je m’appelle Rodrigo.' },
      { heading: 'Notas Culturais', content: 'Na França, cumprimentar com “la bise” é comum.' },
    ],
  },
  '2': {
    title: 'Frases de Apresentação',
    sections: [
      { heading: 'Vocabulário', content: 'Je suis, Tu es, Il/Elle est...' },
      { heading: 'Frases', content: 'Je suis étudiant. Enchanté!' },
      { heading: 'Notas Culturais', content: 'Apresentações formais são comuns na França.' },
    ],
  },
  '3': {
    title: 'Vocabulário: Família',
    sections: [
      { heading: 'Vocabulário', content: 'Mère, Père, Frère, Sœur...' },
      { heading: 'Frases', content: 'Mon père est professeur. Ma sœur est gentille.' },
      { heading: 'Notas Culturais', content: 'Família é um pilar importante na cultura francesa.' },
    ],
  },
};

export default function LessonDetailScreen({ route }: Props) {
  const { lessonId } = route.params;
  const lessonData = LESSON_MAP[lessonId] || { title: 'Lção não encontrada', sections: [] };

  return (
    <ScrollView style={styles.container}>
      <LessonTitle title={lessonData.title} />
      {lessonData.sections.map((section, index) => (
        <LessonSection key={index} heading={section.heading} content={section.content} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
