import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$lightBlue',
    padding: 15,
    marginVertical: 5,
    borderRadius: 2,
    elevation: 3,
    borderLeftColor: '$primaryGreen',
    borderLeftWidth: 2,
  },
  activeContainer: {
    opacity: 0.5,
    elevation: 1,
  },
  text: {
    fontWeight: '600',
  },
  isDone: {
    textDecorationLine: 'line-through',
  },
  date: {
    fontSize: 12,
  },
});
