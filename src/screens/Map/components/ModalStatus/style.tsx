import {Dimensions, StyleSheet} from 'react-native';
import {scale} from '~/utils';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: 'rgb(255,255,255)',
    width: width,
    height: (height / 100) * 76,
    alignSelf: 'center',
    flexDirection: 'column',
    padding: 20,
  },
  modal: {
    width: width,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    margin: 0,
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  closeView: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconClose: {
    width: 20,
    height: 20,
  },
  buttonBottom: {
    backgroundColor: '#000',
    marginBottom: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  txtTitle: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtContent: {
    color: '#92919B',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
  },
  content: {
    alignItems: 'center',
    flex: 1,
  },
  imgStatus: {
    width: 200,
    height: 200,
  },
});
export default styles;
