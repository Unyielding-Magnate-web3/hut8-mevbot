import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GeneralHelper } from "../../core/helpers/general-helper";
import { ColorsGlobal } from "../styles/colors-global";
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
    height: GeneralHelper.ScaledSize(20),
    width: GeneralHelper.ScaledSize(20),
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
    height: GeneralHelper.ScaledSize(24),
    width: GeneralHelper.ScaledSize(24),
  },
  textTitle: {
    fontSize: GeneralHelper.ScaledSize(25),
    color: ColorsGlobal.White,
    marginLeft: GeneralHelper.ScaledSize(25),
    marginTop: GeneralHelper.ScaledSize(25),
  },
});
