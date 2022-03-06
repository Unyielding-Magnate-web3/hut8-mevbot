import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTE_LIST } from "./core/constants/routes";
import BottomTabs from "./screens/BottomTabs";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParamList = {
  [ROUTE_LIST.BOTTOM_TAB]: undefined;
  [ROUTE_LIST.SPENDING_LIMIT_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTE_LIST.BOTTOM_TAB}>
        <Stack.Screen
          component={BottomTabs}
          name={ROUTE_LIST.BOTTOM_TAB}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
