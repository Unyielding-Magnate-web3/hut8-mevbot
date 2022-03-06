import React from "react";
import {
  Image,
  ImageRequireSource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <Image source={icon} style={styles.imageIcon} />
          <View style={styles.containerText}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: GeneralHelper.ScaledSize(15),
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
