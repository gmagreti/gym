import React from "react";
import { StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";

import { Loading } from "@components/loading";
import { THEME } from "./src/theme";

import { AuthRoutes } from "@routes/auth.routes";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: "#010101",
          },
        }}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <AuthRoutes /> : <Loading />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
