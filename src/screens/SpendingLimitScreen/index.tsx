import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HeaderType2Component from "../../common/components/HeaderType2Component";
import CurrencyInputComponent from "../../common/components/CurrencyInputComponent";
import { ColorsGlobal } from "../../common/styles/colors-global";
import { ImagesGlobal } from "../../common/styles/images-global";
import { Language } from "../../core/constants/language";
import { GeneralHelper } from "../../core/helpers/general-helper";
import styles from "./styles";
import { SpendingLimitQuickSelectData } from "../../core/constants/app-data";
import { useDispatch } from "react-redux";
import { actionSetSpendingLimit } from "../../redux/actions";
import { eCurrencyFormat } from "../../core/constants/enums";
import GeneralKeyboardContainer from "../../common/container/generalKeyboardContainer";

const SpendingLimitScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [spendingLimit, setSpendingLimit] = useState(0);

  const onSpendingLimitChange = (value: number) => {
    setSpendingLimit(value);
  };

  const onSave = () => {
    if (spendingLimit > 0) {
      dispatch(actionSetSpendingLimit(spendingLimit));
      navigation.goBack();
    }
  };

  return (
    <GeneralKeyboardContainer containerInnerStyle={styles.container}>
      <HeaderType2Component
        title={Language.SpendingLimitScreenTitle}
        onBack={navigation.goBack}
      />

      <View style={styles.containerInner}>
        <View style={styles.sectionSummary}>
          <Image
            resizeMode="contain"
            source={ImagesGlobal.IconGuage}
            style={styles.imageIconGuage}
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
                    {GeneralHelper.CurrencyToString(
                      iValue,
                      eCurrencyFormat.Full
                    )}
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
                  spendingLimit > 0
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
    </GeneralKeyboardContainer>
  );
};

export default SpendingLimitScreen;
