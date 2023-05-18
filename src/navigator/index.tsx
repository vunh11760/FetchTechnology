import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tab from './tab';
import Map from '../screens/Map';
import Job from '../screens/Job';
import SCREEN_NAME from '../constants/Screen';
import {RootStackParamList} from '../types/RootStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
const Stack = createStackNavigator<RootStackParamList>();

function AppContainer() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={SCREEN_NAME.TAB}>
        <Stack.Screen
          name={SCREEN_NAME.MAP}
          component={Map}
          options={{
            headerShown: false,
            headerTransparent: true,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_NAME.TAB}
          component={Tab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.JOB}
          component={Job}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppContainer;
