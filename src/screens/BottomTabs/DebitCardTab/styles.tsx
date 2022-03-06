import { StyleSheet } from "react-native";
import { ColorsGlobal } from "../../../common/styles/colors-global";
import { GeneralHelper } from "../../../core/helpers/general-helper";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsGlobal.Secondary,
  },
  content: {
    flex: 1,
    backgroundColor: ColorsGlobal.White,
    paddingHorizontal: GeneralHelper.ScaledSize(20),
    borderTopRightRadius: GeneralHelper.ScaledSize(24),
    borderTopLeftRadius: GeneralHelper.ScaledSize(24),
    paddingBottom: GeneralHelper.ScaledSize(50),
  },
  spacer: {
    height: GeneralHelper.ScaledSize(230),
  },
  compensateBottomBar: {
    paddingBottom: GeneralHelper.ScaledSize(50),
  },
  scrollViewMainContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
  },
});
