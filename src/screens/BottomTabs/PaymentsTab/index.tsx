import React from "react";
import { Text, View } from "react-native";
import GeneralContainer from "../../../common/container/generalContainer";
import { StyleGlobal } from "../../../common/styles/styles-global";

const PaymentsTab = () => {
  return (
    <GeneralContainer>
      <View style={StyleGlobal.container}>
        <Text style={StyleGlobal.title}>{"Payments are"}</Text>
        <Text style={StyleGlobal.subTitle}>
          {"what I wait for all day long"}
        </Text>
      </View>
    </GeneralContainer>
  );
};

export default PaymentsTab;
