import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import { styles } from '../Style/taskListStyle';

export const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([
    { texto: 'Tarefa número 1' },
    { texto: 'Tarefa número 2' },
    { texto: 'Tarefa número 3' },
    { texto: 'Tarefa número 4' },
    { texto: 'Tarefa número 5'},
    { texto: 'Tarefa número 6' },
  ]);
  const [tarefa, setTarefa] = useState('');
  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, { texto: tarefa, isChecked: false }]);
      setTarefa('');
    }
  };

  return (
    <View>
      <ScrollView>
        {tarefas.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text >
              {item.texto}
            </Text>
            <Button title="X"/>
          </View>
        ))}
      </ScrollView>

      <TextInput
        placeholder="Adicionar tarefa"
        onChangeText={(text) => setTarefa(text)}
        value={tarefa}
        onSubmitEditing={adicionarTarefa}
      />
      <Button title="add" onPress={adicionarTarefa} />
    </View>
  );
};
