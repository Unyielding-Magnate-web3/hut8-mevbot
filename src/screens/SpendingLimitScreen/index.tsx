import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HeaderType2Component from "../../common/components/HeaderType2Component";
import CurrencyInputComponent from "../../common/components/CurrencyInputComponent";
import GeneralContainer from "../../common/container/generalContainer";
import { ColorsGlobal } from "../../common/styles/colors-global";
import { ImagesGlobal } from "../../common/styles/images-global";
import { Language } from "../../core/constants/language";
import { GeneralHelper } from "../../core/helpers/general-helper";
import styles from "./styles";
import { SpendingLimitQuickSelectData } from "../../core/constants/app-data";

const SpendingLimitScreen = () => {
  const navigation = useNavigation();
  const [spendingLimit, setSpendingLimit] = useState("");

  const onSpendingLimitChange = (value: number) => {
    setSpendingLimit(GeneralHelper.CurrencyToString(value));
  };

  const onSave = () => {
    if (spendingLimit && spendingLimit != "") {
      navigation.goBack();
    }
  };

  return (
    <GeneralContainer containerInnerStyle={styles.container}>
      <HeaderType2Component
        title={Language.SpendingLimitScreenTitle}
        onBack={navigation.goBack}
      />

      <View style={styles.containerInner}>
        <View style={styles.sectionSummary}>
          <Image
            resizeMode="contain"
            source={ImagesGlobal.IconGuage}
            style={styles.subtitleLogoStyle}
          />
          <Text style={styles.textSummary}>
            {Language.SpendingLimitSummary}
          </Text>
        </View>

        <CurrencyInputComponent
          onChange={onSpendingLimitChange}
          value={spendingLimit}
        />

        <Text style={styles.textSpendingLimitHelp}>
          {Language.SpendingLimitHelp}
        </Text>

        <View style={styles.containerButtonsQuickSelect}>
          {SpendingLimitQuickSelectData.map((iValue, index) => {
            return (
              <View key={index} style={styles.buttonQuickSelectWrapper}>
                <TouchableOpacity
                  onPress={() => onSpendingLimitChange(iValue)}
                  style={styles.buttonQuickSelect}
                >
                  <Text style={styles.textButtonQuickSelect}>
                    {GeneralHelper.CurrencyToString(iValue, true)}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <View style={styles.containerButtonSave}>
          <TouchableOpacity
            onPress={onSave}
            style={[
              styles.buttonSave,
              {
                backgroundColor:
                  spendingLimit != ""
                    ? ColorsGlobal.ButtonActive
                    : ColorsGlobal.ButtonInactive,
              },
            ]}
          >
            <Text style={styles.textButtonSave}>
              {Language.SpendingLimitButtonSave}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GeneralContainer>
  );
};

export default SpendingLimitScreen;
