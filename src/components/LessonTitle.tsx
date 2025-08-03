import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = { title: string };

export default function LessonTitle({ title }: Props) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});