import {StyleSheet, StatusBar} from 'react-native'

const alturaStatusBar = StatusBar.currentHeight;
export const styles = StyleSheet.create({
  headerBody: {
    paddingTop: 0,
  },
  header: {
    backgroundColor: '#bfddf3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 22,
  },
  headerText: {
    fontSize: 25,
    color: 'black',
    fontWeight:'bold',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    marginRight: 6,
  },
});
