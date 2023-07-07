import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type QuestionProps = {
  question: string;
  alternatives: string[];
};

export function Question({ question, alternatives }: QuestionProps) {
  return (
    <View className="mb-4 pt-8 mt-4">
      <Text style={{ fontWeight: 'bold', fontSize: 16 }} className="text-zinc-400 mb-24">{question}</Text>
      {alternatives.map((alternative, index) => (
        <TouchableOpacity
          key={index}
          style={{ backgroundColor: '#61C0FF', borderRadius: 8, padding: 12, alignItems: 'center', marginTop: 8 }}
          onPress={() => handleAlternativePress(alternative)}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }} className="text-white">{`${String.fromCharCode(97 + index)}. ${alternative}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function handleAlternativePress(alternative: string) {
  // Lógica para tratar a seleção da alternativa
  console.log('Alternativa selecionada:', alternative);
}
