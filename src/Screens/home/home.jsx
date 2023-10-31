import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '../../Components/header';
import { styles } from '../../Style/homeStyle';

export const Home = ()=> {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.insideBody}>
        <ScrollView >
        <Header/>
        <Text>Listagem de Tarefas</Text>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}
