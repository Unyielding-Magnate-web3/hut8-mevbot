import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HeaderType2Component from "../../common/components/HeaderType2Component";
import GeneralContainer from "../../common/container/generalContainer";
import { ImagesGlobal } from "../../common/styles/images-global";
import { Language } from "../../core/constants/language";
import { GeneralHelper } from "../../core/helpers/general-helper";
import styles from "./styles";

const QuickSelectData = [5000, 10000, 20000];

const SpendingLimitScreen = () => {
  const navigation = useNavigation();

  const onQuickSelect = (value: number) => {};
  const onSave = () => {};

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
          <Text style={styles.subtitleText}>
            {Language.SpendingLimitSummary}
          </Text>
        </View>

        <Text style={styles.spendingLimitSubTitle}>
          {Language.SpendingLimitHelp}
        </Text>

        <View style={styles.containerButtonsQuickSelect}>
          {QuickSelectData.map((iValue, index) => {
            return (
              <View key={index} style={styles.buttonQuickSelectWrapper}>
                <TouchableOpacity
                  onPress={() => onQuickSelect(iValue)}
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
          <TouchableOpacity onPress={onSave} style={styles.buttonSave}>
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
