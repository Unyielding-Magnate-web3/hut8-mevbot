import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabBarComponent from "../../common/components/BottomTabBarComponent";
import { ROUTE_LIST, ROUTE_TITLE } from "../../core/constants/routes";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      backBehavior="initialRoute"
      tabBar={(props: any) => <BottomTabBarComponent {...props} />}
    >
      <Tab.Screen
        name={ROUTE_TITLE[ROUTE_LIST.HOME_TAB]}
        component={() => <></>}
      />
      <Tab.Screen
        name={ROUTE_TITLE[ROUTE_LIST.DEBIT_CARD_TAB]}
        component={() => <></>}
      />
      <Tab.Screen
        name={ROUTE_TITLE[ROUTE_LIST.PAYMENTS_TAB]}
        component={() => <></>}
      />
      <Tab.Screen
        name={ROUTE_TITLE[ROUTE_LIST.CREDIT_TAB]}
        component={() => <></>}
      />
      <Tab.Screen
        name={ROUTE_TITLE[ROUTE_LIST.PROFILE_TAB]}
        component={() => <></>}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
