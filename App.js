import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import one from './screens/one';
import two from './screens/two';
import three from './screens/three';
import four from './screens/four';
import five from './screens/five';
import six from './screens/six';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="one" component={two} />
      <Tab.Screen name="two" component={one} />
      <Tab.Screen name="three" component={three} />
      <Tab.Screen name="four" component={four} />
      <Tab.Screen name="five" component={five} />
      <Tab.Screen name="six" component={six} />
     

      </Tab.Navigator>
    </NavigationContainer>
  );
}
