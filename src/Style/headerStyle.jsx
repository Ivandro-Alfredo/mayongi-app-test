import {StyleSheet, StatusBar} from 'react-native'


const alturaStatusBar = StatusBar.currentHeight;
export const styles = StyleSheet.create({
  headerBody: {
    paddingTop: 0,
  },
  header: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 22,
  },
  headerText: {
    fontSize: 25,
    color: 'white',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    marginRight: 6,
  },
});
