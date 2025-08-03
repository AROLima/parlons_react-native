// src/screens/LessonsScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import LessonCard from '../components/LessonCard';

type Lesson = {
  id: string;
  title: string;
  level: string;
};

const LESSONS: Lesson[] = [
  { id: '1', title: '👋 Cumprimentos Básicos', level: 'Iniciante' },
  { id: '2', title: '🗣️ Frases de Apresentação', level: 'Iniciante' },
  { id: '3', title: '👨‍👩‍👧‍👦 Vocabulário: Família', level: 'Intermediário' },
];

export default function LessonsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📚 Lições disponíveis</Text>
      <FlatList
        data={LESSONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LessonCard
            title={item.title}
            level={item.level}
            onPress={() => navigation.navigate('LessonDetail', { lessonId: item.id })}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc', // cinza bem claro
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e293b',
  },
});
