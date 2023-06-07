import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/Home";
import UserFormScreen from "./src/screens/UserForm";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="UserForm" component={UserFormScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
