import React from "react";
import { Text, StyleSheet, View, TextInput, Alert } from "react-native";
import { Language } from "../../core/constants/language";
import { GeneralHelper } from "../../core/helpers/general-helper";
import { ColorsGlobal } from "../styles/colors-global";

type IProps = {
  onChange: (val: number) => void;
  value: string;
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
        value={value}
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
    fontSize: GeneralHelper.ScaledSize(10),
    fontWeight: "bold",
    color: ColorsGlobal.White,
    paddingHorizontal: GeneralHelper.ScaledSize(15),
    paddingVertical: GeneralHelper.ScaledSize(5),
  },
  container: {
    flexDirection: "row",
    paddingVertical: GeneralHelper.ScaledSize(10),
    borderBottomWidth: 0.5,
    borderColor: ColorsGlobal.TextSecondary,
    alignItems: "center",
  },
  inputCurrency: {
    flex: 1,
    marginLeft: GeneralHelper.ScaledSize(15),
    fontSize: GeneralHelper.ScaledSize(20),
  },
});
