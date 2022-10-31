import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons/faList';
import {faUtensils} from '@fortawesome/free-solid-svg-icons/faUtensils';

import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo';
import About from 'components/About';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: '#0066CC',
          tabBarActiveBackgroundColor: '#E6F0FA',
        }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faList} size={22} color={color} />
            ),
          }}
          name="List"
          component={List}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faUtensils} size={22} color={color} />
            ),
          }}
          name="About"
          component={About}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

export const List = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={RestaurantList}
      />
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: '#0066CC', color: '#FFF'},
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
          },
        }}
        name="Restaurant Info"
        component={RestaurantInfo}
      />
    </Stack.Navigator>
  );
};
