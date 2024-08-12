import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenOne from './Screens/ScreenOne';
import ScreenTwo from './Screens/ScreenTwo';
import ScreenThree from './Screens/ScreenThree';
import ScreenFour from './Screens/ScreenFour';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ScreenOne" component={ScreenOne} />
        <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
        <Tab.Screen name="ScreenThree" component={ScreenThree} />
        <Tab.Screen name="ScreenFour" component={ScreenFour} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
