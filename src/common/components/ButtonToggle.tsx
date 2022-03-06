import React from "react";
import { StyleSheet, Switch } from "react-native";
import { GeneralHelper } from "../../core/helpers/general-helper";
import { ColorsGlobal } from "../styles/colors-global";

type IProps = {
  onPress?: () => void;
  isActive: boolean;
  disabled: boolean;
};
const ButtonToggle: React.FC<IProps> = ({ onPress, isActive, disabled }) => {
  return (
    <Switch
      disabled={disabled}
      style={styles.buttonStyle}
      thumbColor={ColorsGlobal.White}
      trackColor={{
        true: ColorsGlobal.ButtonToggleActive,
        false: ColorsGlobal.ButtonToggleInactive,
      }}
      ios_backgroundColor={
        isActive
          ? ColorsGlobal.ButtonToggleActive
          : ColorsGlobal.ButtonToggleInactive
      }
      onValueChange={onPress}
      value={isActive}
    />
  );
};

export default ButtonToggle;

const styles = StyleSheet.create({
  buttonStyle: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    marginRight: GeneralHelper.ScaledSize(10),
  },
});
