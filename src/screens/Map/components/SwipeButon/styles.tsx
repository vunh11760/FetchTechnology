import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
  },
});

export default styles;
