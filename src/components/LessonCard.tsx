import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

type Props = {
  title: string;
  level: string;
  onPress: () => void;
};

export default function LessonCard({ title, level, onPress }: Props) {
  const backgroundColor = level === 'Iniciante' ? '#dbeafe' : '#ede9fe'; // azul claro / lilás

  return (
    <TouchableOpacity style={[styles.card, { backgroundColor }]} onPress={onPress}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.level}>{level}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  level: {
    fontSize: 14,
    color: '#475569',
    marginTop: 6,
  },
});
