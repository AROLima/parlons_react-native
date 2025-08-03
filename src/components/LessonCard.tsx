import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface LessonCardProps {
  title: string;
  level: string;
  onPress: () => void;
  style?: ViewStyle;
}

export default function LessonCard({ title, level, onPress, style }: LessonCardProps) {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.level}>{level}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e5e5e5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  level: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
