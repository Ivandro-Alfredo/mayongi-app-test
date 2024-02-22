import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '../../Components/header';
import { styles } from '../../Style/homeStyle';
import { SearchBar } from 'react-native-elements';
import {ListaDeTarefas} from '../../Components/taskList';

export const Home = ()=> {
  return (
    <SafeAreaView style={styles.body}>
        <ScrollView >
        <Header/>
        <SearchBar
          placeholder="Procurar Tarefas"
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
        />
        <Text style={styles.homeText}>Criar Lista de Tarefa</Text>
        <ListaDeTarefas/> 
      </ScrollView>
    </SafeAreaView>
  );
}
