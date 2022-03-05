import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import BottomTabBarComponent from "../../common/components/BottomTabBarComponent";
import { ROUTE_LIST, ROUTE_TITLE } from "../../core/constants/routes";
import HomeTab from "./HomeTab";
import DebitCardTab from "./DebitCardTab";
import PaymentsTab from "./PaymentsTab";
import CreditTab from "./CreditTab";
import ProfileTab from "./ProfileTab";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      backBehavior="initialRoute"
      tabBar={(props: BottomTabBarProps) => (
        <BottomTabBarComponent {...props} />
      )}
    >
      <Tab.Screen name={ROUTE_TITLE[ROUTE_LIST.HOME_TAB]} component={HomeTab} />
      <Tab.Screen
        name={ROUTE_TITLE[ROUTE_LIST.DEBIT_CARD_TAB]}
        component={DebitCardTab}
      />
      <Tab.Screen
        name={ROUTE_TITLE[ROUTE_LIST.PAYMENTS_TAB]}
        component={PaymentsTab}
      />
      <Tab.Screen
        name={ROUTE_TITLE[ROUTE_LIST.CREDIT_TAB]}
        component={CreditTab}
      />
      <Tab.Screen
        name={ROUTE_TITLE[ROUTE_LIST.PROFILE_TAB]}
        component={ProfileTab}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
