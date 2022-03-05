import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

type TTabData = {
  index: number;
  title: string;
  icon: any;
  iconSelected: any;
};

const TABS_DATA: Array<TTabData> = [];


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
