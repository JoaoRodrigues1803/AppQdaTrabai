import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [legend, setLegend] = useState([
    'Legenda de exemplo: Feriados',
  ]);
  const [newLegend, setNewLegend] = useState('');

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const generateDays = () => {
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = [];

    for (let i = 0; i < startDay.getDay(); i++) {
      daysInMonth.push(null);
    }

    for (let i = 1; i <= endDay.getDate(); i++) {
      daysInMonth.push(i);
    }

    return daysInMonth;
  };

  const renderHeader = () => {
    const monthName = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Text style={styles.navButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.monthYear}>
          {monthName} {year}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Text style={styles.navButton}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <View style={styles.row}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.dayOfWeek}>
            {day}
          </Text>
        ))}
      </View>
    );
  };

  const renderDays = () => {
    const days = generateDays();
    const rows = [];
    let row = [];
    days.forEach((day, index) => {
      if (day === null) {
        row.push(<View key={index} style={styles.emptyDay} />);
      } else {
        row.push(
          <TouchableOpacity key={index} style={styles.day}>
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        );
      }

      if (row.length === 7) {
        rows.push(<View key={rows.length} style={styles.row}>{row}</View>);
        row = [];
      }
    });

    if (row.length > 0) {
      rows.push(<View key={rows.length} style={styles.row}>{row}</View>);
    }

    return rows;
  };

  // Função para adicionar uma nova legenda
  const addLegend = () => {
    if (newLegend.trim() !== '') {
      setLegend((prevLegend) => [...prevLegend, newLegend]);
      setNewLegend(''); // Limpa o campo de input após adicionar
    }
  };

  // Função para excluir uma legenda
  const removeLegend = (index) => {
    const updatedLegends = legend.filter((_, i) => i !== index);
    setLegend(updatedLegends);
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderDays()}

      {/* Legenda na parte inferior */}
      <View style={styles.legendContainer}>
        <Text style={styles.legendText}>Legenda:</Text>
        {legend.map((item, index) => (
          <View key={index} style={styles.legendItemContainer}>
            <Text style={styles.legendItem}>
              - {item}
            </Text>
            <TouchableOpacity
              onPress={() => removeLegend(index)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Formulário para adicionar nova legenda */}
      <View style={styles.addLegendContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa/evento"
          value={newLegend}
          onChangeText={setNewLegend}
        />
        <Button  title="Adicionar Tarefa" onPress={addLegend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  navButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  monthYear: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dayOfWeek: {
    width: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  day: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  dayText: {
    textAlign: 'center',
  },
  emptyDay: {
    width: 40,
    height: 40,
    margin: 5,
  },

  // Estilos para a legenda
  legendContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#333',
  },
  legendItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  legendItem: {
    fontSize: 14,
    color: '#333',
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  // Estilos para o formulário de adição de legenda
  addLegendContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default Calendar;
