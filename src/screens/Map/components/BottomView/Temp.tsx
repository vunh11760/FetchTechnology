import React, {Component, useState, useRef} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PanResponder,
  Animated,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import SwipeButon from '../SwipeButon';
import {icon1, icon2, icon3, icon4, icon9} from '../../../../assets/icons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const {height, width} = Dimensions.get('window');
import styles from './styles';

const BottomViewCustom2 = props => {
  const [toTop, setToTop] = useState(false);
  const [available, setAvailable] = useState(true);
  const initialPosition = {x: 0, y: height / 2};

  const position = useRef(new Animated.ValueXY(initialPosition)).current;
  const opacityHeader = position.y.interpolate({
    inputRange: [100, 200, 250],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });
  const parentResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (e, gestureState) => {
      return false;
    },
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: (e, gestureState) => {
      if (toTop) {
        if (available) return gestureState.dy > 6;
        return false;
        // if (scrollOnTop) {
        //   return gestureState.dy > 6;
        // } else {
        //   return gestureState.dy > 6;
        // }
      } else {
        return gestureState.dy < -6;
      }
    },
    onPanResponderTerminationRequest: () => false,
    onPanResponderMove: (evt, gestureState) => {
      let newy = gestureState.dy;
      if (toTop && newy < 0) return;
      if (toTop) {
        position.setValue({x: 0, y: newy});
      } else {
        position.setValue({x: 0, y: initialPosition.y + newy});
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (toTop) {
        if (gestureState.dy > 50) {
          snapToBottom(initialPosition);
        } else {
          snapToTop();
        }
      } else {
        if (gestureState.dy < -90) {
          snapToTop();
        } else {
          snapToBottom(initialPosition);
        }
      }
    },
  });
  const snapToTop = () => {
    Animated.timing(position, {
      toValue: {x: 0, y: 0},
      duration: 300,
    }).start(() => {});
    setToTop(true);
  };

  const snapToBottom = initialPosition => {
    Animated.timing(position, {
      toValue: initialPosition,
      duration: 150,
    }).start(() => {});
    setToTop(false);
  };

  const onSubmit = () => {
    setTimeout(() => {
      props.setShowModal(true);
    }, 300);
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.headerView, {opacity: opacityHeader}]}>
        <Image style={styles.iconBack} source={icon4} resizeMode={'contain'} />
        <Text style={{fontWeight: '700', fontSize: 16}}>LY-4b3dec</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 14, fontWeight: '400'}}>$65.00 </Text>
          <Image source={icon9} style={{width: 15, height: 15}} />
        </View>
      </Animated.View>
      <Animated.View
        style={[styles.draggable, {height}, position.getLayout()]}
        {...parentResponder.panHandlers}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: '700',
                color: '#fff',
                marginLeft: 20,
              }}>
              12
            </Text>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  color: '#fff',
                  marginLeft: 20,
                }}>
                December
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  color: '#90929B',
                  marginLeft: 20,
                }}>
                N9591
              </Text>
            </View>
            <Text
              style={{
                fontSize: 26,
                fontWeight: '500',
                color: '#fff',
                marginRight: 20,
              }}>
              $65.00
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={styles.leftView}>
              <Image style={styles.iconTop} source={icon1} />
            </View>
            <Text
              style={{
                color: '#2362DA',
                fontSize: 18,
                fontWeight: '500',
              }}>
              STANDARD RIDE
            </Text>
          </View>

          <View style={styles.rowItem}>
            <View style={styles.leftView}>
              <Image style={styles.iconPeolple} source={icon2} />
              <View style={styles.lineVertical}></View>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.txtTitle}>Expo Hall 7</Text>
              <Text style={styles.txtGray}>Expo Hall 7, Singapore</Text>
              <Text style={styles.txtStatus}>Picked up</Text>
            </View>
          </View>

          <View style={styles.rowItem}>
            <View style={styles.leftView}>
              <View style={styles.dot}></View>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.txtTime}>6:06pm</Text>
              <Text style={styles.txtTitle}>Far East Plaza</Text>
              <Text style={styles.txtGray}>
                14, Scotts Road, Orchard, Singapore, Singapore, 228213
              </Text>
              <Text style={styles.txtStatus}>Dropped - off</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingHorizontal: 25}}>
            <View style={{flex: 1}}>
              <Text style={styles.txtGray}>Job Date</Text>
            </View>
            <Text style={{fontWeight: '600'}}>12/12/2023</Text>
          </View>
          <SwipeButon setAvailable={setAvailable} onSubmit={onSubmit} />
        </View>
        <TouchableOpacity
          style={styles.viewFocusMap}
          onPress={props.zoomToLocation}>
          <Image style={styles.iconMap} source={icon3} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
export default BottomViewCustom2;
