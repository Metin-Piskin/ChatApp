import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    borderRadius: 20,
    margin: 5,
    backgroundColor: '#262834',
    borderWidth: 1,
    borderColor: "#3366FF",
  },
  inner_container: {
    flex: 1,
  },
  user: {
    fontSize: 13,
    color: 'white',
  },
  date: {
    fontSize: 13,
    color: 'white',

  },
  message: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});