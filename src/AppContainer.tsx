import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTE_LIST } from "./core/constants/routes";
import BottomTabs from "./screens/BottomTabs";

export type RootStackParamList = {
  [ROUTE_LIST.BOTTOM_TAB]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppContainer() {
  return (
    <Stack.Navigator initialRouteName={ROUTE_LIST.BOTTOM_TAB}>
      <Stack.Screen
        component={BottomTabs}
        name={ROUTE_LIST.BOTTOM_TAB}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
