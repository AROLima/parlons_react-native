import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  progress: number; // de 0 a 1
};

export default function ProgressBar({ progress }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${progress * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 24,
  },
  fill: {
    height: '100%',
    backgroundColor: '#4f46e5',
  },
});
