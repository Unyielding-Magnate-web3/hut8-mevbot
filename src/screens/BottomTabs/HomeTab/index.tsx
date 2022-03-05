import React from "react";
import { Text, View } from "react-native";
import GeneralContainer from "../../../common/container/generalContainer";
import { StyleGlobal } from "../../../common/styles/styles-global";

const HomeTab = () => {
  return (
    <GeneralContainer>
      <View style={StyleGlobal.container}>
        <Text style={StyleGlobal.title}>{"Home is"}</Text>
        <Text style={StyleGlobal.subTitle}>
          {"where wifi connects automatically"}
        </Text>
      </View>
    </GeneralContainer>
  );
};

export default HomeTab;
