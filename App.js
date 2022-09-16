import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Country from "./Screens/Country";
import Home from "./Screens/Home";
import { PracticeProvider } from "./Screens/PracticeContext";

import Weather from "./Screens/Weather";
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <PracticeProvider>
      <NavigationContainer>
        <stack.Navigator initialRouteName="Home">
          <stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <stack.Screen name="Country" component={Country} />
          <stack.Screen name="Weather" component={Weather} />
        </stack.Navigator>
      </NavigationContainer>
    </PracticeProvider>
  );
}
