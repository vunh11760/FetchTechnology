import {View, StyleSheet, Dimensions, Text} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container2: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: '#9797',
  },
  iconBack: {
    width: 20,
    height: 20,
  },
  viewButonBack: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    left: 10,
    top: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default styles;
