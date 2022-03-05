import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { ROUTE_LIST, ROUTE_TITLE } from "../../core/constants/routes";

type TTabData = {
  index: number;
  title: string;
  icon: any;
  iconSelected: any;
};

const TABS_DATA: Array<TTabData> = [
  {
    index: 0,
    title: ROUTE_TITLE[ROUTE_LIST.HOME_TAB],
    icon: "",
    iconSelected: "",
  },
  {
    index: 1,
    title: ROUTE_TITLE[ROUTE_LIST.DEBIT_CARD_TAB],
    icon: "",
    iconSelected: "",
  },
  {
    index: 2,
    title: ROUTE_TITLE[ROUTE_LIST.PAYMENTS_TAB],
    icon: "",
    iconSelected: "",
  },
  {
    index: 3,
    title: ROUTE_TITLE[ROUTE_LIST.CREDIT_TAB],
    icon: "",
    iconSelected: "",
  },
  {
    index: 4,
    title: ROUTE_TITLE[ROUTE_LIST.PROFILE_TAB],
    icon: "",
    iconSelected: "",
  },
];

const BottomTabBarComponent: React.FC<BottomTabBarProps> = ({
  navigation,
  state,
}) => {
  return (
    <View>
      <View>
        {TABS_DATA.map((item, index) => {
          const active = state.index == item.index;
          return (
            <TouchableHighlight
              underlayColor="transparent"
              key={index}
              onPress={() => navigation.navigate(item.title)}
            >
              <>
                <Image
                  source={active ? item.iconSelected : item.icon}
                  resizeMode={"contain"}
                />
                <Text>{item.title}</Text>
              </>
            </TouchableHighlight>
          );
        })}
      </View>
      <SafeAreaView />
    </View>
  );
};

export default BottomTabBarComponent;
