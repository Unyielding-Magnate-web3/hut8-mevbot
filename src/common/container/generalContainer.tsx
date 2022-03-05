import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { ColorsGlobal } from "../styles/colors-global";

type TProps = {
  containerStyle?: ViewStyle | Array<ViewStyle>;
  containerInnerStyle?: ViewStyle | Array<ViewStyle>;
  children: React.ReactNode;
};

const GeneralContainer: React.FC<TProps> = ({
  containerInnerStyle = {},
  containerStyle,
  children,
}) => {
  return (
    <SafeAreaView style={containerStyle || stylesDefault.container}>
      <View style={containerInnerStyle || stylesDefault.containerInner}>
        <StatusBar animated barStyle={"dark-content"} />
        {children}
      </View>
    </SafeAreaView>
  );
};
const stylesDefault = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsGlobal.Secondary,
  },
  containerInner: {
    flex: 1,
    backgroundColor: ColorsGlobal.White,
  },
});

export default GeneralContainer;
