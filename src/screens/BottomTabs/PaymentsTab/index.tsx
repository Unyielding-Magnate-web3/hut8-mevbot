import React from "react";
import { Text } from "react-native";
import GeneralContainer from "../../../common/container/generalContainer";
import { StyleGlobal } from "../../../common/styles/styles-global";

const PaymentsTab = () => {
  return (
    <GeneralContainer>
      <Text style={StyleGlobal.title}>{"Payments are"}</Text>
      <Text style={StyleGlobal.subTitle}>{"what I wait for all day long"}</Text>
    </GeneralContainer>
  );
};

export default PaymentsTab;
