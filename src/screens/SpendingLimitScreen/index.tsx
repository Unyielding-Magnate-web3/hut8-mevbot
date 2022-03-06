import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import HeaderType2Component from "../../common/components/HeaderType2Component";
import GeneralContainer from "../../common/container/generalContainer";
import { StyleGlobal } from "../../common/styles/styles-global";
import { Language } from "../../core/constants/language";
import styles from "./styles";

const SpendingLimitScreen = () => {
  const navigation = useNavigation();

  return (
    <GeneralContainer containerInnerStyle={styles.container}>
      <HeaderType2Component
        title={Language.SpendingLimitScreenTitle}
        onBack={navigation.goBack}
      />
    </GeneralContainer>
  );
};

export default SpendingLimitScreen;
