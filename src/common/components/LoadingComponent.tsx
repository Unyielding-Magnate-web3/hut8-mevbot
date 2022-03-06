import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Language } from "../../core/constants/language";
import { ColorsGlobal } from "../styles/colors-global";
import { StyleGlobal } from "../styles/styles-global";

export const LoadingComponent = () => {
  return (
    <View style={StyleGlobal.loadingContainer}>
      <Text style={StyleGlobal.loadingText}>{Language.Loading}</Text>
      <ActivityIndicator
        size="large"
        color={ColorsGlobal.White}
      ></ActivityIndicator>
    </View>
  );
};
