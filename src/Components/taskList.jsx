import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { styles } from '../Style/taskListStyle';

export const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState('');
  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, { texto: tarefa, isChecked: false }]);
      setTarefa('');
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <ScrollView>
      <ScrollView>
        {tarefas.map((item, index) => (
          <View key={index} style={styles.taskContainer}>
            <Text style={styles.checkbox}></Text>
            <Text style={{ flex: 1, fontSize:18,marginLeft:17}}>
              {item.texto}
            </Text>
            <Button title="X" 
                onPress={() => removerTarefa(index)}
                color='red'   
            />
          </View>
        ))}
      </ScrollView>
        
      <TextInput
        placeholder="Adicionar tarefa"
        onChangeText={(text) => setTarefa(text)}
        value={tarefa}
        onSubmitEditing={adicionarTarefa}
        style={styles.input}
      />
      <View style={styles.addButton}>
        <Button title="Adicionar" 
            onPress={adicionarTarefa} 
            color='green' 
        />
      </View>
    </ScrollView>
  );
};
