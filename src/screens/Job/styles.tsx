import {View, StyleSheet, Dimensions, Text} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titleHeader: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
  },
  itemFillter: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#F1F1F4',
  },
  itemFillterActive: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#161523',
  },
  titleActive: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
  titleInactive: {
    color: '#9C9CA1',
    fontWeight: '500',
    fontSize: 14,
  },
  viewContent: {
    marginTop: 30,
    backgroundColor: '#161523',
    borderRadius: 5,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
  },
  titleContent: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  txtPrice: {
    color: '#fff',
    fontSize: 16,
  },
  txtTime: {
    color: '#A9A8B2',
    fontSize: 16,
  },
  contentLeftView: {
    width: 30,
    alignItems: 'center',
  },
  contentIcon: {
    width: 20,
    height: 20,
  },
  lineVertical: {
    width: 3,
    flex: 1,
    backgroundColor: '#2362DA',
    marginTop: 5,
  },
  cirle: {
    backgroundColor: '#2362DA',
    height: 15,
    width: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  txtGray: {
    color: '#A9A8B2',
    fontSize: 16,
  },
});

export default styles;
