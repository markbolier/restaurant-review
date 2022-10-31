import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {faList} from '@fortawesome/free-solid-svg-icons/faList';
import {faUtensils} from '@fortawesome/free-solid-svg-icons/faUtensils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NavigationContainer} from '@react-navigation/native';

import About from 'components/About';
import AddReview from 'components/AddReview';
import RestaurantInfo from 'components/RestaurantInfo';
import RestaurantList from 'components/RestaurantList';

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

export const Tabs = () => {
  return (
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
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{headerShown: false}}
          name="Tabs"
          component={Tabs}
        />
        <RootStack.Screen
          options={{headerShown: false, presentation: 'modal'}}
          name="AddReview"
          component={AddReview}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
