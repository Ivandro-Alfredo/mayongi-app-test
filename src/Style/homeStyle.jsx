import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: '#f8f8f8',
  },
  searchContainer: {
    backgroundColor: '#f8f8f8', 
    borderBottomWidth:0, 
    borderTopWidth:0,
  },
  searchInputContainer: {
    width: '90%',
    marginLeft:16,
    marginTop:-22,
    backgroundColor: 'white', // Define o fundo do contêiner de entrada do SearchBar como branco
  },
  homeText: {
    fontSize: 22,
    color: 'black',
    fontWeight:'bold',
    marginLeft:26,
    marginBottom: 20,
  },
});