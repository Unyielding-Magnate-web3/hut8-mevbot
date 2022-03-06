import { StyleSheet } from "react-native";
import { ColorsGlobal } from "../../common/styles/colors-global";
import { GeneralHelper } from "../../core/helpers/general-helper";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsGlobal.Secondary,
  },
  spendingLimitSubTitle: {
    color: ColorsGlobal.TextSecondary,
    marginTop: GeneralHelper.ScaledSize(10),
    fontSize: GeneralHelper.ScaledSize(10),
  },
  containerInner: {
    flex: 1,
    paddingHorizontal: GeneralHelper.ScaledSize(20),
    backgroundColor: ColorsGlobal.White,
    borderTopRightRadius: GeneralHelper.ScaledSize(25),
    borderTopLeftRadius: GeneralHelper.ScaledSize(25),
    paddingBottom: GeneralHelper.ScaledSize(20),
    marginTop: GeneralHelper.ScaledSize(50),
    marginBottom: -GeneralHelper.ScaledSize(35),
  },
  sectionSummary: {
    flexDirection: "row",
    marginTop: GeneralHelper.ScaledSize(20),
    alignItems: "center",
  },
  subtitleLogoStyle: {
    width: GeneralHelper.ScaledSize(15),
    height: GeneralHelper.ScaledSize(15),
  },
  subtitleText: {
    marginLeft: GeneralHelper.ScaledSize(10),
    fontSize: GeneralHelper.ScaledSize(10),
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
    fontSize: GeneralHelper.ScaledSize(10),
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
    backgroundColor: ColorsGlobal.ButtonInactive,
  },
  textButtonSave: {
    fontSize: GeneralHelper.ScaledSize(15),
    color: ColorsGlobal.White,
  },
});
