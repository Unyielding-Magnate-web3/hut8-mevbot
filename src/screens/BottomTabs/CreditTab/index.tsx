import React from "react";
import { Text, View } from "react-native";
import GeneralContainer from "../../../common/container/generalContainer";
import { StyleGlobal } from "../../../common/styles/styles-global";

const CreditTab = () => {
  return (
    <GeneralContainer>
      <View style={StyleGlobal.container}>
        <Text style={StyleGlobal.title}>{"Credit"}</Text>
        <Text style={StyleGlobal.subTitle}>
          {"isn't that's just capita...never mind"}
        </Text>
      </View>
    </GeneralContainer>
  );
};

export default CreditTab;
