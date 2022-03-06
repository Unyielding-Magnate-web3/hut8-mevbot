import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Language } from "../../core/constants/language";
import { ColorsGlobal } from "../styles/colors-global";
import { StyleGlobal } from "../styles/styles-global";

export const ErrorComponent = () => {
  return (
    <View style={StyleGlobal.errorContainer}>
      <Text style={StyleGlobal.errorText}>{Language.Error}</Text>
    </View>
  );
};
