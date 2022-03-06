import React from "react";
import { Text, StyleSheet, View, TextInput, Alert } from "react-native";
import { Language } from "../../core/constants/language";
import { GeneralHelper } from "../../core/helpers/general-helper";
import { ColorsGlobal } from "../styles/colors-global";
import { FontsGlobal } from "../styles/fonts-global";

type IProps = {
  onChange: (val: number) => void;
  value: number;
};

const CurrencyInputComponent: React.FC<IProps> = ({ onChange, value }) => {
  const onChangeText = (val: string) => {
    if (val && val != "") {
      val = val.replace(/,/g, "");
    }
    const parsedValue = Number.parseInt(val);
    onChange(parsedValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCurrentSymbol}>
        <Text style={styles.textCurrency}>{Language.Currency}</Text>
      </View>
      <TextInput
        value={GeneralHelper.CurrencyToString(value)}
        keyboardType="numeric"
        onChangeText={onChangeText}
        style={styles.inputCurrency}
      ></TextInput>
    </View>
  );
};

export default CurrencyInputComponent;

const styles = StyleSheet.create({
  containerCurrentSymbol: {
    backgroundColor: ColorsGlobal.Primary,
    borderRadius: GeneralHelper.ScaledSize(5),
    alignItems: "center",
    justifyContent: "center",
  },
  textCurrency: {
    fontFamily: FontsGlobal.AvenirNextLTPro_Bold,
    fontSize: GeneralHelper.ScaledSize(13),
    color: ColorsGlobal.White,
    paddingHorizontal: GeneralHelper.ScaledSize(13),
    paddingVertical: GeneralHelper.ScaledSize(6),
  },
  container: {
    flexDirection: "row",
    paddingVertical: GeneralHelper.ScaledSize(10),
    borderBottomWidth: 0.5,
    borderColor: ColorsGlobal.TextSecondary,
    alignItems: "center",
  },
  inputCurrency: {
    fontFamily: FontsGlobal.AvenirNextLTPro_Bold,
    flex: 1,
    marginLeft: GeneralHelper.ScaledSize(15),
    fontSize: GeneralHelper.ScaledSize(24),
  },
});
