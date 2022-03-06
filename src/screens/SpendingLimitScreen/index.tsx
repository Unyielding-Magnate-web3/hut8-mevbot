import React from "react";
import { Text } from "react-native";
import GeneralContainer from "../../common/container/generalContainer";
import { StyleGlobal } from "../../common/styles/styles-global";

const SpendingLimitScreen = () => {
  return (
    <GeneralContainer containerInnerStyle={StyleGlobal.container}>
      <Text style={StyleGlobal.title}>{"Spending Limit"}</Text>
      <Text style={StyleGlobal.subTitle}>
        {"here we go"}
      </Text>
    </GeneralContainer>
  );
};

export default SpendingLimitScreen;
