// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Map from '../screens/Map';
import Job from '../screens/Job';
import SCREEN_NAME from '../constants/Screen';
import {home, car, coin, menu} from '../assets/tab';
import {Image, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: '#fff'},
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#2362DA',
      }}>
      <Tab.Screen
        name={SCREEN_NAME.HOME}
        component={Home}
        options={({route}) => {
          return {
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image source={home} style={styles.iconActive} />
              ) : (
                <Image source={home} style={styles.iconInactive} />
              ),
          };
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.COIN}
        component={Home}
        options={({route}) => {
          return {
            tabBarLabel: 'Coin',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image source={coin} style={styles.iconActive} />
              ) : (
                <Image source={coin} style={styles.iconInactive} />
              ),
          };
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.JOB}
        component={Job}
        options={({route}) => {
          return {
            tabBarLabel: 'Job',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image source={car} style={styles.iconActive} />
              ) : (
                <Image source={car} style={styles.iconInactive} />
              ),
            tabBarBadge: '1',
            tabBarBadgeStyle: {
              backgroundColor: '#2362DA',
            },
          };
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.MENU}
        component={Home}
        options={({route}) => {
          return {
            tabBarLabel: 'Menu',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image source={menu} style={styles.iconActive} />
              ) : (
                <Image source={menu} style={styles.iconInactive} />
              ),
          };
        }}
      />
    </Tab.Navigator>
  );
}
export default Tabs;
const styles = StyleSheet.create({
  iconActive: {
    width: 25,
    height: 25,
    tintColor: '#2362DA',
  },
  iconInactive: {
    width: 25,
    height: 25,
    tintColor: '#000',
  },
});
