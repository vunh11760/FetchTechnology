import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Image,
  PanResponder,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {icon5} from '../../../../assets/icons';

const {height, width} = Dimensions.get('screen');
const MAX_WIDTH_BUTTON = width - 80;

const POINT_SUCCESS = (MAX_WIDTH_BUTTON * 70) / 100;
const SupportCenterUme = props => {
  const [isLoading, setIsLoading] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const panDefaul = useRef(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    }),
  ).current;
  const end = useRef(
    new Animated.ValueXY({
      x: 0,
      y: MAX_WIDTH_BUTTON,
    }),
  ).current;
  const panResponder = useRef(
    PanResponder.create({
      //   onMoveShouldSetPanResponder: (evt, gestureState) => {
      //     //return true if user is swiping, return false if it's a single click
      //     return !(gestureState.dx === 0 && gestureState.dy === 0);
      //   },
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onShouldBlockNativeResponder: () => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Alert.alert("a");
        // props.setEnableDown(false);
        const {dx, dy} = gestureState;
        if (dx > 0) {
          props.setAvailable(false);
          return true;
        }
        return dx > 2 || dx < -2 || dy > 2 || dy < -2;
      },
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      // onPanResponderMove: (e, gestureState) => {
      //   const { dx, dy } = gestureState;
      //   Animated.event([null, { dx: pan.x, dy: panDefaul.y }]);
      // },
      onPanResponderMove: (e, gestureState) =>
        // Here, 30 is the limit it stops at. This works in both directions
        {
          if (gestureState.dx < 0) return null;
          return Math.abs(gestureState.dx) > MAX_WIDTH_BUTTON
            ? null
            : Animated.event([null, {dx: pan.x, dy: panDefaul.y}])(
                e,
                gestureState,
              );
        },
      // onPanResponderMove: Animated.event([
      //   null,
      //   { dx: pan.x, dy: panDefaul.y },
      // ]),
      onPanResponderRelease: () => {
        props.setAvailable(true);
        pan.flattenOffset();
        let newX = pan.x._value;
        let newY = pan.y._value;
        if (newX > POINT_SUCCESS) {
          setIsLoading(true);
          props.onSubmit();
          Animated.spring(pan, {
            toValue: {x: MAX_WIDTH_BUTTON - 5, y: 0},
          }).start();
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
          }).start();
        }
      },
    }),
  ).current;

  return (
    <>
      <View style={{alignItems: 'center', marginTop: 40}}>
        <View
          style={{
            width: MAX_WIDTH_BUTTON + 45,
            backgroundColor: '#226AF5',
            height: 50,
            borderRadius: 25,
          }}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text>Completed</Text>
          </View>
          <Animated.View
            style={[
              {
                position: 'absolute',
                transform: [{translateX: pan.x}, {translateY: pan.y}],
              },
            ]}
            {...panResponder.panHandlers}>
            <TouchableOpacity
              style={{
                width: 46,
                height: 46,
                backgroundColor: '#fff',
                borderRadius: 25,
                marginTop: 2,
                marginLeft: 2,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#fff',
                shadowOffset: {
                  width: 10,
                  height: 10,
                },
                shadowOpacity: 0.25,
                shadowRadius: 10,
              }}
              onPress={() => {}}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <Image
                  style={{width: 30, height: 30}}
                  source={icon5}
                  resizeMode={'contain'}
                />
              )}
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </>
  );
};
export default React.memo(SupportCenterUme);
