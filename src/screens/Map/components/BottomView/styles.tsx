import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  draggable: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  dragHandle: {
    fontSize: 22,
    color: '#707070',
    height: 60,
  },
  scroll: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  txtTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 5,
  },
  txtGray: {
    color: '#B5B5BA',
    fontSize: 14,
    marginTop: 5,
    fontWeight: '500',
  },
  txtStatus: {
    marginTop: 5,
    color: '#8EC050',
    fontSize: 14,
    fontWeight: '700',
  },
  txtTime: {
    color: '#2362DA',
    fontSize: 14,
    fontWeight: '400',
  },
  rowItem: {
    flexDirection: 'row',
    marginTop: 20,
    height: 110,
  },
  lineVertical: {
    backgroundColor: '#2362DA',
    width: 2,
    height: 90,
  },
  dot: {
    width: 20,
    height: 20,
    backgroundColor: '#2362DA',
    borderRadius: 10,
  },
  leftView: {
    width: 70,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#161523',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  content: {
    width: '100%',
    backgroundColor: '#fff',
    position: 'relative',
  },
  iconTop: {
    width: 40,
    height: 40,
  },
  iconPeolple: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  viewFocusMap: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    position: 'absolute',
    top: -50,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconMap: {
    width: 30,
    height: 30,
  },
  iconBack: {
    position: 'absolute',
    left: 20,
    top: 16,
    width: 20,
    height: 20,
    zIndex: 1000000,
  },
  headerView: {
    height: 80,
    backgroundColor: '#fff',
    width: '100%',

    zIndex: 10,
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
