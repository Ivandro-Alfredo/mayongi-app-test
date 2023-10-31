import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'white', // Cor de fundo branca
    borderBottomWidth: 0, // Remove a borda inferior
    borderTopWidth: 0, // Remove a borda superior
    width: '90%', // Largura de 90%
    marginLeft: 16, // Margem à esquerda de 16
    flexDirection: 'row', // Alinhar elementos lado a lado
    alignItems: 'center', // Alinhar verticalmente no centro
    justifyContent: 'space-between', // Espaçamento entre elementos
  },
  input: {
    flex: 1, // Ocupa todo o espaço disponível no contêiner
  },
  addButton: {
    backgroundColor: 'green', // Cor de fundo verde para o botão de adicionar
    marginLeft: 10, // Espaço à esquerda
  },
  buttonText: {
    color: 'white', // Cor do texto branco para o botão
  },
});
