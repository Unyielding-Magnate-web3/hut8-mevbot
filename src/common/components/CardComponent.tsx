import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Language } from "../../core/constants/language";
import { GeneralHelper } from "../../core/helpers/general-helper";
import { ColorsGlobal } from "../styles/colors-global";
import { FontsGlobal } from "../styles/fonts-global";
import { ImagesGlobal } from "../styles/images-global";
type IProps = {
  cardDetails: {};
};

const CardComponent: React.FC<IProps> = ({ cardDetails }) => {
  const [isMasked, setIsMasked] = useState(false);

  const toggleMasking = () => {
    setIsMasked(!isMasked);
  };

  return (
    <View>
      <View style={styles.containerMaskButton}>
        <TouchableHighlight underlayColor="transparent" onPress={toggleMasking}>
          <View style={styles.containerMaskButtonInner}>
            <Image
              resizeMode={"contain"}
              source={isMasked ? ImagesGlobal.IconHide : ImagesGlobal.IconShow}
              style={styles.iconButtonMask}
            />
            <Text style={styles.textButtonMask}>
              {isMasked ? Language.HideCardNumber : Language.ShowCardNumber}
            </Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.containerCard}>
        <View style={styles.containerCardBrand}>
          <Image
            source={ImagesGlobal.IconCardBrandAspire}
            style={styles.imageCardBrandIcon}
          />
        </View>
        <View style={styles.containerCardDetails}>
          <Text style={styles.textCardHolderName}>{"Mark Henry"}</Text>

          <Text style={styles.textCardNumber}>
            {GeneralHelper.CardNumberToString("", !isMasked)}
          </Text>

          <View style={styles.containerCardSecret}>
            <Text style={styles.textCardExpiry}>
              {GeneralHelper.CardExpiryToString(new Date())}
            </Text>

            <Text style={styles.textCardCVV}>
              {GeneralHelper.CardCVVToString("", !isMasked)}
            </Text>
          </View>
        </View>
        <View style={styles.containerCardNetwork}>
          <Image
            resizeMode="contain"
            source={ImagesGlobal.IconCardNetworkVisa}
            style={styles.imageCardNetworkIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  containerMaskButton: {
    backgroundColor: ColorsGlobal.White,
    borderTopLeftRadius: GeneralHelper.ScaledSize(5),
    borderTopRightRadius: GeneralHelper.ScaledSize(5),
    width: GeneralHelper.ScaledSize(150),
    height: GeneralHelper.ScaledSize(50),
    position: "absolute",
    right: 0,
    top: -GeneralHelper.ScaledSize(85),
  },
  containerMaskButtonInner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: GeneralHelper.ScaledSize(30),
  },
  textButtonMask: {
    fontFamily: FontsGlobal.AvenirNextLTPro_Bold,
    color: ColorsGlobal.Primary,
    marginLeft: GeneralHelper.ScaledSize(5),
    fontSize: GeneralHelper.ScaledSize(12),
  },
  iconButtonMask: {
    width: GeneralHelper.ScaledSize(15),
    height: GeneralHelper.ScaledSize(15),
  },
  containerCard: {
    width: "100%",
    height: GeneralHelper.ScaledSize(200),
    padding: GeneralHelper.ScaledSize(20),
    marginTop: -GeneralHelper.ScaledSize(50),
    backgroundColor: ColorsGlobal.Primary,
    borderRadius: GeneralHelper.ScaledSize(10),
    flexDirection: "column",
  },
  containerCardBrand: {
    alignSelf: "flex-end",
  },
  imageCardBrandIcon: {
    height: GeneralHelper.ScaledSize(20),
    width: GeneralHelper.ScaledSize(75),
  },
  containerCardDetails: {
    marginTop: GeneralHelper.ScaledSize(20),
  },
  textCardHolderName: {
    fontFamily: FontsGlobal.AvenirNextLTPro_Bold,
    color: ColorsGlobal.White,
    fontSize: GeneralHelper.ScaledSize(22),
  },
  textCardNumber: {
    color: ColorsGlobal.White,
    fontFamily: FontsGlobal.AvenirNextLTPro_Bold,
    marginTop: GeneralHelper.ScaledSize(30),
    fontSize: GeneralHelper.ScaledSize(14),
    fontWeight: "900",
    letterSpacing: 5,
    lineHeight: 20,
  },
  containerCardSecret: {
    flexDirection: "row",
  },
  containerCardNetwork: {
    position: "absolute",
    bottom: GeneralHelper.ScaledSize(25),
    right: GeneralHelper.ScaledSize(25),
  },
  imageCardNetworkIcon: {
    height: GeneralHelper.ScaledSize(20),
    width: GeneralHelper.ScaledSize(60),
  },
  textCardExpiry: {
    fontFamily: FontsGlobal.AvenirNextLTPro_Regular,
    color: ColorsGlobal.White,
    marginTop: GeneralHelper.ScaledSize(20),
    fontSize: GeneralHelper.ScaledSize(13),
  },
  textCardCVV: {
    fontFamily: FontsGlobal.AvenirNextLTPro_Regular,
    marginLeft: GeneralHelper.ScaledSize(35),
    color: ColorsGlobal.White,
    marginTop: GeneralHelper.ScaledSize(20),
    fontSize: GeneralHelper.ScaledSize(13),
  },
});
