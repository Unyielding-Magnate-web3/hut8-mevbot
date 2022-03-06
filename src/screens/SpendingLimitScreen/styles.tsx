import { StyleSheet } from "react-native";
import { ColorsGlobal } from "../../common/styles/colors-global";
import { FontsGlobal } from "../../common/styles/fonts-global";
import { GeneralHelper } from "../../core/helpers/general-helper";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsGlobal.Secondary,
  },
  textSpendingLimitHelp: {
    color: ColorsGlobal.TextSecondary,
    marginTop: GeneralHelper.ScaledSize(10),
    fontSize: GeneralHelper.ScaledSize(13),
    fontFamily: FontsGlobal.AvenirNextLTPro_Regular,
  },
  containerInner: {
    flex: 1,
    paddingHorizontal: GeneralHelper.ScaledSize(20),
    backgroundColor: ColorsGlobal.White,
    borderTopRightRadius: GeneralHelper.ScaledSize(24),
    borderTopLeftRadius: GeneralHelper.ScaledSize(24),
    paddingBottom: GeneralHelper.ScaledSize(20),
    marginTop: GeneralHelper.ScaledSize(50),
    marginBottom: -GeneralHelper.ScaledSize(35),
  },
  sectionSummary: {
    flexDirection: "row",
    marginTop: GeneralHelper.ScaledSize(20),
    alignItems: "center",
  },
  imageIconGuage: {
    width: GeneralHelper.ScaledSize(16),
    height: GeneralHelper.ScaledSize(16),
  },
  textSummary: {
    fontFamily: FontsGlobal.AvenirNextLTPro_Regular,
    marginLeft: GeneralHelper.ScaledSize(10),
    fontSize: GeneralHelper.ScaledSize(14),
  },
  containerButtonsQuickSelect: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    marginTop: GeneralHelper.ScaledSize(20),
  },
  buttonQuickSelect: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: GeneralHelper.ScaledSize(2),
    height: GeneralHelper.ScaledSize(40),
    backgroundColor: ColorsGlobal.ButtonQuickSelectBackground,
    marginHorizontal: GeneralHelper.ScaledSize(5),
  },
  textButtonQuickSelect: {
    color: ColorsGlobal.Primary,
    fontSize: GeneralHelper.ScaledSize(12),
    fontFamily: FontsGlobal.AvenirNextLTPro_Bold,
  },
  buttonQuickSelectWrapper: {
    flex: 1,
  },
  containerButtonSave: {
    position: "absolute",
    bottom: GeneralHelper.ScaledSize(50),
    left: 0,
    right: 0,
  },
  buttonSave: {
    borderRadius: GeneralHelper.ScaledSize(30),
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: GeneralHelper.ScaledSize(50),
  },
  textButtonSave: {
    fontFamily: FontsGlobal.AvenirNextLTPro_Bold,
    fontSize: GeneralHelper.ScaledSize(16),
    color: ColorsGlobal.White,
  },
});
