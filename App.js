import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import Home from './src/pages/Home';


const Tab = createBottomTabNavigator();

export default function App() {
  const {width, _} = Dimensions.get('screen')
  let selectedWidth = width

  //web selectedWidth limit = 840 / mobile = 425
  if (selectedWidth > 425) {
    selectedWidth = 425
  }

  let [fontsLoaded] = useFonts({
    'Samsung-Logo': require('./assets/fonts/SamsungLogo.ttf'),
    'Samsung-Sans': require('./assets/fonts/SamsungSans-Regular.ttf'),
    'Samsung-Sans-Bold': require('./assets/fonts/SamsungSans-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
      <NavigationContainer>
        <StatusBar />
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2D66FF',
          tabBarShowLabel: false,
        }}>
          
          <Tab.Screen 
            name = 'Home'
            component = {Home}
            options={{
              tabBarIcon: ({color, size}) => {
                return <Entypo name="home" size={size} color={color}/>
              }
            }}
          >

          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  );
}