import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DeviceWidth } from "../../core/constants/app-data";
import { eCurrencyFormat } from "../../core/constants/enums";
import { Language } from "../../core/constants/language";
import { GeneralHelper } from "../../core/helpers/general-helper";
import { ColorsGlobal } from "../styles/colors-global";
type IProps = {
  spent: number;
  spendingLimit: number;
};

const SpendingLimitGuageComponent: React.FC<IProps> = ({
  spent,
  spendingLimit,
}) => {
  const calculateBarWidth = () => {
    let value: number = 0;
    if (spent && spendingLimit) {
      value = spent / spendingLimit;
    }
    return value;
  };

  return (
    <>
      <View style={styles.containerHeader}>
        <Text style={styles.textTitle}>{Language.DebitCardSpendingLimit}</Text>
        <Text style={styles.textNume}>
          {GeneralHelper.CurrencyToString(spent, eCurrencyFormat.Min)}
        </Text>
        <Text style={styles.textDeno}>&nbsp;|&nbsp;</Text>
        <Text style={styles.textDeno}>
          {GeneralHelper.CurrencyToString(spendingLimit, eCurrencyFormat.Min)}
        </Text>
      </View>

      <View style={styles.containerGuageBar}>
        <View
          style={[
            styles.guageBar,
            {
              width: DeviceWidth * calculateBarWidth(),
            },
          ]}
        ></View>
      </View>
    </>
  );
};

export default SpendingLimitGuageComponent;

const styles = StyleSheet.create({
  containerHeader: {
    marginTop: GeneralHelper.ScaledSize(30),
    flexDirection: "row",
  },
  textTitle: {
    flex: 1,
  },
  containerGuageBar: {
    overflow: "hidden",
    flex: 1,
    height: GeneralHelper.ScaledSize(15),
    backgroundColor: ColorsGlobal.PrimaryLight,
    marginTop: GeneralHelper.ScaledSize(10),
    borderRadius: GeneralHelper.ScaledSize(20),
  },
  guageBar: {
    borderStyle: "solid",
    borderTopWidth: GeneralHelper.ScaledSize(100),
    borderRightWidth: GeneralHelper.ScaledSize(100),
    borderTopColor: ColorsGlobal.Primary,
    borderRightColor: ColorsGlobal.Transparent,
  },
  textNume: { color: ColorsGlobal.Primary },
  textDeno: { color: ColorsGlobal.TextSecondary },
});
