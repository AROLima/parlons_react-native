import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  heading: string;
  content: string;
};

export default function LessonSection({ heading, content }: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  content: {
    fontSize: 16,
    color: '#444',
  },
});
