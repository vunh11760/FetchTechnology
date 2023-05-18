import {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Screen from '../../constants/Screen';
import styles from './styles';
import {icon7, icon8} from '../../assets/icons/index';

const Job = () => {
  const LIST_STATUS = ['Ongoing', 'Available', 'History'];
  const [fillter, setFillter] = useState(LIST_STATUS[0]);
  const navigation = useNavigation();

  const goDetail = () => {
    navigation.navigate(Screen.MAP);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>Jobs</Text>
      <View style={styles.header}>
        {LIST_STATUS.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                setFillter(item);
              }}
              style={
                item === fillter ? styles.itemFillterActive : styles.itemFillter
              }>
              <Text
                style={
                  item === fillter ? styles.titleActive : styles.titleInactive
                }>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.viewContent}
        onPress={() => {
          goDetail();
        }}>
        <View style={styles.row}>
          <View style={{flex: 1}}>
            <Text style={styles.titleContent}> Expo Hall 7</Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
            }}>
            <Text style={styles.txtPrice}>$65.00</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={icon7}
                style={[styles.contentIcon, {marginRight: 5}]}
              />
              <Text style={styles.txtTime}>in 7 months</Text>
            </View>
          </View>
        </View>

        <View style={[styles.row, {height: 80}]}>
          <View style={styles.contentLeftView}>
            <Image source={icon8} style={styles.contentIcon} />
            <View style={styles.lineVertical}></View>
          </View>
          <View>
            <Text style={styles.txtPrice}>
              Expo Hall 7{' '}
              <Text style={styles.txtGray}>- Expo Hall 7, Singapore</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.row, {height: 80}]}>
          <View style={styles.contentLeftView}>
            <View style={styles.cirle}></View>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.txtPrice}>
              Expo Hall 7{' '}
              <Text style={styles.txtGray}>
                - 14 Scotts Road, Orchard, Singapore, Singapore, 228213
              </Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Job;
