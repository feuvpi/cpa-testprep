import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Question } from '../components/Question';
import Icon from 'react-native-vector-icons/Feather';

const questionMock = {
  question: "Qual é a capital do Brasil?",
  alternatives: ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte"],
};

export function QuestionScreen() {
  return (
    <View className="flex-1 bg-background pt-16">
      <Question question={questionMock.question} alternatives={questionMock.alternatives} />

      <View className="flex-row justify-between px-8 mt-24">
      <TouchableOpacity
  style={{
    backgroundColor: '#61C0FF',
    borderRadius: 8,
    padding: 18,
    alignItems: 'center',
    flex: 1,
    marginRight: 80,
    width: 10,
  }}
  onPress={() => handlePreviousQuestion()}
>
  <Icon name="arrow-left" size={20} color="#fff" />
</TouchableOpacity>

<TouchableOpacity
  style={{
    backgroundColor: '#61C0FF',
    borderRadius: 8,
    padding: 18,
    alignItems: 'center',
    flex: 1,
    marginLeft: 80,
    width: 10,
  }}
  onPress={() => handleNextQuestion()}
>
  <Icon name="arrow-right" size={20} color="#fff" />
</TouchableOpacity>
      </View>
    </View>
  );
}

function handlePreviousQuestion() {
  // Lógica para redirecionar para a questão anterior
  console.log('Redirecionar para a questão anterior');
}

function handleNextQuestion() {
  // Lógica para redirecionar para a próxima questão
  console.log('Redirecionar para a próxima questão');
}
