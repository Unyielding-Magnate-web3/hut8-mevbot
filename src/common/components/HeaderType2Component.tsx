import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GeneralHelper } from "../../core/helpers/general-helper";
import { ColorsGlobal } from "../styles/colors-global";
import { FontsGlobal } from "../styles/fonts-global";
import { ImagesGlobal } from "../styles/images-global";
type IProps = {
  title: string;
  onBack: () => void;
};

const HeaderType2Component: React.FC<IProps> = ({ title, onBack }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <TouchableOpacity onPress={onBack} style={styles.containerButtonBack}>
            <Image
              source={ImagesGlobal.IconBack}
              resizeMode="contain"
              style={styles.imageBackIcon}
            ></Image>
          </TouchableOpacity>
          <View style={styles.containerLogo}>
            <Image
              source={ImagesGlobal.LogoPrimary}
              style={styles.imageLogo}
            ></Image>
          </View>
        </View>
      </View>
      <Text style={styles.textTitle}>{title}</Text>
    </>
  );
};

export default HeaderType2Component;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: ColorsGlobal.Secondary,
    paddingHorizontal: GeneralHelper.ScaledSize(24),
  },
  containerInner: {
    flexDirection: "row",
  },
  imageBackIcon: {
    height: GeneralHelper.ScaledSize(16),
    width: GeneralHelper.ScaledSize(9),
  },
  containerButtonBack: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  containerLogo: {
    justifyContent: "center",
    paddingRight: GeneralHelper.ScaledSize(10),
  },
  imageLogo: {
    height: GeneralHelper.ScaledSize(25),
    width: GeneralHelper.ScaledSize(25),
  },
  textTitle: {
    fontFamily: FontsGlobal.AvenirNextLTPro_Bold,
    fontSize: GeneralHelper.ScaledSize(24),
    color: ColorsGlobal.White,
    marginLeft: GeneralHelper.ScaledSize(25),
    marginTop: GeneralHelper.ScaledSize(25),
  },
});
