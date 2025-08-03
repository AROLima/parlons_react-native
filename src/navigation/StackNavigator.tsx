import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AprenderScreen from '../screens/AprenderScreen';
import LessonsScreen from '../screens/LessonsScreen';
import { RootStackParamList } from './types';
import LessonDetailScreen from '../screens/LessonDetailScreen';



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Aprender" component={AprenderScreen} />
      <Stack.Screen name="Licoes" component={LessonsScreen} options={{ title: 'Lições' }} />
      <Stack.Screen name="LessonDetail" component={LessonDetailScreen} options={{ title: 'Detalhe da Lição' }} />
    </Stack.Navigator>
  );
}