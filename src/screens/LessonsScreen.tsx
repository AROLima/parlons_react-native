import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import LessonCard from '../components/LessonCard';

type Lesson = {
  id: string;
  title: string;
  level: string;
};

const LESSONS: Lesson[] = [
  { id: '1', title: 'Cumprimentos Básicos', level: 'Iniciante' },
  { id: '2', title: 'Frases de Apresentação', level: 'Iniciante' },
  { id: '3', title: 'Vocabulário: Família', level: 'Intermediário' },
];

export default function LessonsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lições</Text>
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
