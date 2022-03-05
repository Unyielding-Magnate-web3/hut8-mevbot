import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

type TProps = {
  children: any;
};

const GeneralContainer = (props: TProps) => {
  return <View style={style.container}>{props.children}</View>;
};

export default GeneralContainer;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
