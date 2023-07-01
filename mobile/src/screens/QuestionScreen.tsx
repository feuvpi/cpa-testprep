import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Question } from '../components/Question';

const questionMock = {
  question: "Qual é a capital do Brasil?",
  alternatives: ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte"],
};

export function QuestionScreen() {
  return (
    <View className="flex-1 bg-background pt-16">
      <Question question={questionMock.question} alternatives={questionMock.alternatives} />

      <View className="flex-row justify-between px-8 mt-8">
        <TouchableOpacity
          style={{
            backgroundColor: '#61C0FF',
            borderRadius: 8,
            padding: 12,
            alignItems: 'center',
            flex: 1,
            marginRight: 4,
          }}
          onPress={() => handlePreviousQuestion()}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Questão Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#61C0FF',
            borderRadius: 8,
            padding: 12,
            alignItems: 'center',
            flex: 1,
            marginLeft: 4,
          }}
          onPress={() => handleNextQuestion()}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Próxima Questão</Text>
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
