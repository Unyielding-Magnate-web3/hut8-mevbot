import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Language } from "../../core/constants/language";
import { GeneralHelper } from "../../core/helpers/general-helper";
import { ColorsGlobal } from "../styles/colors-global";
import { FontsGlobal } from "../styles/fonts-global";

type TProps = {
  balance: number;
};

const AvailableBalance: React.FC<TProps> = ({ balance }) => {
  return (
    <>
      <Text style={styles.availableBalanceText}>
        {Language.AvailableBalance}
      </Text>
      <View style={styles.containerMoney}>
        <View style={styles.containerCurrency}>
          <Text style={styles.currencyText}>{Language.Currency}</Text>
        </View>
        <Text style={styles.balanceText}>
          {GeneralHelper.CurrencyToString(balance)}
        </Text>
      </View>
    </>
  );
};

export default AvailableBalance;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: ColorsGlobal.Secondary,
    paddingHorizontal: GeneralHelper.ScaledSize(24),
  },
  containerInner: {
    flexDirection: "row",
  },
  imageLogo: {
    height: GeneralHelper.ScaledSize(30),
    width: GeneralHelper.ScaledSize(30),
  },
  containerTitle: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: GeneralHelper.ScaledSize(24),
    marginTop: GeneralHelper.ScaledSize(40),
    color: ColorsGlobal.White,
    textAlign: "center",
  },
  containerLogo: {
    justifyContent: "center",
    paddingRight: GeneralHelper.ScaledSize(8),
  },
  availableBalanceText: {
    fontSize: GeneralHelper.ScaledSize(14),
    fontFamily: FontsGlobal.AvenirNextLTPro_Regular,
    color: ColorsGlobal.White,
    marginTop: GeneralHelper.ScaledSize(30),
  },
  containerMoney: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: GeneralHelper.ScaledSize(10),
  },
  containerCurrency: {
    alignItems: "center",
    justifyContent: "center",
    width: GeneralHelper.ScaledSize(40),
    height: GeneralHelper.ScaledSize(20),
    backgroundColor: ColorsGlobal.Primary,
    borderRadius: GeneralHelper.ScaledSize(3),
  },
  currencyText: {
    fontFamily: FontsGlobal.AvenirNextLTPro_Bold,
    fontSize: GeneralHelper.ScaledSize(12),
    color: ColorsGlobal.White,
  },
  balanceText: {
    fontFamily: FontsGlobal.AvenirNextLTPro_Bold,
    fontSize: GeneralHelper.ScaledSize(24),
    color: ColorsGlobal.White,
    marginLeft: GeneralHelper.ScaledSize(10),
  },
});
