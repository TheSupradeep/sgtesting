const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ComponentsTypography from "./screens/ComponentsTypography";
import ComponentsButtons from "./screens/ComponentsButtons";
import ComponentsInputs from "./screens/ComponentsInputs";
import ComponentsUIColors from "./screens/ComponentsUIColors";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Abhaya Libre_regular": require("./assets/fonts/Abhaya_Libre_regular.ttf"),
    "Abhaya Libre_bold": require("./assets/fonts/Abhaya_Libre_bold.ttf"),
    "Abril Fatface_regular": require("./assets/fonts/Abril_Fatface_regular.ttf"),
    Alata_regular: require("./assets/fonts/Alata_regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Screen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="ComponentsTypography"
              component={ComponentsTypography}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ComponentsButtons"
              component={ComponentsButtons}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ComponentsInputs"
              component={ComponentsInputs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ComponentsUIColors"
              component={ComponentsUIColors}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen"
              component={Screen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen1"
              component={Screen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen2"
              component={Screen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen3"
              component={Screen4}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Screen1 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
