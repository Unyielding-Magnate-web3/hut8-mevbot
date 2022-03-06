import React from "react";
import {
  Image,
  ImageRequireSource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonToggle from "../../../../common/components/ButtonToggle";
import { ColorsGlobal } from "../../../../common/styles/colors-global";
import {
  eMenuItemType,
  eMenuItemValue,
} from "../../../../core/constants/enums";
import { GeneralHelper } from "../../../../core/helpers/general-helper";

type TProps = {
  icon: ImageRequireSource;
  title: string;
  description: string;
  type?: eMenuItemType;
  value?: eMenuItemValue;
  onPress?: () => void;
};

const MenuItem: React.FC<TProps> = ({
  icon,
  title,
  description,
  type,
  value,
  onPress,
}) => {
  const isItemClickable =
    ((type == eMenuItemType.Toggle && value == eMenuItemValue.Inactive) ||
      type == eMenuItemType.Link) &&
    onPress != null;
  const isButtonClickable =
    type == eMenuItemType.Toggle &&
    value == eMenuItemValue.Active &&
    onPress != null;

  return (
    <TouchableOpacity onPress={onPress} disabled={!isItemClickable}>
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <Image source={icon} style={styles.imageIcon} />
          <View style={styles.containerText}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
        {type == eMenuItemType.Toggle && (
          <ButtonToggle
            isActive={value == eMenuItemValue.Active}
            onPress={onPress}
            disabled={!isButtonClickable}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: GeneralHelper.ScaledSize(15),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerInner: {
    flexDirection: "row",
  },
  imageIcon: {
    height: GeneralHelper.ScaledSize(30),
    width: GeneralHelper.ScaledSize(30),
  },
  containerText: {
    marginLeft: GeneralHelper.ScaledSize(15),
  },
  title: {
    color: ColorsGlobal.TextPrimary,
    fontSize: GeneralHelper.ScaledSize(15),
  },
  description: {
    color: ColorsGlobal.TextSecondary,
    fontSize: GeneralHelper.ScaledSize(12),
  },
});
