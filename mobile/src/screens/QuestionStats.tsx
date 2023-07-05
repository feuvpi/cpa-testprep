import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

type PieChartData = {
  label: string;
  value: number;
  color: string;
};

const chartDataMock: PieChartData[] = [
  { label: 'Alternativa A', value: 10, color: '#FF6384' },
  { label: 'Alternativa B', value: 15, color: '#36A2EB' },
  { label: 'Alternativa C', value: 5, color: '#FFCE56' },
  { label: 'Alternativa D', value: 8, color: '#FF9F40' },
  { label: 'Alternativa E', value: 3, color: '#4BC0C0' },
];

export function QuestionStats() {
  const pieData = chartDataMock.map((data) => ({
    value: data.value,
    svg: {
      fill: data.color,
    },
    key: `pie-${data.label}`,
  }));

  return (
    <View className="flex-1 bg-background pt-8">
      <Text style={styles.title}>Estatísticas das Questões</Text>

      <View style={styles.chartContainer}>
        <PieChart style={styles.chart} data={pieData} />
      </View>

      <FlatList
      className='pt-8 text-lg'
        data={chartDataMock}
        numColumns={2}
        keyExtractor={(item, index) => `label-${index}`}
        renderItem={({ item }) => (
          <View style={styles.labelContainer}>
            <View style={[styles.colorIndicator, { backgroundColor: item.color }]} />
            <Text style={styles.labelText}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 16,
  },
  chartContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    height: '100%',
    width: '100%',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    marginTop: 30,
    marginLeft: 40,
    marginBottom: 8,
    paddingRight: 20
  },
  colorIndicator: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  labelText: {
    fontSize: 12,
    color: 'white',
  },
});
