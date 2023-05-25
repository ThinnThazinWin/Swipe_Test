import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Notifications from './Notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import NotificationScreen from './screens/NotificationScreen';

export default function App() {
const Stack = createNativeStackNavigator();
  
return (
   <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name='NotificationScreen' component={NotificationScreen} options={{headerShown:false}}/>
     <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

