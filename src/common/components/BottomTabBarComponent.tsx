import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  Image,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { ROUTE_LIST, ROUTE_TITLE } from "../../core/constants/routes";
import { ColorsGlobal } from "../styles/colors-global";

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
    <View style={styles.container}>
      <View style={styles.inner}>
        {TABS_DATA.map((item, index) => {
          const isSelected = state.index == item.index;
          return (
            <TouchableHighlight
              underlayColor="transparent"
              key={index}
              onPress={() => navigation.navigate(item.title)}
              style={styles.iconContainer}
            >
              <>
                <Image
                  source={isSelected ? item.iconSelected : item.icon}
                  resizeMode={"contain"}
                  style={styles.iconImage}
                />
                <Text style={isSelected ? styles.titleSelected : styles.title}>
                  {item.title}
                </Text>
              </>
            </TouchableHighlight>
          );
        })}
      </View>
      <SafeAreaView style={styles.safeAreaViewStyle} />
    </View>
  );
};

export default BottomTabBarComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsGlobal.White,
    position: "absolute",
    elevation: 2,
    bottom: 0,
    right: 0,
    left: 0,
  },
  inner: {
    flexDirection: "row",
  },
  iconImage: {
    height: PixelRatio.roundToNearestPixel(24 / PixelRatio.getFontScale()),
    width: PixelRatio.roundToNearestPixel(24 / PixelRatio.getFontScale()),
  },
  iconContainer: {
    flex: 1,
    paddingVertical: PixelRatio.roundToNearestPixel(
      8 / PixelRatio.getFontScale()
    ),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: ColorsGlobal.TabIcon,
    marginTop: PixelRatio.roundToNearestPixel(1 / PixelRatio.getFontScale()),
    fontSize: PixelRatio.roundToNearestPixel(10 / PixelRatio.getFontScale()),
  },
  titleSelected: {
    color: ColorsGlobal.TabIconSelected,
    marginTop: PixelRatio.roundToNearestPixel(1 / PixelRatio.getFontScale()),
    fontSize: PixelRatio.roundToNearestPixel(10 / PixelRatio.getFontScale()),
  },
  safeAreaViewStyle: {
    backgroundColor: ColorsGlobal.White,
  },
});
