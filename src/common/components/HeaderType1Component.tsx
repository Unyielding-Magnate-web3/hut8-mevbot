import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { GeneralHelper } from "../../core/helpers/general-helper";
import { ColorsGlobal } from "../styles/colors-global";
import { ImagesGlobal } from "../styles/images-global";
type IProps = {
  title: string;
  children?: any;
};

const HeaderStyle1Component: React.FC<IProps> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.containerLogo}>
          <Image
            source={ImagesGlobal.LogoPrimary}
            style={styles.imageLogo}
          ></Image>
        </View>
      </View>
      {children}
    </View>
  );
};

export default HeaderStyle1Component;

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
    color: ColorsGlobal.White,
    textAlign: "center",
    marginTop: GeneralHelper.ScaledSize(40),
  },
  containerLogo: {
    justifyContent: "center",
    paddingRight: GeneralHelper.ScaledSize(8),
  },
});
